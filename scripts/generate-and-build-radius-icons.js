const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SUPPORTED_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg']);

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

function cleanupInputFolder(inputDir) {
  if (!inputDir || !fs.existsSync(inputDir) || !fs.statSync(inputDir).isDirectory()) {
    return;
  }

  const entries = fs.readdirSync(inputDir, { withFileTypes: true });
  let removed = 0;

  for (const entry of entries) {
    if (!entry.isFile()) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (!SUPPORTED_EXTENSIONS.has(ext)) continue;

    fs.unlinkSync(path.join(inputDir, entry.name));
    removed++;
  }

  console.log(`Cleanup complete. Removed ${removed} source file(s) from ${inputDir}.`);
}

const args = process.argv.slice(2);
const parsedArgs = parseArgs(args);
const inputDir = parsedArgs.input ? path.resolve(parsedArgs.input) : null;
const shouldCleanup = !parsedArgs['no-cleanup'];
const isDryRun = Boolean(parsedArgs['dry-run']);

const generate = spawnSync(
  process.execPath,
  ['scripts/generate-radius-icons.js', ...args],
  { stdio: 'inherit' }
);

if (generate.status !== 0) {
  process.exit(generate.status || 1);
}

if (isDryRun) {
  process.exit(0);
}

const build = spawnSync(process.execPath, ['build.js'], { stdio: 'inherit' });
if (build.status !== 0) {
  process.exit(build.status || 1);
}

if (shouldCleanup) {
  cleanupInputFolder(inputDir);
}
