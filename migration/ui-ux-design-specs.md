# UI/UX Design Specifications for piraeusrentacar.gr
## Beautiful Interface for Aggelos Rentals React Native Platform

---

## COLOR PALETTE

### Primary Colors
- **Primary Blue** (Trust & Security): `#0066CC` or `#0052A3`
- **Accent Orange** (Call-to-Action): `#FF6B35` or `#FF8C42`
- **Success Green** (Booking Confirmed): `#28A745`

### Secondary Colors
- **Light Gray** (Backgrounds): `#F8F9FA`
- **Dark Gray** (Text): `#2C3E50`
- **Border Gray**: `#E0E0E0`

### Status Colors
- **Error Red**: `#DC3545`
- **Warning Yellow**: `#FFC107`
- **Info Blue**: `#17A2B8`

---

## TYPOGRAPHY

### Font Stack
```css
body {
  font-family: 'Poppins', 'Inter', 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #2C3E50;
}
```

### Type Hierarchy
| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 | 48px | 700 | 1.2 | Page titles, hero headlines |
| H2 | 36px | 600 | 1.3 | Section headers |
| H3 | 28px | 600 | 1.4 | Subsection headers |
| H4 | 24px | 600 | 1.4 | Card titles |
| Body Large | 18px | 400 | 1.6 | Hero text, prominent copy |
| Body Regular | 16px | 400 | 1.6 | Standard paragraph text |
| Body Small | 14px | 400 | 1.5 | Secondary text, labels |
| Caption | 12px | 400 | 1.4 | Helper text, date stamps |

### Mobile Adjustments
```css
@media (max-width: 768px) {
  h1 { font-size: 32px; }
  h2 { font-size: 24px; }
  h3 { font-size: 20px; }
  body { font-size: 14px; }
}
```

---

## COMPONENT SPECIFICATIONS

### 1. Navigation Bar

**Desktop Design:**
```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo] Locations | Fleet | About    Search  [EN/EL]  [Book Now] │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile Design:**
```
┌───────────────────────────────────────────────────────┐
│ [Logo]              [☰ Menu]  [EN/EL]  [Search]      │
└───────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 70px (desktop), 60px (mobile)
- Sticky position: yes
- Background: white with subtle box-shadow
- Logo width: 150px (desktop), 120px (mobile)
- Menu items: Font 14px, color #2C3E50
- Hover state: blue underline or background highlight
- CTA Button: Background #FF6B35, text white, 12px padding, rounded 4px

### 2. Hero Section

**Layout:**
- Background image with dark overlay (0.3 opacity)
- Full viewport height (100vh)
- Centered content

**Content Structure:**
```
Hero Section (100vh)
├── Background Image: Piraeus Port or Athens city
│   └── Overlay: rgba(0, 0, 0, 0.3)
├── Main Headline (H1)
│   "Rent a Car in Piraeus & Athens - Fast, Easy & Affordable"
├── Subheadline (Body Large)
│   "Book online, pick up instantly. Flexible terms, 24/7 support."
└── Booking Widget (See below)
```

**Text Styling:**
- Headline: White, 48px, bold, 1.2 line height
- Subheadline: White, 18px, regular, 1.4 line height
- Position: Center, with max-width 600px

**Interactive Widget:**
- Location dropdown (Piraeus Port, Athens Airport, etc.)
- Pick-up date picker
- Drop-off date picker
- "Search Cars" CTA button (orange)
- All inputs have rounded borders (4px)
- Mobile: Stack vertically

### 3. Location Cards

**Grid Layout:**
- Desktop: 4 columns, 20px gap
- Tablet: 2 columns
- Mobile: 1 column

**Card Dimensions:**
- Height: 300px
- Border-radius: 8px
- Box-shadow: 0 2px 8px rgba(0,0,0,0.1)
- Hover effect: Shadow increase, slight scale (1.02)

**Card Content:**
```
┌─────────────────────────────┐
│  [Image - 200px height]     │
│  ──────────────────────────│
│  Location Title (H4)        │
│  Short description (2 lines)│
│  ⭐ Rating (if applicable)   │
│  [Book Now →] [Learn More]  │
└─────────────────────────────┘
```

**Color-Coding (Optional):**
- Piraeus Port: Blue accent
- Athens Airport: Green accent
- Athens Center: Orange accent
- Monthly Rentals: Purple accent

### 4. Vehicle Gallery / Fleet Showcase

**Grid Layout:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 24px

**Vehicle Card:**
```
┌──────────────────────────┐
│  [Vehicle Image]         │
│  ──────────────────────│
│  Car Model (Nissan...)   │
│  Type Badge: SUV/Economy │
│  €29.99 / Day            │
│  ⭐⭐⭐⭐⭐ (4.7)            │
│  [Book] [View Details]   │
└──────────────────────────┘
```

**Image Specifications:**
- Aspect Ratio: 4:3 (800x600px)
- Format: WebP with JPG fallback
- Lazy loading: Yes
- Alt text: "{Model} - {Type} car rental in Piraeus"

**Badge Colors:**
- Economy: #28A745 (green)
- Sedan: #0066CC (blue)
- SUV: #FF6B35 (orange)
- Luxury: #9B59B6 (purple)
- Van: #3498DB (light blue)

### 5. Review / Testimonial Section

**Layout:**
- Carousel or grid: 3-4 cards visible
- Desktop: 3 cards, Tablet: 2 cards, Mobile: 1 card
- Auto-rotation (5 seconds) with manual controls

**Review Card:**
```
┌─────────────────────────────┐
│ ⭐⭐⭐⭐⭐ John Doe            │
│ "Excellent service and      │
│  great prices. Highly       │
│  recommended!"              │
│ Verified booking • Dec 2025 │
└─────────────────────────────┘
```

**Styling:**
- Background: White
- Border: 1px solid #E0E0E0
- Border-radius: 8px
- Padding: 20px
- Rating stars: 16px, yellow (#FFC107)
- Name: 16px bold
- Review text: 14px, color #555
- Verification badge: 12px, green checkmark

### 6. FAQ Section

**Accordion Structure:**
```
[+] Question 1: "How do I book a car?"
    └─ Answer text with up to 3 lines visible
[+] Question 2: "What documents do I need?"
[+] Question 3: "Can I cancel my booking?"
[+] Question 4: "Do you offer insurance?"
```

**Accordion Styling:**
- Header background on hover: #F0F0F0
- Icon rotation: 45° on expand
- Content animation: Slide down (200ms)
- Padding: 16px
- Border: bottom 1px #E0E0E0
- Font: Body Regular (16px)

### 7. Call-to-Action (CTA) Buttons

**Primary CTA:**
```css
Button {
  background: #FF6B35;
  color: white;
  padding: 12px 28px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

Button:hover {
  background: #FF5920;
}

Button:active {
  transform: scale(0.98);
}
```

**Secondary Button:**
```css
Button {
  background: transparent;
  color: #0066CC;
  border: 2px solid #0066CC;
  padding: 10px 24px;
  ...
}

Button:hover {
  background: #F0F0FF;
}
```

**Button Sizes:**
- Large: 16px padding, 18px font
- Medium: 12px padding, 16px font (default)
- Small: 8px padding, 14px font

### 8. Footer

**Layout:**
```
┌─────────────────────────────────────────────┐
│  Column 1      Column 2    Column 3         │
│  - About       - Locations - Contact        │
│  - Blog        - Fleet     - Privacy        │
│  - Careers     - FAQ       - Terms          │
├─────────────────────────────────────────────┤
│  Social Icons: f 🔗 ▶️  |  Language: EN/EL   │
│  Copyright © 2025 Aggelos Rentals          │
└─────────────────────────────────────────────┘
```

**Styling:**
- Background: #2C3E50 or #F8F9FA
- Text color: White or #555
- Link color: #0066CC
- Link hover: Underline
- Social icons: 24px, 8px gap
- Padding: 40px top/bottom, 20px sides (mobile: 20px)

---

## RESPONSIVE DESIGN BREAKPOINTS

```css
/* Mobile First */
@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

### Grid Layout Changes:
| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Location Cards | 1 col | 2 col | 4 col |
| Vehicle Gallery | 1 col | 2 col | 3 col |
| Reviews Carousel | 1 visible | 2 visible | 3 visible |
| Features Grid | 1 col | 2 col | 4 col |
| FAQs | Full width | Full width | 2 col |

---

## INTERACTION & ANIMATION GUIDELINES

### Hover States
```css
/* Card Hover */
.card {
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

/* Link Hover */
a {
  position: relative;
}

a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #0066CC;
  transition: width 0.3s;
}

a:hover::after {
  width: 100%;
}
```

### Page Transitions
- Fade in: 300ms (opacity 0→1)
- Slide up: 400ms (transform translateY(20px)→0)
- Scale in: 250ms (transform scale(0.95)→1)

### Loading State
- Skeleton screens for data-heavy components
- Spinner animation (smooth rotation, 2s per rotation)
- Placeholder colors: #E0E0E0 with shimmer effect

---

## BOOKING WIDGET DETAILED DESIGN

**Desktop Layout (Horizontal):**
```
┌──────────────────────────────────────────────────────────┐
│ FROM                TO              PASSENGERS    AGE     │
│ [Pick-up ▼]        [Drop-off ▼]    [Adults ▼]   [18+ ▼]  │
│ Piraeus Port       Same Location     1            21      │
│ ──────────────────────────────────────────────────────── │
│              [🔍 SEARCH CARS] ────────────►             │
└──────────────────────────────────────────────────────────┘
```

**Mobile Layout (Vertical):**
```
┌──────────────────────────┐
│ Pick-up Location         │
│ [Piraeus Port ▼]         │
├──────────────────────────┤
│ Pick-up Date             │
│ [Dec 20, 2025]           │
├──────────────────────────┤
│ Drop-off Date            │
│ [Dec 27, 2025]           │
├──────────────────────────┤
│ Passengers               │
│ [1 Adult ▼]              │
├──────────────────────────┤
│ Minimum Age              │
│ [18+ ▼]                  │
├──────────────────────────┤
│   [SEARCH CARS]          │
└──────────────────────────┘
```

**Dropdown Styling:**
- Border: 1px solid #E0E0E0
- Padding: 10px 12px
- Border-radius: 4px
- Background: white
- Icon: Chevron down, right-aligned
- On focus: Border color #0066CC, subtle shadow
- Date picker: Native HTML5 calendar or custom component

---

## ACCESSIBILITY REQUIREMENTS (WCAG 2.1 AA)

### Color Contrast
- Normal text: Minimum 4.5:1
- Large text (18pt+): Minimum 3:1
- Test all color combinations with WCAG contrast checker

### Focus States
```css
:focus {
  outline: 3px solid #0066CC;
  outline-offset: 2px;
}

button:focus {
  box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.1);
}
```

### Alternative Text
- Every image must have descriptive alt text
- Format: "{Product} - {Attribute} for {Purpose}"
- Example: "Nissan Qashqai - Automatic SUV rental in Piraeus"

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Tab order follows logical flow (left→right, top→bottom)
- Skip links for main content
- Form labels associated with inputs via `<label>`

### Screen Reader Support
- Use semantic HTML5 elements (nav, main, section, article)
- ARIA labels for icon-only buttons
- Live regions for dynamic content updates
- Form validation messages tied to inputs

---

## MOBILE OPTIMIZATION

### Touch Targets
- Minimum 48x48px for all clickable elements
- Minimum 8px padding around touch targets
- Buttons: 44x44px minimum (padding included)

### Mobile Menu
```
┌─────────────────────────┐
│ ☰  Logo   Search  Lang  │
└─────────────────────────┘
       ↓ Click Hamburger
┌─────────────────────────┐
│ × Piraeus Port          │
│   Athens Airport        │
│   Athens Center         │
│   Monthly Rentals       │
│ ─────────────────────── │
│   Our Fleet             │
│   About Us              │
│   FAQ                   │
│   Contact               │
│ ─────────────────────── │
│   [Book Now]            │
└─────────────────────────┘
```

**Specifications:**
- Full width overlay
- White background
- Close icon (X) in top-right
- Smooth animation from left (-100% to 0%)
- Click outside to close
- Disable body scroll when open

### Mobile Images
- Breakpoints: 400w, 600w, 800w, 1200w
- Use `srcset` for responsive images
- `sizes` attribute for layout width
- WebP format with PNG fallback

---

## DARK MODE (OPTIONAL FUTURE FEATURE)

**Dark Color Palette:**
```css
:root {
  --bg-primary: #1A1A1A;
  --bg-secondary: #2D2D2D;
  --text-primary: #FFFFFF;
  --text-secondary: #B0B0B0;
  --border: #404040;
  --accent: #FF6B35;
  --primary: #0066CC;
}
```

**CSS Implementation:**
```css
@media (prefers-color-scheme: dark) {
  body {
    background: var(--bg-primary);
    color: var(--text-primary);
  }
  
  .card {
    background: var(--bg-secondary);
    border-color: var(--border);
  }
}
```

---

## PERFORMANCE OPTIMIZATION

### Image Optimization
- Target dimensions: 800x600px (4:3 ratio)
- File size: < 100KB per image
- Format: WebP (modern browsers) with PNG fallback
- Compression: Tinify or ImageOptim

### CSS Optimization
- Minify production CSS
- Critical CSS: Inline above-the-fold styles
- CSS-in-JS: Use CSS modules or styled-components
- Font subsetting: Only include necessary characters

### JavaScript Optimization
- Code splitting by route
- Lazy load non-critical components
- Remove unused dependencies
- Minify and gzip

### Core Web Vitals Targets
- LCP (Largest Contentful Paint): < 2.5 seconds
- FID/INP (Interaction to Next Paint): < 200ms
- CLS (Cumulative Layout Shift): < 0.1

---

## DESIGN SYSTEM TOKENS

```jsx
// design-tokens.js
export const tokens = {
  colors: {
    primary: '#0066CC',
    accent: '#FF6B35',
    success: '#28A745',
    warning: '#FFC107',
    error: '#DC3545',
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: '#F8F9FA',
      100: '#E0E0E0',
      200: '#C0C0C0',
      500: '#808080',
      900: '#2C3E50'
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  },
  borderRadius: {
    sm: '2px',
    md: '4px',
    lg: '8px',
    full: '9999px'
  },
  typography: {
    h1: { fontSize: '48px', fontWeight: 700, lineHeight: 1.2 },
    h2: { fontSize: '36px', fontWeight: 600, lineHeight: 1.3 },
    body: { fontSize: '16px', fontWeight: 400, lineHeight: 1.6 },
    caption: { fontSize: '12px', fontWeight: 400, lineHeight: 1.4 }
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.2)'
  }
};
```

---

## BROWSER & DEVICE SUPPORT

**Target Browsers:**
- Chrome 90+ (Windows, macOS, Android, iOS)
- Firefox 88+ (Windows, macOS, Linux)
- Safari 14+ (macOS, iOS)
- Edge 90+ (Windows, macOS)

**Testing Devices:**
- iPhone SE (375px)
- iPhone 12/13/14 (390px)
- Samsung Galaxy S21 (360px)
- iPad (768px)
- iPad Pro (1024px)
- Desktop (1440px+)

---

## IMPLEMENTATION PRIORITY

**Phase 1 (MVP):**
- ✓ Navigation bar
- ✓ Hero section with booking widget
- ✓ Location cards
- ✓ Vehicle gallery
- ✓ Footer
- ✓ Mobile responsiveness

**Phase 2:**
- ✓ Reviews carousel
- ✓ FAQ accordion
- ✓ Blog section
- ✓ Location-specific pages
- ✓ Vehicle detail pages

**Phase 3:**
- ✓ Advanced booking flow
- ✓ Customer dashboard
- ✓ Loyalty program
- ✓ Dark mode
- ✓ Multilingual support enhancements