const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const MIME_BY_EXT = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

const SUPPORTED_EXTENSIONS = new Set(Object.keys(MIME_BY_EXT));

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

function buildTileSvg({ encodedImage, mimeType, tileSize, cornerRadius, padding, backdrop }) {
  const imageSize = tileSize - padding * 2;
  const backgroundNode = backdrop
    ? `\n    <rect width="${tileSize}" height="${tileSize}" fill="${backdrop}"/>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${tileSize}" height="${tileSize}" fill="none" viewBox="0 0 ${tileSize} ${tileSize}">
  <defs>
    <clipPath id="tile-radius">
      <rect width="${tileSize}" height="${tileSize}" rx="${cornerRadius}"/>
    </clipPath>
  </defs>
  <g clip-path="url(#tile-radius)">${backgroundNode}
    <image href="data:${mimeType};base64,${encodedImage}" x="${padding}" y="${padding}" width="${imageSize}" height="${imageSize}" preserveAspectRatio="xMidYMid meet"/>
  </g>
</svg>
`;
}

function listSourceFiles(folderPath) {
  if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) {
    return [];
  }

  return fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter(entry => entry.isFile())
    .map(entry => entry.name)
    .filter(filename => SUPPORTED_EXTENSIONS.has(path.extname(filename).toLowerCase()));
}

function processFolder({
  folderPath,
  mode,
  outputDir,
  tileSize,
  cornerRadius,
  padding,
  darkBackdrop,
  lightBackdrop,
  dryRun,
}) {
  const files = listSourceFiles(folderPath);
  let generated = 0;
  let skipped = 0;

  for (const filename of files) {
    const ext = path.extname(filename).toLowerCase();
    const mimeType = MIME_BY_EXT[ext];
    if (!mimeType) {
      skipped++;
      continue;
    }

    const iconName = toSafeIconName(path.basename(filename, ext));
    if (!iconName) {
      console.warn(`[${mode}] Skipped ${filename}: invalid icon name.`);
      skipped++;
      continue;
    }

    const sourcePath = path.join(folderPath, filename);
    const encodedImage = fs.readFileSync(sourcePath).toString('base64');

    const darkSvg = buildTileSvg({
      encodedImage,
      mimeType,
      tileSize,
      cornerRadius,
      padding,
      backdrop: darkBackdrop,
    });

    const lightSvg = buildTileSvg({
      encodedImage,
      mimeType,
      tileSize,
      cornerRadius,
      padding,
      backdrop: lightBackdrop,
    });

    const darkOutPath = path.join(outputDir, `${iconName}-Dark.svg`);
    const lightOutPath = path.join(outputDir, `${iconName}-Light.svg`);

    if (mode === 'both') {
      if (dryRun) {
        console.log(`[dry-run][both] ${filename} -> ${path.basename(darkOutPath)}, ${path.basename(lightOutPath)}`);
      } else {
        fs.writeFileSync(darkOutPath, darkSvg, 'utf8');
        fs.writeFileSync(lightOutPath, lightSvg, 'utf8');
        console.log(`[both] Generated ${path.basename(darkOutPath)} and ${path.basename(lightOutPath)}`);
      }
    } else if (mode === 'light') {
      if (dryRun) {
        console.log(`[dry-run][light] ${filename} -> ${path.basename(lightOutPath)}`);
      } else {
        fs.writeFileSync(lightOutPath, lightSvg, 'utf8');
        console.log(`[light] Generated ${path.basename(lightOutPath)}`);
      }
    } else if (mode === 'dark') {
      if (dryRun) {
        console.log(`[dry-run][dark] ${filename} -> ${path.basename(darkOutPath)}`);
      } else {
        fs.writeFileSync(darkOutPath, darkSvg, 'utf8');
        console.log(`[dark] Generated ${path.basename(darkOutPath)}`);
      }
    }

    generated++;
  }

  return { generated, skipped, sourceCount: files.length };
}

function cleanupFolder(folderPath) {
  if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) {
    return 0;
  }

  const files = listSourceFiles(folderPath);
  for (const filename of files) {
    fs.unlinkSync(path.join(folderPath, filename));
  }
  return files.length;
}

function printUsage() {
  console.log('Usage: node scripts/generate-uploading-icons.js [options]');
  console.log('');
  console.log('Folder layout defaults:');
  console.log('  uploading/themed       -> generates Name-Dark.svg and Name-Light.svg');
  console.log('  uploading/light-only   -> generates Name-Light.svg only');
  console.log('  uploading/dark-only    -> generates Name-Dark.svg only');
  console.log('');
  console.log('Options:');
  console.log('  --upload-root <folder> Root upload folder (default: uploading)');
  console.log('  --both-dir <name>      Subfolder for paired icons (default: themed)');
  console.log('  --light-dir <name>     Subfolder for light-only icons (default: light-only)');
  console.log('  --dark-dir <name>      Subfolder for dark-only icons (default: dark-only)');
  console.log('  --output <folder>      Output folder (default: icons)');
  console.log('  --size <number>        Tile size in px (default: 256)');
  console.log('  --radius <number>      Corner radius in px (default: 60)');
  console.log('  --padding <number>     Inner image padding in px (default: 24)');
  console.log('  --dark <hex>           Dark backdrop (default: #242938)');
  console.log('  --light <hex>          Light backdrop (default: #F4F2ED)');
  console.log('  --dry-run              Show planned outputs only');
  console.log('  --no-cleanup           Keep source files after success');
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help || args.h) {
    printUsage();
    process.exit(0);
  }

  const uploadRoot = path.resolve(args['upload-root'] || 'uploading');
  const bothDir = args['both-dir'] || 'themed';
  const lightDir = args['light-dir'] || 'light-only';
  const darkDir = args['dark-dir'] || 'dark-only';
  const outputDir = path.resolve(args.output || 'icons');

  const tileSize = Number(args.size || 256);
  const cornerRadius = Number(args.radius || 60);
  const padding = Number(args.padding || 24);
  const darkBackdrop = args.dark || '#242938';
  const lightBackdrop = args.light || '#F4F2ED';

  const dryRun = Boolean(args['dry-run']);
  const shouldCleanup = !args['no-cleanup'];

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

  if (!dryRun && !fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const targets = [
    { mode: 'both', folderPath: path.join(uploadRoot, bothDir) },
    { mode: 'light', folderPath: path.join(uploadRoot, lightDir) },
    { mode: 'dark', folderPath: path.join(uploadRoot, darkDir) },
  ];

  let totalGenerated = 0;
  let totalSkipped = 0;
  let totalSources = 0;

  for (const target of targets) {
    const result = processFolder({
      folderPath: target.folderPath,
      mode: target.mode,
      outputDir,
      tileSize,
      cornerRadius,
      padding,
      darkBackdrop,
      lightBackdrop,
      dryRun,
    });

    totalGenerated += result.generated;
    totalSkipped += result.skipped;
    totalSources += result.sourceCount;
  }

  console.log('');
  console.log(`Done. Processed ${totalSources} source file(s), generated from ${totalGenerated} file(s), skipped ${totalSkipped} file(s).`);

  if (dryRun) {
    process.exit(0);
  }

  const build = spawnSync(process.execPath, ['build.js'], { stdio: 'inherit' });
  if (build.status !== 0) {
    process.exit(build.status || 1);
  }

  if (shouldCleanup) {
    let removed = 0;
    for (const target of targets) {
      removed += cleanupFolder(target.folderPath);
    }
    console.log(`Cleanup complete. Removed ${removed} source file(s) from upload folders.`);
  }
}

main();
