const fs = require('fs');
const path = require('path');

const wwwDir = path.join(__dirname, 'www');

// Clean & recreate www directory
if (fs.existsSync(wwwDir)) {
  fs.rmSync(wwwDir, { recursive: true, force: true });
}
fs.mkdirSync(wwwDir, { recursive: true });

// Copy files and folders
function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

const itemsToCopy = ['index.html', 'manifest.json', 'sw.js', 'css', 'js'];
for (const item of itemsToCopy) {
  const srcPath = path.join(__dirname, item);
  if (fs.existsSync(srcPath)) {
    copyRecursive(srcPath, path.join(wwwDir, item));
  }
}

console.log('✅ Web build complete: Assets bundled into www/');
