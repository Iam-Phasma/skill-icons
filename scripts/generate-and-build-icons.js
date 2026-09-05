const { spawnSync } = require('child_process');

const args = process.argv.slice(2);

const generate = spawnSync(
  process.execPath,
  ['scripts/generate-themed-icons.js', ...args],
  { stdio: 'inherit' }
);

if (generate.status !== 0) {
  process.exit(generate.status || 1);
}

const build = spawnSync(process.execPath, ['build.js'], { stdio: 'inherit' });
if (build.status !== 0) {
  process.exit(build.status || 1);
}
