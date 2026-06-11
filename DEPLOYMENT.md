# Deployment Guide - SUANNAKKARUK Website

This guide covers deploying the SUANNAKKARUK e-commerce website to various platforms.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git repository initialized
- Environment variables configured (if needed)

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

## Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the creator of Next.js and provides the best integration.

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

#### Option B: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project settings
6. Click "Deploy"

**Vercel automatically:**
- Builds your project
- Optimizes images
- Caches static assets
- Provides CDN distribution
- Sets up SSL certificates

### 2. Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

Or connect via GitHub:
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### 3. AWS Amplify

```bash
# Install AWS Amplify CLI
npm i -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Deploy
amplify publish
```

Or use AWS Console:
1. Go to AWS Amplify Console
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Configure build settings
5. Deploy

### 4. Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

Build and run:

```bash
# Build Docker image
docker build -t suannakkaruk:latest .

# Run container
docker run -p 3000:3000 suannakkaruk:latest
```

### 5. Traditional VPS (Ubuntu/Debian)

```bash
# SSH into your server
ssh user@your-server.com

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone https://github.com/yourusername/suan-nakkaruk.git
cd suan-nakkaruk

# Install dependencies
npm install

# Build project
npm run build

# Install PM2 for process management
sudo npm install -g pm2

# Start application with PM2
pm2 start npm --name "suannakkaruk" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

### 6. Railway.app

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Choose your repository
5. Configure environment variables if needed
6. Deploy

### 7. Render

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - Build command: `npm install && npm run build`
   - Start command: `npm start`
5. Deploy

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
```

For production, set environment variables in your hosting platform's dashboard.

## Domain Configuration

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

### Other Platforms
Update your domain's DNS records to point to your hosting provider's nameservers.

## SSL/TLS Certificate

Most platforms (Vercel, Netlify, etc.) provide free SSL certificates automatically.

For manual setup, use Let's Encrypt:

```bash
# Using Certbot
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --standalone -d yourdomain.com
```

## Performance Optimization

### Lighthouse Checklist

- [ ] Compress images (WebP, AVIF formats)
- [ ] Enable gzip compression
- [ ] Minify CSS and JavaScript
- [ ] Remove unused CSS
- [ ] Lazy load images and components
- [ ] Implement caching headers
- [ ] Use CDN for static assets

### Current Optimizations

✅ Next.js automatic code splitting
✅ Image optimization with next/image
✅ CSS minification with TailwindCSS
✅ Framer Motion lazy animations
✅ Viewport-based component loading
✅ Cache headers configured in next.config.ts

## Monitoring & Analytics

### Google Analytics

Add to `app/layout.tsx`:

```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_ID');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

Replace `GA_ID` with your Google Analytics ID.

### Error Tracking

Consider using:
- Sentry for error tracking
- LogRocket for session replay
- New Relic for performance monitoring

## Backup & Maintenance

### Regular Backups

```bash
# Backup your repository
git push origin main

# Backup environment variables (keep secure)
# Never commit .env files
```

### Updates

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update to latest major versions
npm install -g npm-check-updates
ncu -u
npm install
```

## Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### High Memory Usage

- Increase server RAM
- Enable compression
- Optimize images
- Use CDN for static assets

### Slow Page Load

- Enable caching
- Optimize images
- Minify CSS/JS
- Use CDN
- Enable gzip compression

## Support & Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify mobile responsiveness
- [ ] Check form submissions
- [ ] Test contact methods (phone, email, social)
- [ ] Verify analytics tracking
- [ ] Check SEO meta tags
- [ ] Test performance with Lighthouse
- [ ] Verify SSL certificate
- [ ] Set up monitoring and alerts
- [ ] Configure backup strategy

---

For questions or issues, contact the development team.
