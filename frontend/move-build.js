const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist', 'frontend');
const browserDir = path.join(distDir, 'browser');

if (fs.existsSync(browserDir)) {
  console.log(`Found browser directory at ${browserDir}`);
  
  // Move all files and folders from browserDir to distDir
  const items = fs.readdirSync(browserDir);
  
  items.forEach(item => {
    const srcPath = path.join(browserDir, item);
    const destPath = path.join(distDir, item);
    
    console.log(`Moving ${item} to ${distDir}`);
    
    // If destination exists, remove it first (to avoid EPERM/ENOTEMPTY on Windows/Linux)
    if (fs.existsSync(destPath)) {
      if (fs.lstatSync(destPath).isDirectory()) {
        fs.rmSync(destPath, { recursive: true, force: true });
      } else {
        fs.unlinkSync(destPath);
      }
    }
    
    fs.renameSync(srcPath, destPath);
  });

  // Remove the now empty browser directory
  try {
    fs.rmdirSync(browserDir);
    console.log('Removed empty browser directory');
  } catch (e) {
    console.warn('Could not remove browser directory (might not be empty):', e.message);
  }
  
  console.log('Build files moved successfully.');
} else {
  console.log('No browser directory found. Build structure might be already correct or build failed.');
}
