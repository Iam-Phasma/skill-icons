const fs = require('fs');
const path = require('path');

const MIME_BY_EXT = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (!arg.startsWith('--')) continue;

    const key = arg.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith('--')) {
      args[key] = true;
    } else {
      args[key] = next;
      i++;
    }
  }
  return args;
}

function toSafeIconName(rawName) {
  const withoutTrailingSvg = rawName.replace(/\.svg$/i, '');
  return withoutTrailingSvg.replace(/[^a-zA-Z0-9]/g, '');
}

function buildRadiusOnlySvg({ encodedImage, mimeType, tileSize, cornerRadius, padding }) {
  const imageSize = tileSize - padding * 2;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${tileSize}" height="${tileSize}" fill="none" viewBox="0 0 ${tileSize} ${tileSize}">
  <defs>
    <clipPath id="tile-radius">
      <rect width="${tileSize}" height="${tileSize}" rx="${cornerRadius}"/>
    </clipPath>
  </defs>
  <g clip-path="url(#tile-radius)">
    <image href="data:${mimeType};base64,${encodedImage}" x="${padding}" y="${padding}" width="${imageSize}" height="${imageSize}" preserveAspectRatio="xMidYMid meet"/>
  </g>
</svg>
`;
}

function printUsage() {
  console.log('Usage: node scripts/generate-radius-icons.js --input <folder> [options]');
  console.log('');
  console.log('Options:');
  console.log('  --input <folder>       Source folder with png/jpg/jpeg/webp/svg files');
  console.log('  --output <folder>      Output folder for generated icons (default: icons)');
  console.log('  --size <number>        Tile size in px (default: 256)');
  console.log('  --radius <number>      Tile corner radius in px (default: 60)');
  console.log('  --padding <number>     Inner image padding in px (default: 0)');
  console.log('  --dry-run              Print files that would be generated only');
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help || args.h) {
    printUsage();
    process.exit(0);
  }

  if (!args.input) {
    printUsage();
    process.exit(1);
  }

  const inputDir = path.resolve(args.input);
  const outputDir = path.resolve(args.output || 'icons');
  const tileSize = Number(args.size || 256);
  const cornerRadius = Number(args.radius || 60);
  const padding = Number(args.padding || 0);
  const dryRun = Boolean(args['dry-run']);

  if (!Number.isFinite(tileSize) || tileSize <= 0) {
    console.error('Invalid --size value. It must be a positive number.');
    process.exit(1);
  }

  if (!Number.isFinite(cornerRadius) || cornerRadius < 0) {
    console.error('Invalid --radius value. It must be zero or greater.');
    process.exit(1);
  }

  if (!Number.isFinite(padding) || padding < 0 || padding * 2 >= tileSize) {
    console.error('Invalid --padding value. It must be >= 0 and less than half of --size.');
    process.exit(1);
  }

  if (!fs.existsSync(inputDir) || !fs.statSync(inputDir).isDirectory()) {
    console.error(`Input folder not found: ${inputDir}`);
    process.exit(1);
  }

  if (!dryRun && !fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const entries = fs.readdirSync(inputDir, { withFileTypes: true });
  const files = entries.filter(e => e.isFile()).map(e => e.name);

  let generatedCount = 0;
  let skippedCount = 0;

  for (const filename of files) {
    const ext = path.extname(filename).toLowerCase();
    const mimeType = MIME_BY_EXT[ext];

    if (!mimeType) {
      skippedCount++;
      continue;
    }

    const baseName = path.basename(filename, ext);
    const iconName = toSafeIconName(baseName);

    if (!iconName) {
      console.warn(`Skipped ${filename}: could not produce a valid icon name.`);
      skippedCount++;
      continue;
    }

    const sourcePath = path.join(inputDir, filename);
    const encodedImage = fs.readFileSync(sourcePath).toString('base64');

    const svg = buildRadiusOnlySvg({
      encodedImage,
      mimeType,
      tileSize,
      cornerRadius,
      padding,
    });

    const outPath = path.join(outputDir, `${iconName}.svg`);

    if (dryRun) {
      console.log(`[dry-run] ${filename} -> ${path.basename(outPath)}`);
    } else {
      fs.writeFileSync(outPath, svg, 'utf8');
      console.log(`Generated ${path.basename(outPath)}`);
    }

    generatedCount++;
  }

  console.log('');
  console.log(`Done. Generated ${generatedCount} source icon(s). Skipped ${skippedCount} file(s).`);
  if (!dryRun) console.log('Run node build.js after this to update dist/icons.json.');
}

main();
