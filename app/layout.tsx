import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "สวนนาครักษ์ | ทุเรียน มังคุด พรีเมียม ส่งตรงจากสวน",
  description: "ทุเรียน มังคุด และผลไม้พรีเมียมส่งตรงจากสวนนาครักษ์ คัดสดทุกวัน ปลอดสารเคมี มาตรฐานส่งออก ส่งฟรีทั่วไทย",
  keywords: "มังคุด, ทุเรียน, ผลไม้สด, ผลไม้พรีเมียม, ชุดของขวัญผลไม้, สวนนาครักษ์, ส่งตรงจากสวน, ผลไม้ส่งตรง, ผลไม้ออร์แกนิก",
  authors: [{ name: "สวนนาครักษ์", url: "https://suannakkaruk.com" }],
  creator: "สวนนาครักษ์",
  publisher: "สวนนาครักษ์",
  openGraph: {
    title: "สวนนาครักษ์ | ทุเรียน มังคุด พรีเมียม ส่งตรงจากสวน",
    description: "ทุเรียน มังคุด และผลไม้พรีเมียมส่งตรงจากสวนนาครักษ์ คัดสดทุกวัน ปลอดสารเคมี มาตรฐานส่งออก",
    type: "website",
    locale: "th_TH",
    url: "https://suannakkaruk.com",
    siteName: "สวนนาครักษ์",
    images: [
      {
        url: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&h=630&q=85&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "ผลไม้พรีเมียมจากสวนนาครักษ์",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "สวนนาครักษ์ | ทุเรียน มังคุด พรีเมียม",
    description: "ผลไม้พรีเมียมส่งตรงจากสวน คัดสดทุกวัน ปลอดสารเคมี",
    images: ["https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&h=630&q=85&auto=format&fit=crop"],
  },
  alternates: {
    canonical: "https://suannakkaruk.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${kanit.variable} h-full antialiased scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2D5A27" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href="https://suannakkaruk.com" />
        <link rel="alternate" hrefLang="th" href="https://suannakkaruk.com" />
        <link rel="alternate" hrefLang="en" href="https://suannakkaruk.com/en" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "สวนนาครักษ์",
              "image": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&h=630&q=85&auto=format&fit=crop",
              "description": "ทุเรียน มังคุด และผลไม้พรีเมียมส่งตรงจากสวนนาครักษ์ คัดสดทุกวัน ปลอดสารเคมี มาตรฐานส่งออก",
              "url": "https://suannakkaruk.com",
              "telephone": "+66812345678",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TH",
                "addressRegion": "นครราชสีมา",
                "streetAddress": "สวนนาครักษ์"
              },
              "areaServed": "TH",
              "priceRange": "฿฿฿",
              "sameAs": [
                "https://facebook.com/suannakkaruk",
                "https://line.me/R/ti/p/@suannakkaruk"
              ]
            }),
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "สวนนาครักษ์",
              "url": "https://suannakkaruk.com",
              "logo": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=200&q=85&auto=format&fit=crop",
              "description": "ผลไม้พรีเมียมส่งตรงจากสวน",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+66812345678",
                "areaServed": "TH",
                "availableLanguage": ["th", "en"]
              },
              "sameAs": [
                "https://facebook.com/suannakkaruk",
                "https://line.me/R/ti/p/@suannakkaruk"
              ]
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
