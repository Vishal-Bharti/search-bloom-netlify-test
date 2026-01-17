# Read All Files - Implementation

This document explains the implementation of the "read all the files opened" feature.

## What Was Implemented

Since the original request "read all the files opened" was ambiguous, I've implemented multiple interpretations:

### 1. Repository Documentation (`REPOSITORY_FILES.md`)

A comprehensive markdown document that lists and describes all important files in the repository, organized by category:
- Configuration files
- Build and utility scripts
- CMS content files
- Theme templates and assets
- Admin interface files
- Netlify functions

**Location**: `REPOSITORY_FILES.md`

### 2. File Reader Utility Script

A Node.js script that can read and display the contents of repository files with filtering capabilities.

**Location**: `_utils/scripts/read-files.js`

**Usage**:
```bash
# Read all key files
npm run read-files

# Read specific pattern
node _utils/scripts/read-files.js "*.json"
node _utils/scripts/read-files.js "cms/pages/*.md"
```

**Features**:
- Recursively scans the repository
- Excludes node_modules, public, and .git directories
- Filters by file extension (.md, .json, .yml, .yaml, .toml, .js, .html)
- Pretty-prints JSON files
- Shows file metadata (size, lines, type)
- Limits output for very large files

### 3. File Structure JSON

A machine-readable JSON file containing the complete repository structure.

**Location**: `file-structure.json`

**Structure**:
```json
{
  "repository": "search-bloom-netlify-test",
  "scanned": "2025-12-29T19:46:33.298Z",
  "structure": [
    {
      "type": "file",
      "path": ".eleventy.js",
      "extension": ".js",
      "size": 855,
      "modified": "2025-12-29T19:39:15.412Z"
    },
    {
      "type": "directory",
      "path": "_utils",
      "children": [...]
    }
  ]
}
```

**Use Cases**:
- Programmatic access to repository structure
- Build tools and automation
- Documentation generation
- Asset inventory

## How to Use

### Read Documentation
```bash
# View the comprehensive file documentation
cat REPOSITORY_FILES.md
```

### Use File Reader Script
```bash
# Read all important files in the repository
npm run read-files

# Read only JSON configuration files
node _utils/scripts/read-files.js "\.json$"

# Read only markdown content
node _utils/scripts/read-files.js "cms.*\.md$"

# Read specific directory
node _utils/scripts/read-files.js "cms/pages"
```

### Use File Structure JSON
```bash
# View the file structure
cat file-structure.json

# Use in Node.js scripts
node -e "const data = require('./file-structure.json'); console.log(data.structure.length, 'items');"
```

## Repository Overview

This repository is an **Eleventy (11ty) static site** for Search Bloom Placements:

- **Build Tool**: Eleventy v3.1.2
- **CMS**: Netlify CMS for content management
- **Search**: Fuse.js for client-side fuzzy search
- **Deployment**: Netlify with serverless functions
- **Design**: Webflow-based responsive design

### Key Directories

- `cms/`: Content files (Markdown + front matter)
- `theme/`: HTML templates and assets
- `_utils/`: Build utilities and scripts
- `admin/`: Netlify CMS configuration
- `public/`: Generated output (not in git)

### Content Types

1. **Pages**: Homepage, registration, policies
2. **Services**: Various hiring/recruitment services
3. **FAQs**: Registration and school-related FAQs
4. **About**: Team member profiles
5. **Announcements**: Registration and school announcements

## Summary

The implementation provides three complementary ways to "read all the files":

1. **Human-readable documentation** for understanding the repository
2. **Command-line tool** for viewing file contents
3. **Machine-readable data** for programmatic access

This covers various interpretations of the original ambiguous request and provides useful tools for developers working with the repository.
