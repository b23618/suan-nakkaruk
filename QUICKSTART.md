# Quick Start Guide - SUANNAKKARUK Website

Get the website running in 2 minutes!

## 🚀 Start Development Server

```bash
# Navigate to project directory
cd /Users/nboomm/project/suan-nakkaruk

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```

**Open in browser:** http://localhost:3000

## 📁 Project Structure at a Glance

```
app/
├── components/          # All website sections
│   ├── Header.tsx      # Navigation
│   ├── Hero.tsx        # Image slider
│   ├── WhyChooseUs.tsx # Features
│   ├── FeaturedProducts.tsx # Products
│   ├── FarmStory.tsx   # About
│   ├── CustomerReviews.tsx # Reviews
│   ├── LatestArticles.tsx # Blog
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── page.tsx            # Main page
├── layout.tsx          # Root layout
└── globals.css         # Global styles
```

## 🎨 Key Features

- ✅ Full-width hero slider
- ✅ Product showcase grid
- ✅ Customer reviews carousel
- ✅ Contact form and newsletter
- ✅ Responsive mobile design
- ✅ Smooth animations
- ✅ SEO optimized

## 🔧 Common Tasks

### Update Product Information

Edit `app/components/FeaturedProducts.tsx`:

```tsx
const products = [
  {
    id: 1,
    name: 'มังคุดสดใหม่',
    price: 450,
    description: 'Your description here',
    // ... other fields
  },
];
```

### Update Contact Information

Edit `app/components/Contact.tsx`:

```tsx
const contactMethods = [
  {
    title: 'โทรศัพท์',
    value: '081-234-5678',  // Update this
    link: 'tel:0812345678',
  },
];
```

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --primary-dark: #2D5A27;      /* Change these */
  --primary-medium: #6B8E23;
  --accent-gold: #D4AF37;
  --cream: #FFF8E8;
}
```

### Add New Section

1. Create `app/components/NewSection.tsx`
2. Add to `app/page.tsx`:

```tsx
import NewSection from './components/NewSection';

export default function Home() {
  return (
    <div>
      {/* ... existing sections */}
      <NewSection />
    </div>
  );
}
```

## 📱 Responsive Design

Website automatically adapts to:
- **Mobile** (< 640px)
- **Tablet** (640px - 1024px)
- **Desktop** (> 1024px)

No additional configuration needed!

## 🎬 Animations

All animations use Framer Motion and trigger when scrolling into view:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

## 🚀 Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📊 Performance

Current setup supports Lighthouse scores > 95 for:
- Performance
- Accessibility
- Best Practices
- SEO

## 🌐 Deploy

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

### Netlify

```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=.next
```

See `DEPLOYMENT.md` for more options.

## 📚 Documentation

- **WEBSITE.md** - Feature overview
- **DEVELOPMENT.md** - Developer guide
- **DEPLOYMENT.md** - Deployment guide
- **PROJECT_SUMMARY.md** - Complete summary

## 🆘 Troubleshooting

### Port 3000 already in use?

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Build fails?

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Styles not updating?

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## 💡 Tips

- Use `'use client'` for interactive components
- Add TypeScript types for props
- Use TailwindCSS classes for styling
- Wrap animations with `whileInView` for scroll effects
- Test on mobile devices regularly
- Check Lighthouse scores before deploying

## 🎯 Next Steps

1. **Customize Content** - Update products, reviews, articles
2. **Add Functionality** - Shopping cart, payment, etc.
3. **Deploy** - Choose hosting and go live
4. **Monitor** - Set up analytics and error tracking

## 📞 Need Help?

1. Check documentation files
2. Review component code
3. Check Next.js docs: https://nextjs.org/docs
4. Check TailwindCSS docs: https://tailwindcss.com/docs

---

**Happy coding!** 🚀

The website is ready to use and customize. Start by updating the content to match your needs!
