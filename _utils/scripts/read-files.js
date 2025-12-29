/**
 * File Reader Utility
 * 
 * This script reads and displays the contents of important repository files.
 * Usage: node _utils/scripts/read-files.js [pattern]
 * 
 * Examples:
 *   node _utils/scripts/read-files.js "*.json"
 *   node _utils/scripts/read-files.js "cms/pages/*.md"
 *   node _utils/scripts/read-files.js (reads all key files)
 */

const fs = require('fs');
const path = require('path');

// Configuration
const ROOT_DIR = path.resolve(__dirname, '../..');
const EXCLUDE_DIRS = ['node_modules', 'public', '.git'];
const INCLUDE_EXTENSIONS = ['.md', '.json', '.yml', '.yaml', '.toml', '.js', '.html'];

/**
 * Check if a directory should be excluded
 */
function shouldExcludeDir(dirName) {
  return EXCLUDE_DIRS.includes(dirName);
}

/**
 * Check if a file should be included based on its extension
 */
function shouldIncludeFile(fileName) {
  const ext = path.extname(fileName);
  return INCLUDE_EXTENSIONS.includes(ext);
}

/**
 * Recursively get all files in a directory
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  try {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
      try {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          if (!shouldExcludeDir(file)) {
            arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
          }
        } else {
          if (shouldIncludeFile(file)) {
            arrayOfFiles.push(filePath);
          }
        }
      } catch (error) {
        // Skip files we can't access
        console.error(`Warning: Cannot access ${file}: ${error.message}`);
      }
    });
  } catch (error) {
    console.error(`Warning: Cannot read directory ${dirPath}: ${error.message}`);
  }

  return arrayOfFiles;
}

/**
 * Read and display a file's contents
 */
function readAndDisplayFile(filePath) {
  const relativePath = path.relative(ROOT_DIR, filePath);
  const ext = path.extname(filePath);
  
  console.log('\n' + '='.repeat(80));
  console.log(`FILE: ${relativePath}`);
  console.log('='.repeat(80));
  
  try {
    const stat = fs.statSync(filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').length;
    
    console.log(`Type: ${ext.substring(1).toUpperCase()}`);
    console.log(`Size: ${stat.size} bytes`);
    console.log(`Lines: ${lines}`);
    console.log('-'.repeat(80));
    
    // For JSON files, try to pretty print
    if (ext === '.json') {
      try {
        const parsed = JSON.parse(content);
        console.log(JSON.stringify(parsed, null, 2));
      } catch (e) {
        console.log(content);
      }
    } else {
      // Limit very large files
      if (lines > 100) {
        const limitedContent = content.split('\n').slice(0, 100).join('\n');
        console.log(limitedContent);
        console.log(`\n... (${lines - 100} more lines)`);
      } else {
        console.log(content);
      }
    }
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}

/**
 * Main function
 */
function main() {
  const pattern = process.argv[2];
  
  console.log('Repository Files Reader');
  console.log('Root Directory:', ROOT_DIR);
  console.log('Pattern:', pattern || 'all key files');
  console.log('');
  
  // Get all files
  const allFiles = getAllFiles(ROOT_DIR);
  
  // Filter files based on pattern if provided
  let filesToRead = allFiles;
  if (pattern) {
    try {
      // Escape special regex characters if pattern looks like a simple glob
      // Otherwise treat as regex but catch errors
      const regex = new RegExp(pattern);
      filesToRead = allFiles.filter(file => regex.test(path.relative(ROOT_DIR, file)));
    } catch (error) {
      console.error(`Error: Invalid pattern "${pattern}": ${error.message}`);
      console.log('Please provide a valid regular expression pattern.');
      process.exit(1);
    }
  }
  
  // Sort files for consistent output
  filesToRead.sort();
  
  console.log(`Found ${filesToRead.length} files to read\n`);
  
  // Read and display each file
  filesToRead.forEach(readAndDisplayFile);
  
  console.log('\n' + '='.repeat(80));
  console.log(`Total files read: ${filesToRead.length}`);
  console.log('='.repeat(80));
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { getAllFiles, readAndDisplayFile };
