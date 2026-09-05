const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const ICONS_DIR = path.join(ROOT, 'icons');
const README_PATH = path.join(ROOT, 'readme.md');

const ICONS_SECTION_HEADER = '# Icons List';
const SUPPORT_SECTION_HEADER = '## 💖 Support the Original Creator';

function collectDisplayIcons() {
  const files = fs
    .readdirSync(ICONS_DIR)
    .filter(name => name.toLowerCase().endsWith('.svg'));

  const groups = new Map();

  for (const file of files) {
    const stem = file.slice(0, -4);
    let id = stem;
    let variant = 'plain';

    if (/-light$/i.test(stem)) {
      id = stem.replace(/-light$/i, '');
      variant = 'light';
    } else if (/-dark$/i.test(stem)) {
      id = stem.replace(/-dark$/i, '');
      variant = 'dark';
    }

    const key = id.toLowerCase();
    if (!groups.has(key)) {
      groups.set(key, { id: key, light: null, dark: null, plain: null });
    }

    const bucket = groups.get(key);
    bucket[variant] = file;
  }

  const icons = [...groups.values()]
    .map(group => {
      const chosen = group.light || group.plain || group.dark;
      return { id: group.id, file: chosen };
    })
    .filter(item => Boolean(item.file))
    .sort((a, b) => a.id.localeCompare(b.id));

  return icons;
}

function buildIconsTable(icons) {
  const lines = [];
  lines.push('|      Icon ID       |                         Icon                          |');
  lines.push('| :----------------: | :---------------------------------------------------: |');

  for (const icon of icons) {
    lines.push(`| \`${icon.id}\` | <img src="./icons/${icon.file}" width="48"> |`);
  }

  return lines.join('\n');
}

function buildGroupedIconsContent(icons) {
  const JUMP_ANCHOR = 'icons-jump';
  const grouped = new Map();

  for (const icon of icons) {
    const firstChar = icon.id.charAt(0).toUpperCase();
    const groupKey = /[A-Z]/.test(firstChar) ? firstChar : '#';
    if (!grouped.has(groupKey)) grouped.set(groupKey, []);
    grouped.get(groupKey).push(icon);
  }

  const orderedKeys = [
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(key => grouped.has(key)),
    ...(grouped.has('#') ? ['#'] : []),
  ];

  const jumpLinks = orderedKeys
    .map(key => {
      const anchor = key === '#' ? 'icons-num' : `icons-${key.toLowerCase()}`;
      return `[${key}](#${anchor})`;
    })
    .join(' | ');

  const lines = [];
  lines.push(`<a id="${JUMP_ANCHOR}"></a>`);
  lines.push('');
  lines.push('Jump to:');
  lines.push(jumpLinks || 'No icons found.');

  for (const key of orderedKeys) {
    const anchor = key === '#' ? 'icons-num' : `icons-${key.toLowerCase()}`;
    lines.push('');
    lines.push(`<a id="${anchor}"></a>`);
    lines.push(`## ${key}`);
    lines.push('');
    lines.push(`[Back to top](#${JUMP_ANCHOR})`);
    lines.push('');
    lines.push(buildIconsTable(grouped.get(key)));
  }

  return lines.join('\n');
}

function syncReadme() {
  const readme = fs.readFileSync(README_PATH, 'utf8');
  const start = readme.indexOf(ICONS_SECTION_HEADER);

  if (start === -1) {
    throw new Error('Could not find "# Icons List" section in readme.md');
  }

  let end = readme.indexOf(`\n---\n\n${SUPPORT_SECTION_HEADER}`, start);
  if (end === -1) {
    end = readme.length;
  }

  const icons = collectDisplayIcons();
  const groupedContent = buildGroupedIconsContent(icons);

  const replacement = [
    '# Icons List',
    '',
    "Here's a list of all the icons currently supported. Feel free to open an issue to suggest icons to add!",
    '',
    groupedContent,
  ].join('\n');

  const updated = readme.slice(0, start) + replacement + readme.slice(end);
  fs.writeFileSync(README_PATH, updated, 'utf8');

  console.log(`Synced README icon list with ${icons.length} unique icon id(s).`);
  console.log('Dedupe rule: prefer -Light, then plain, then -Dark.');
}

syncReadme();
