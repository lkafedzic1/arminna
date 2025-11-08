# Systemic Constellations Landing Page

A professional, well-structured landing page for Systemic Constellation consulting services. Built with semantic HTML, modular components, and maintainable CSS with design system variables.

## 🎨 Design Philosophy

- **Executive Calm**: Mature, grounded color palette (deep slate, dusty rose, muted olive)
- **Modularity**: Each section is a separate component for easy maintenance
- **Accessibility**: Semantic HTML and responsive design
- **Performance**: Lightweight, static HTML with no build dependencies
- **Scalability**: CSS variables for consistent theming and quick updates

## 📁 Project Structure

```
arminna-initial/
├── index.html                 # Main page - imports all components
├── middleware.js              # Vercel Edge Middleware (security headers)
├── package.json               # Project metadata and scripts
├── README.md                  # This file
│
├── components/                # Modular HTML components
│   ├── header.html            # Navigation & branding
│   ├── hero.html              # Hero section with CTA
│   ├── about.html             # About & credentials
│   ├── services.html          # Service offerings (4 cards)
│   ├── process.html           # 5-step process flow
│   ├── testimonials.html      # Client testimonials (3 quotes)
│   ├── cta.html               # Call-to-action section
│   └── footer.html            # Footer with links & contact
│
└── styles/
    └── main.css               # Global styles + CSS variables
```

## 🚀 Quick Start

### Development

```bash
npm run dev
# Opens a local server at http://localhost:3000
```

### Deployment

Deploy to Vercel directly from GitHub. The project includes:

- ✅ `middleware.js` for Edge Middleware (security headers)
- ✅ Vercel Analytics integration
- ✅ Zero-configuration deployment

## 🎨 Customization Guide

### Color Palette

Update colors in `styles/main.css` (lines 7-13):

```css
:root {
  --color-primary: #2f3e46; /* Deep slate */
  --color-secondary: #9ba17b; /* Muted olive */
  --color-accent: #c9a0a0; /* Dusty rose */
  --color-light: #fafafa; /* Ivory */
  --color-neutral: #e5e5e5; /* Pale stone */
  /* ... rest of palette */
}
```

### Typography

Modify font settings:

```css
--font-family-sans: /* your fonts */
--font-size-base: 16px;
--font-size-2xl: 32px;
/* ... more sizes */
```

### Spacing & Layout

All spacing uses CSS variables for consistency:

```css
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
```

## ✏️ Editing Sections

### Header / Navigation

Edit `components/header.html`:

- Update logo text
- Add/remove nav links
- Modify CTA button

### Hero Section

Edit `components/hero.html`:

- Change headline and subheading
- Update button text
- Replace placeholder image (`https://via.placeholder.com/...`)

### About Section

Edit `components/about.html`:

- Update description text
- Add/remove benefits
- Update credentials

### Services

Edit `components/services.html`:

- Add/remove service cards (copy the `service-card` article block)
- Update titles and descriptions

### Process

Edit `components/process.html`:

- Modify step count (currently 5 steps)
- Update step descriptions
- Change step titles

### Testimonials

Edit `components/testimonials.html`:

- Add/remove testimonial quotes
- Update client names and context

### CTA & Contact

Edit `components/cta.html`:

- Update email address (`mailto:contact@arminna.de`)
- Update phone number (`tel:+1234567890`)
- Change button text

### Footer

Edit `components/footer.html`:

- Update social media links
- Add/modify footer sections
- Update contact information

## 🔧 CSS Customization Tips

### Component-Scoped Classes

Each component uses BEM (Block Element Modifier) naming:

```css
.hero              /* Block */
/* Block */
/* Block */
/* Block */
.hero__title       /* Element */
.hero__content     /* Element */
.button--primary; /* Modifier */
```

### Creating New Styles

1. Add CSS variables at the top of `main.css`
2. Use classes with BEM naming convention
3. Leverage existing variables (colors, spacing, shadows, transitions)
4. Test on mobile (viewport < 768px)

### Responsive Breakpoints

```css
@media (max-width: 768px) /* Tablets */ @media (max-width: 480px); /* Mobile */
```

## 📱 Responsive Design

The page is fully responsive with breakpoints at:

- **Desktop**: 1200px max container width
- **Tablet**: Adjusts font sizes and grid layouts
- **Mobile**: Single-column layouts, stacked navigation

All breakpoints use CSS variables for consistent sizing.

## 🔒 Security

`middleware.js` adds essential security headers:

- Referrer-Policy
- X-Frame-Options
- X-Content-Type-Options
- X-DNS-Prefetch-Control
- Strict-Transport-Security

Modify if needed but keep these defaults for protection.

## 📊 Analytics

Vercel Analytics is integrated via:

```html
<script defer src="/_vercel/insights/script.js"></script>
```

Disable by removing this line if not needed.

## 🎯 Best Practices Applied

✅ **Semantic HTML** - Proper use of `<header>`, `<main>`, `<section>`, `<footer>`
✅ **CSS Variables** - Single source of truth for design tokens
✅ **Mobile-First** - Responsive from the ground up
✅ **Modular Components** - Easy to edit, copy, or remove sections
✅ **Performance** - Minimal CSS, no JavaScript frameworks
✅ **Accessibility** - Proper heading hierarchy, alt text, ARIA labels
✅ **Maintainability** - Clear file structure and naming conventions

## 🚀 Deployment Checklist

- [ ] Update all contact information (email, phone, social links)
- [ ] Replace placeholder images with real images
- [ ] Update credentials and testimonial names
- [ ] Set brand colors in CSS variables
- [ ] Test on mobile devices
- [ ] Update meta description in `index.html`
- [ ] Test all links and CTAs
- [ ] Add favicon (optional)
- [ ] Set up domain in Vercel
- [ ] Deploy to production

## 📝 License

All code is provided as-is for use with Systemic Constellations consulting services.

---

**Questions or need to customize further?** Check the file structure above and edit the relevant component file. All styling is centralized in `styles/main.css` for easy management.
