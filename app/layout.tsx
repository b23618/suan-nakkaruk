import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "สวนนาครักษ์ (SUANNAKKARUK) - Premium Fresh Fruits",
  description: "Premium fresh mangosteen, durian, and fruit gift sets from our family farm. Daily harvested, chemical-free, luxury quality fruits.",
  keywords: "mangosteen, durian, fresh fruits, premium fruits, fruit gift sets, Thailand",
  openGraph: {
    title: "สวนนาครักษ์ (SUANNAKKARUK) - Premium Fresh Fruits",
    description: "Premium fresh mangosteen, durian, and fruit gift sets from our family farm.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2D5A27" />
      </head>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
