const fs = require('fs');
const path = require('path');

// Convert absolute 'src/' imports to relative paths
function convertAbsoluteToRelative(filePath, distDir) {
  let content = fs.readFileSync(filePath, 'utf8');
  const fileDir = path.dirname(filePath);

  // Helper function to convert src path to relative path
  const convertPath = (srcPath) => {
    const srcPathWithoutSrc = srcPath.substring(4); // Remove 'src/'
    const targetPath = path.join(distDir, srcPathWithoutSrc);
    const relativePath = path.relative(fileDir, targetPath);

    // Ensure forward slashes for imports
    const normalizedPath = relativePath.split(path.sep).join('/');

    // Add ./ if it doesn't start with ..
    return normalizedPath.startsWith('.') ? normalizedPath : `./${normalizedPath}`;
  };

  // Replace ES6 'from "src/..."' imports
  content = content.replace(
    /(from\s+['"])(src\/[^'"]+)(['"])/g,
    (match, prefix, srcPath, suffix) => {
      return `${prefix}${convertPath(srcPath)}${suffix}`;
    }
  );

  // Replace CommonJS 'require("src/...")' imports
  content = content.replace(
    /(require\s*\(\s*['"])(src\/[^'"]+)(['"])/g,
    (match, prefix, srcPath, suffix) => {
      return `${prefix}${convertPath(srcPath)}${suffix}`;
    }
  );

  fs.writeFileSync(filePath, content, 'utf8');
}

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

    if (stats.isFile()) {
      if (file.endsWith('.js')) {
        const destPath = path.join(destDir, file.replace('.js', '.mjs'));
        const destDirPath = path.dirname(destPath);

        if (!fs.existsSync(destDirPath)) {
          fs.mkdirSync(destDirPath, { recursive: true });
        }

        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${file} to ${destPath}`);

        // Convert absolute imports to relative paths
        convertAbsoluteToRelative(destPath, destDir);

        // Fix ESM imports in the copied .mjs file
        fixEsmImports(destPath);
      } else if (file.endsWith('.json')) {
        // Copy JSON files as-is
        const destPath = path.join(destDir, file);
        const destDirPath = path.dirname(destPath);

        if (!fs.existsSync(destDirPath)) {
          fs.mkdirSync(destDirPath, { recursive: true });
        }

        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${file} to ${destPath}`);
      }
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

// Fix absolute paths in CommonJS files
function fixCommonJsAbsolutePaths(distDir) {
  const files = fs.readdirSync(distDir, { recursive: true });

  files.forEach(file => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile() && filePath.endsWith('.js')) {
      convertAbsoluteToRelative(filePath, distDir);
    }
  });

  console.log('Fixed absolute paths in CommonJS files');
}

// Copy JSON files from src to dist
function copyJsonFiles(srcDir, distDir) {
  const localesLangsPath = path.join(srcDir, 'locales/langs');

  if (fs.existsSync(localesLangsPath)) {
    const destLangsPath = path.join(distDir, 'locales/langs');

    if (!fs.existsSync(destLangsPath)) {
      fs.mkdirSync(destLangsPath, { recursive: true });
    }

    const files = fs.readdirSync(localesLangsPath, { recursive: true });

    files.forEach(file => {
      const srcPath = path.join(localesLangsPath, file);
      const stats = fs.statSync(srcPath);

      if (stats.isFile() && file.endsWith('.json')) {
        const destPath = path.join(destLangsPath, file);
        const destDirPath = path.dirname(destPath);

        if (!fs.existsSync(destDirPath)) {
          fs.mkdirSync(destDirPath, { recursive: true });
        }

        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied JSON: ${file}`);
      }
    });
  }
}

// Main execution
const distDir = path.join(__dirname, '../dist');
const srcDir = path.join(__dirname, '../src');
const esmDir = path.join(distDir, 'esm');

moveEsmFiles(esmDir, distDir);
fixCommonJsAbsolutePaths(distDir);
copyJsonFiles(srcDir, distDir);
createPackageJson();

console.log('Post-build script completed successfully!');
