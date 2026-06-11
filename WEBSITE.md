# สวนนาครักษ์ (SUANNAKKARUK) - Premium Fruit Farm E-Commerce Website

A modern, premium e-commerce website for SUANNAKKARUK, a family-owned fruit farm specializing in fresh mangosteen, premium durian, fried durian, and fruit gift sets.

## 🎨 Design System

### Color Palette
- **Primary Dark**: `#2D5A27` - Deep forest green
- **Primary Medium**: `#6B8E23` - Olive green
- **Accent Gold**: `#D4AF37` - Luxury gold
- **Cream**: `#FFF8E8` - Warm cream background

### Typography
- **Font Family**: Geist (Google Font)
- **Headings**: Bold, 600 weight, -0.5px letter spacing
- **Body**: Regular weight, clean and readable

## 🏗️ Project Structure

```
app/
├── components/
│   ├── Header.tsx           # Fixed navigation header with mobile menu
│   ├── Hero.tsx             # Full-width image slider with CTA buttons
│   ├── WhyChooseUs.tsx      # 4-column feature showcase
│   ├── FeaturedProducts.tsx # Product grid with hover effects
│   ├── FarmStory.tsx        # About section with company values
│   ├── CustomerReviews.tsx  # Customer testimonials carousel
│   ├── LatestArticles.tsx   # Blog articles section
│   ├── Contact.tsx          # Contact methods and newsletter signup
│   └── Footer.tsx           # Footer with links and social media
├── page.tsx                 # Main page combining all sections
├── layout.tsx               # Root layout with metadata
└── globals.css              # Global styles and CSS variables
```

## 📱 Features

### 1. **Hero Section**
- Full-width image slider with automatic rotation (5-second interval)
- Manual navigation with arrow buttons
- Dot indicators for slide selection
- Animated text with staggered entrance
- Dual CTA buttons (Order Now, View Products)

### 2. **Why Choose Us**
- 4-column grid showcasing key benefits
- Icons with gradient backgrounds
- Hover animations and shadow effects
- Responsive grid layout

### 3. **Featured Products**
- 4-product showcase grid
- Product cards with hover effects
- Quick view and add to cart buttons
- Star ratings and review counts
- Price display and product descriptions

### 4. **Farm Story**
- About the farm with company history
- 30+ years of experience highlight
- 5000+ satisfied customers stat
- Three core values with icons:
  - Sustainability
  - Family Business
  - Innovation

### 5. **Customer Reviews**
- Carousel-style testimonial display
- 5-star ratings
- Customer avatars and roles
- Navigation controls and indicators
- Responsive grid layout

### 6. **Latest Articles**
- Blog section with 3 featured articles
- Category badges
- Publication dates
- Read more links with hover effects
- SEO-optimized structure

### 7. **Contact Section**
- 4 contact methods (Phone, Line OA, Facebook, Location)
- Newsletter signup form
- Email validation
- Responsive layout

### 8. **Footer**
- Company information
- Quick links navigation
- Product links
- Social media links
- Operating hours and contact info
- Copyright notice

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist (Google Fonts)

## 🎯 Performance Optimizations

### Implemented
- ✅ Server-side rendering (SSR) ready
- ✅ Image optimization with Next.js Image component
- ✅ Lazy loading with Framer Motion viewport detection
- ✅ CSS-in-JS with TailwindCSS
- ✅ Smooth scroll behavior
- ✅ Mobile-first responsive design
- ✅ Optimized animations with GPU acceleration

### SEO Features
- ✅ Semantic HTML structure
- ✅ Meta tags and Open Graph
- ✅ Structured data ready
- ✅ Thai language support (lang="th")
- ✅ Descriptive page titles and descriptions
- ✅ Proper heading hierarchy

## 📱 Responsive Design

- **Mobile First**: Designed for mobile, enhanced for larger screens
- **Breakpoints**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Touch-friendly**: Buttons and interactive elements sized for touch
- **Flexible Layouts**: Grid and flex layouts adapt to screen size

## 🎬 Animations

- **Framer Motion**: Used for scroll-triggered animations
- **Viewport Detection**: Elements animate when they come into view
- **Staggered Animations**: Sequential animation of child elements
- **Hover Effects**: Interactive feedback on buttons and cards
- **Smooth Transitions**: 0.3s ease transitions on all interactive elements

## 🔧 Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the website.

## 📝 Component Usage

### Header
```tsx
import Header from './components/Header';

<Header />
```

### Hero Section
```tsx
import Hero from './components/Hero';

<Hero />
```

All components are client-side rendered (`'use client'`) for interactivity.

## 🎨 Customization

### Colors
Update colors in:
1. `app/globals.css` - CSS variables
2. `tailwind.config.ts` - TailwindCSS theme
3. Component files - Inline color classes

### Content
Edit content directly in component files:
- Product data in `FeaturedProducts.tsx`
- Reviews in `CustomerReviews.tsx`
- Articles in `LatestArticles.tsx`
- Contact info in `Contact.tsx` and `Footer.tsx`

### Fonts
Fonts are configured in `app/layout.tsx` using Google Fonts.

## 📊 Lighthouse Targets

- **Performance**: > 95
- **Accessibility**: > 95
- **Best Practices**: > 95
- **SEO**: > 95

## 🌐 Deployment

Ready to deploy to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting

## 📞 Contact Information

- **Phone**: 081-234-5678
- **Line OA**: @suannakkaruk
- **Facebook**: สวนนาครักษ์
- **Location**: Nakhon Ratchasima, Thailand

## 📄 License

© 2024 สวนนาครักษ์ (SUANNAKKARUK). All rights reserved.

---

Built with ❤️ for premium fruit farming excellence.
