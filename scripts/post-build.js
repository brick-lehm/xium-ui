const fs = require('fs');
const path = require('path');

// Fix ESM imports to include .mjs extensions
function fixEsmImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace relative imports without extensions
  // Match import/export statements with relative paths
  content = content.replace(
    /(from\s+['"])(\.[^'"]+)(?<!\.mjs)(?<!\.json)(['"])/g,
    (match, prefix, importPath, suffix) => {
      // Don't modify if it already has an extension or is a package import
      if (importPath.match(/\.(mjs|json)$/)) {
        return match;
      }

      // Resolve the full path to check if it's a directory
      const fileDir = path.dirname(filePath);
      const resolvedPath = path.resolve(fileDir, importPath);

      // Check if the path is a directory (then it needs /index.mjs)
      if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isDirectory()) {
        return `${prefix}${importPath}/index.mjs${suffix}`;
      }

      return `${prefix}${importPath}.mjs${suffix}`;
    }
  );

  // Also fix re-export statements
  content = content.replace(
    /(export\s+\*\s+from\s+['"])(\.[^'"]+)(?<!\.mjs)(?<!\.json)(['"])/g,
    (match, prefix, importPath, suffix) => {
      if (importPath.match(/\.(mjs|json)$/)) {
        return match;
      }

      // Resolve the full path to check if it's a directory
      const fileDir = path.dirname(filePath);
      const resolvedPath = path.resolve(fileDir, importPath);

      // Check if the path is a directory (then it needs /index.mjs)
      if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isDirectory()) {
        return `${prefix}${importPath}/index.mjs${suffix}`;
      }

      return `${prefix}${importPath}.mjs${suffix}`;
    }
  );

  fs.writeFileSync(filePath, content, 'utf8');
}

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

      // Fix ESM imports in the copied .mjs file
      fixEsmImports(destPath);
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
