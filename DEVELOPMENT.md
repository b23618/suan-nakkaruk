# Development Guide - SUANNAKKARUK Website

Quick reference for developers working on the SUANNAKKARUK e-commerce website.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
suan-nakkaruk/
├── app/
│   ├── components/          # Reusable React components
│   ├── page.tsx            # Main home page
│   ├── layout.tsx          # Root layout with metadata
│   └── globals.css         # Global styles and CSS variables
├── public/                 # Static assets
├── tailwind.config.ts      # TailwindCSS configuration
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## Key Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.2.9 | React framework with SSR |
| React | 19.2.4 | UI library |
| TypeScript | 5 | Type safety |
| TailwindCSS | 4 | Utility-first CSS |
| Framer Motion | 12.40.0 | Animations |
| Lucide React | 1.17.0 | Icons |

## Color System

```css
/* Primary Colors */
--primary-dark: #2D5A27;      /* Deep forest green */
--primary-medium: #6B8E23;    /* Olive green */
--accent-gold: #D4AF37;       /* Luxury gold */
--cream: #FFF8E8;             /* Warm cream */
```

Use in components:
```tsx
<div className="bg-[#2D5A27] text-[#D4AF37]">
  Premium Content
</div>
```

## Component Development

### Creating a New Component

```tsx
'use client';

import { motion } from 'framer-motion';

interface ComponentProps {
  title: string;
  description?: string;
}

export default function MyComponent({ title, description }: ComponentProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#2D5A27] mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-gray-600 text-lg">{description}</p>
        )}
      </div>
    </motion.section>
  );
}
```

### Component Best Practices

- ✅ Use `'use client'` directive for interactive components
- ✅ Add TypeScript interfaces for props
- ✅ Use Framer Motion for animations
- ✅ Implement viewport detection with `whileInView`
- ✅ Follow responsive design patterns
- ✅ Use semantic HTML elements
- ✅ Add proper alt text for images
- ✅ Keep components focused and reusable

## Styling Guidelines

### TailwindCSS Classes

```tsx
// Spacing
className="p-4 m-2 gap-4"

// Colors
className="bg-[#2D5A27] text-white"
className="hover:bg-[#6B8E23]"

// Responsive
className="text-lg sm:text-xl lg:text-2xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

// Transitions
className="transition-all duration-300"
className="hover:scale-105 hover:shadow-xl"
```

### Custom CSS

Add to `app/globals.css`:

```css
@layer components {
  .btn-primary {
    @apply px-8 py-4 bg-[#2D5A27] text-white font-bold rounded-lg hover:bg-[#6B8E23] transition-all;
  }
}
```

## Animation Patterns

### Scroll-Triggered Animation

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content animates when scrolled into view
</motion.div>
```

### Staggered Children

```tsx
<motion.div>
  {items.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Hover Effects

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-[#D4AF37] text-[#2D5A27] font-bold rounded-lg"
>
  Click Me
</motion.button>
```

## Responsive Design

### Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

### Mobile-First Approach

```tsx
<div className="
  grid grid-cols-1        /* Mobile: 1 column */
  md:grid-cols-2          /* Tablet: 2 columns */
  lg:grid-cols-4          /* Desktop: 4 columns */
  gap-4
">
  {/* Content */}
</div>
```

## SEO Best Practices

### Meta Tags

Update in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for search engines',
  keywords: 'keyword1, keyword2, keyword3',
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    type: 'website',
  },
};
```

### Semantic HTML

```tsx
<section id="products">
  <h2>Featured Products</h2>
  <article>
    <h3>Product Name</h3>
    <p>Product description</p>
  </article>
</section>
```

### Structured Data

Add JSON-LD in components:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Product Name',
      description: 'Product description',
      price: '100',
    }),
  }}
/>
```

## Performance Tips

### Image Optimization

```tsx
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority={false}
  loading="lazy"
/>
```

### Code Splitting

Next.js automatically code-splits at the page level. For component-level splitting:

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### Lazy Loading Components

```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Component loads when visible
</motion.div>
```

## Testing

### Manual Testing Checklist

- [ ] Test on mobile devices
- [ ] Test on tablets
- [ ] Test on desktop
- [ ] Test all navigation links
- [ ] Test form submissions
- [ ] Test animations on slow devices
- [ ] Test with keyboard navigation
- [ ] Test with screen readers

### Browser Testing

Test on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## Debugging

### Console Logging

```tsx
console.log('Debug message:', variable);
console.error('Error:', error);
console.warn('Warning:', message);
```

### React DevTools

Install React DevTools browser extension for component inspection.

### Next.js Debug Mode

```bash
# Run with debug output
DEBUG=* npm run dev
```

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/feature-name

# Create pull request on GitHub
```

### Commit Message Format

```
feat: add new feature
fix: fix bug
docs: update documentation
style: format code
refactor: refactor code
perf: improve performance
test: add tests
chore: update dependencies
```

## Common Tasks

### Add New Product

Edit `app/components/FeaturedProducts.tsx`:

```tsx
const products = [
  {
    id: 5,
    name: 'New Product',
    nameEn: 'Product Name',
    price: 999,
    image: 'linear-gradient(...)',
    description: 'Product description',
    rating: 5,
    reviews: 100,
  },
  // ... other products
];
```

### Update Contact Information

Edit `app/components/Contact.tsx` and `app/components/Footer.tsx`:

```tsx
const contactMethods = [
  {
    icon: Phone,
    title: 'โทรศัพท์',
    value: '081-234-5678',
    link: 'tel:0812345678',
    description: 'เรียกเราได้ทุกวัน 08:00-18:00',
  },
  // ... other methods
];
```

### Add New Section

1. Create component in `app/components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to main layout
4. Style with TailwindCSS
5. Add animations with Framer Motion

### Update Colors

1. Update CSS variables in `app/globals.css`
2. Update theme in `tailwind.config.ts`
3. Update color references in components

## Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server

# Linting
npm run lint             # Run ESLint (if configured)

# Type checking
npx tsc --noEmit         # Check TypeScript errors

# Clean build
rm -rf .next node_modules
npm install
npm run build
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Support

For questions or issues:
1. Check the documentation
2. Search GitHub issues
3. Ask in the team chat
4. Create a new issue with details

---

Happy coding! 🚀
