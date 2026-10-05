const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = path.resolve(__dirname);
let initialData = fs.readFileSync(path.join(baseDir, 'js', 'initialData.js'), 'utf8');
let storage = fs.readFileSync(path.join(baseDir, 'js', 'storage.js'), 'utf8');
let sync = fs.readFileSync(path.join(baseDir, 'js', 'sync.js'), 'utf8');
let app = fs.readFileSync(path.join(baseDir, 'js', 'app.js'), 'utf8');

initialData = initialData
  .replace(/import\s+[^;]+;\r?\n?/g, '')
  .replace(/export\s+(default\s+)?/g, '');

storage = storage
  .replace(/import\s+[^;]+;\r?\n?/g, '')
  .replace(/export\s+(default\s+)?/g, '');

sync = sync
  .replace(/import\s+[^;]+;\r?\n?/g, '')
  .replace(/export\s+(default\s+)?/g, '');

app = app
  .replace(/import\s+[^;]+;\r?\n?/g, '')
  .replace(/export\s+(default\s+)?/g, '');

const bundle = `/**
 * Recensement S9 - Bundled JavaScript
 * Single file bundle containing initialData, Storage, Sync, and App logic.
 * Generated on ${new Date().toISOString().split('T')[0]}
 */
(function() {
${initialData}

${storage}

${sync}

${app}
})();
`;

// Validate syntax
try {
  new vm.Script(bundle);
  console.log('✓ Syntax is 100% valid!');
} catch (e) {
  console.error('✗ Syntax error in bundle:', e.message);
  process.exit(1);
}

fs.writeFileSync(path.join(baseDir, 'js', 'bundle.js'), bundle, 'utf8');
console.log('✓ Successfully wrote js/bundle.js (' + bundle.length + ' bytes)');
