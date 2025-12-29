# Repository Files Documentation

This document provides a comprehensive overview of all files in the search-bloom-netlify-test repository.

## Table of Contents
- [Configuration Files](#configuration-files)
- [Build and Utilities](#build-and-utilities)
- [CMS Content](#cms-content)
- [Theme Files](#theme-files)
- [Admin Interface](#admin-interface)
- [Netlify Functions](#netlify-functions)

---

## Configuration Files

### `.eleventy.js`
The main Eleventy (11ty) static site generator configuration file. Configures:
- Markdown rendering with markdown-it
- Passthrough copy for assets and admin directory
- Custom collections and filters
- Input/output directories (cms → public)

### `package.json`
Node.js project configuration defining:
- **Project name**: search-bloom-placements-test
- **Dependencies**: @11ty/eleventy, fuse.js (search), archiver, fs-extra, etc.
- **Scripts**:
  - `optimize`: Optimizes assets before build
  - `serve`: Development server with hot reload
  - `build`: Production build
  - `local-backend`: Netlify CMS proxy server

### `netlify.toml`
Netlify deployment configuration specifying:
- Build command and publish directory
- Serverless functions location
- Environment variables and build settings

---

## Build and Utilities

### `_utils/` Directory
Collection of utility modules for the Eleventy build:

#### `_utils/index.js`
Main utility export that creates collections and filters for Eleventy.

#### `_utils/filters.js`
Custom template filters for data transformation.

#### `_utils/shortcodes.js`
Custom shortcodes for use in templates.

#### `_utils/search.js`
Search functionality implementation (likely using Fuse.js).

#### `_utils/array/filters.js`
Array manipulation filters for templates.

#### `_utils/collections/`
- `index.js`: Collection creation logic
- `filters.js`: Collection filtering utilities
- `compare.js`: Comparison functions
- `memo.js`: Memoization utilities

#### `_utils/config/external-files.json`
Configuration for external file references.

#### `_utils/date/filters.js`
Date formatting and manipulation filters.

#### `_utils/money/utils.js`
Currency and money formatting utilities.

#### `_utils/strings/filters.js`
String manipulation filters.

#### `_utils/transforms/index.js`
HTML transforms applied during build.

#### `_utils/zip/index.js`
Archive creation utilities.

#### `_utils/scripts/optimize-assets.js`
Asset optimization script that runs before builds.

---

## CMS Content

All content is stored in the `cms/` directory and processed by Eleventy.

### Data Files (`cms/_data/`)

#### `cms/_data/colors.json`
Color scheme definitions for the site.

#### `cms/_data/images.json`
Image asset references and metadata.

#### `cms/_data/links.json`
Navigation and link definitions.

#### `cms/_data/settings/site.json`
Global site settings (title, description, URLs, etc.).

#### `cms/_data/texts.json`
Text content and copy used across the site.

### Pages (`cms/pages/`)

#### `cms/pages/index.md`
Homepage content.

#### `cms/pages/404.md`
404 error page content.

#### `cms/pages/candidate-registration.md`
Candidate registration page content and form.

#### `cms/pages/privacy-policy.md`
Privacy policy page.

#### `cms/pages/refund-policy.md`
Refund policy page.

#### `cms/pages/terms-conditions.md`
Terms and conditions page.

### Services (`cms/services/`)

#### `cms/services/admin-hiring.md`
Administrative hiring service description.

#### `cms/services/advisory-services.md`
Advisory services offering.

#### `cms/services/exit-interviews.md`
Exit interview services.

#### `cms/services/leadership-hiring.md`
Leadership recruitment services.

#### `cms/services/teacher-recruitment.md`
Teacher recruitment services.

### FAQ Sections

#### Registration Page FAQs (`cms/faq-registration-page/`)
- `first-faq.md`
- `second-faq.md`
- `third-faq.md`

#### School Page FAQs (`cms/faq-school-page/`)
- `first-faq.md`
- `second-faq.md`
- `third-faq.md`

### About Us (`cms/about-us/`)

#### `cms/about-us/azeeza-easa.md`
Team member profile.

### Announcements

#### `cms/registration-page-announcement/registration-page-announcement-one.md`
Registration page announcement content.

---

## Theme Files

The `theme/` directory contains HTML templates and assets.

### Page Templates

#### `theme/index.html`
Homepage template.

#### `theme/404.html`
404 error page template.

#### `theme/candidate-registration.html`
Registration form page template.

#### `theme/privacy-policy.html`
Privacy policy page template.

#### `theme/refund-policy.html`
Refund policy page template.

#### `theme/terms-conditions.html`
Terms and conditions page template.

#### `theme/success.html`
Form submission success page.

### Collection Templates

#### `theme/[about-us].html`
About us team member template.

#### `theme/[services].html`
Service detail page template.

#### `theme/[faq-registration-page].html`
Registration FAQ template.

#### `theme/[faq-school-page].html`
School FAQ template.

#### `theme/[registration-page-announcement].html`
Registration announcement template.

#### `theme/[school-page-announcement].html`
School announcement template.

### JavaScript Assets

#### `theme/assets/js/udesly-search-engine.js`
Client-side search engine implementation using Fuse.js:
- Caches search index
- Provides fast fuzzy search
- Renders search results dynamically

#### `theme/assets/js/webflow.js`
Webflow interactions and animations.

### CSS Assets (in `theme/assets/css/`)
- `normalize.css`: CSS reset
- `search-bloom-placements.webflow.css`: Main stylesheet
- `webflow.css`: Webflow base styles

### Image Assets (`theme/assets/images/`)
Contains all images, illustrations, icons, and graphics used throughout the site.

### Font Assets (`theme/assets/fonts/`)
Custom fonts:
- Neue Haas Display (Regular, Medium, Italic variants)

---

## Admin Interface

### `admin/config.yml`
Netlify CMS configuration file defining:
- Backend configuration
- Content collections
- Field definitions for each content type
- Media folder settings

### `admin/index.html`
Netlify CMS admin interface entry point.

### Admin Widgets (`admin/widgets/`)

#### `admin/widgets/price.js`
Custom widget for price input.

#### `admin/widgets/prop-table.js`
Custom widget for property tables.

#### `admin/widgets/prop-values.js`
Custom widget for property values.

---

## Netlify Functions

### `netlify/functions/submit-form.js`
Serverless function for handling form submissions:
- Processes candidate registration forms
- Validates input data
- Sends notifications or stores data

---

## Build Output

The `public/` directory contains the generated static site files (not tracked in git).

## Node Modules

The `node_modules/` directory contains all npm dependencies (not tracked in git).

---

## Summary

This repository is a **static site built with Eleventy (11ty)** for Search Bloom Placements, a recruitment service. Key features include:

- **Content Management**: Netlify CMS for easy content editing
- **Search Functionality**: Client-side search using Fuse.js
- **Multiple Service Pages**: Various hiring and recruitment services
- **Form Handling**: Serverless form submission via Netlify Functions
- **Responsive Design**: Webflow-based design system
- **Optimized Build**: Asset optimization and caching strategies

The site is designed for deployment on Netlify with automatic builds triggered by content changes.
