const fs = require('fs');
const path = require('path');

// Move ESM files from dist/esm to dist with .mjs extension
function moveEsmFiles(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    console.log('No ESM directory found, skipping...');
    return;
  }

  const files = fs.readdirSync(srcDir, { recursive: true });

  files.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const stats = fs.statSync(srcPath);

    if (stats.isFile() && file.endsWith('.js')) {
      const destPath = path.join(destDir, file.replace('.js', '.mjs'));
      const destDirPath = path.dirname(destPath);

      if (!fs.existsSync(destDirPath)) {
        fs.mkdirSync(destDirPath, { recursive: true });
      }

      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} to ${destPath}`);
    }
  });

  // Remove the ESM directory
  fs.rmSync(srcDir, { recursive: true, force: true });
  console.log('Removed temporary ESM directory');
}

// Create package.json in dist directory
function createPackageJson() {
  const packageJson = {
    type: 'commonjs',
    sideEffects: false
  };

  fs.writeFileSync(
    path.join(__dirname, '../dist/package.json'),
    JSON.stringify(packageJson, null, 2)
  );
  console.log('Created dist/package.json');
}

// Main execution
const distDir = path.join(__dirname, '../dist');
const esmDir = path.join(distDir, 'esm');

moveEsmFiles(esmDir, distDir);
createPackageJson();

console.log('Post-build script completed successfully!');
