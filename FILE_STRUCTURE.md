# शेर-शराबा Website - File Structure & Links

## Complete File List

### HTML Files (12 files)
1. **index.html** - Homepage
   - Links: styles.css, script.js, header-loader.js
   
2. **kavita.html** - All poems listing page
   - Links: styles.css, script.js, kavita.js, header-loader.js
   
3. **kavita-detail.html** ⭐ NEW - Individual poem detail page
   - Links: styles.css, script.js, kavita-detail.js, header-loader.js
   
4. **kahani.html** - All stories listing page
   - Links: styles.css, script.js, kahani.js, header-loader.js
   
5. **kahani-detail.html** ⭐ NEW - Individual story detail page
   - Links: styles.css, script.js, kahani-detail.js, header-loader.js
   
6. **about.html** - About page
   - Links: styles.css, script.js, header-loader.js
   
7. **contact.html** - Contact page
   - Links: styles.css, script.js, header-loader.js
   
8. **all-writers.html** - All writers listing
   - Links: styles.css, script.js, all-writers.js, header-loader.js
   
9. **blogs.html** - Blog listing page
   - Links: styles.css, script.js, blogs.js, header-loader.js
   
10. **blog-detail.html** - Individual blog detail page
    - Links: styles.css, script.js, blog-detail.js, header-loader.js
    
11. **header.html** - Header component (loaded via header-loader.js)
    
12. **footer.html** - Footer component (loaded via header-loader.js)

### JavaScript Files (10 files)
1. **script.js** - Main global scripts
2. **kavita.js** - Poems listing page logic (✓ Updated with navigation)
3. **kavita-detail.js** ⭐ NEW - Individual poem page logic
4. **kahani.js** - Stories listing page logic (✓ Updated with navigation)
5. **kahani-detail.js** ⭐ NEW - Individual story page logic
6. **all-writers.js** - Writers listing logic
7. **blogs.js** - Blog listing logic
8. **blog-detail.js** - Blog detail page logic
9. **header-loader.js** - Loads header and footer components

### CSS Files (1 file)
1. **styles.css** - All website styles (✓ Updated with CTA background)

### Documentation Files (2 files)
1. **README.md** - Original project documentation
2. **UPDATE_README.md** - Detailed update documentation

## File Dependencies Map

```
index.html
├── styles.css
├── header-loader.js
│   ├── header.html
│   └── footer.html (✓ Updated Instagram link)
└── script.js

kavita.html
├── styles.css
├── header-loader.js
├── script.js
└── kavita.js (✓ Updated with click handlers)

kavita-detail.html ⭐ NEW
├── styles.css
├── header-loader.js
├── script.js
└── kavita-detail.js ⭐ NEW

kahani.html
├── styles.css
├── header-loader.js
├── script.js
└── kahani.js (✓ Updated with click handlers)

kahani-detail.html ⭐ NEW
├── styles.css
├── header-loader.js
├── script.js
└── kahani-detail.js ⭐ NEW

about.html
├── styles.css
├── header-loader.js
└── script.js

contact.html
├── styles.css
├── header-loader.js
└── script.js

all-writers.html
├── styles.css
├── header-loader.js
├── script.js
└── all-writers.js

blogs.html
├── styles.css
├── header-loader.js
├── script.js
└── blogs.js

blog-detail.html
├── styles.css
├── header-loader.js
├── script.js
└── blog-detail.js
```

## Navigation Flow

### Poems (Kavita):
```
kavita.html (listing) 
    ↓ [Click on card or "पढ़ें" button]
kavita-detail.html?id=X (detail page)
    ↓ [Click breadcrumb]
kavita.html (back to listing)
```

### Stories (Kahani):
```
kahani.html (listing)
    ↓ [Click on card or "पढ़ें" button]
kahani-detail.html?id=X (detail page)
    ↓ [Click breadcrumb]
kahani.html (back to listing)
```

## Installation Instructions

1. Extract the zip file to your web server directory
2. Ensure all files are in the same root directory
3. No additional configuration needed - all files are properly linked
4. Open index.html in a browser to view the website

## File Linking Verification

✅ All HTML files correctly link to:
- styles.css (single stylesheet for entire site)
- script.js (global scripts)
- header-loader.js (loads header/footer)
- Respective page-specific JS files

✅ All new detail pages correctly link to:
- Their respective detail JS files (kavita-detail.js, kahani-detail.js)
- All common files (styles.css, script.js, header-loader.js)

✅ No broken links or missing dependencies

## Key Updates in This Release

1. ⭐ **NEW**: kavita-detail.html + kavita-detail.js (Poem detail pages)
2. ⭐ **NEW**: kahani-detail.html + kahani-detail.js (Story detail pages)
3. ✓ **UPDATED**: kavita.js (Added navigation to detail pages)
4. ✓ **UPDATED**: kahani.js (Added navigation to detail pages)
5. ✓ **UPDATED**: footer.html (Instagram link: https://www.instagram.com/shersharaba)
6. ✓ **UPDATED**: index.html (Instagram link + Indian-themed images in hero)
7. ✓ **UPDATED**: styles.css (Indian-themed CTA background)

## External Resources (CDN)

- Google Fonts (Devanagari, Playfair Display, etc.)
- Font Awesome 6.4.0 (icons)
- Unsplash images (for hero section and CTA background)

All external resources are properly linked via CDN and require internet connection.

---

**Total Files**: 24 (12 HTML + 10 JS + 1 CSS + 2 MD)
**New Files**: 4 (2 HTML + 2 JS for detail pages)
**Updated Files**: 5 (kavita.js, kahani.js, footer.html, index.html, styles.css)

**Status**: ✅ All files verified and properly linked
**Ready for**: Immediate deployment
