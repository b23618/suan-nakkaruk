import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "สวนนาครักษ์ | ทุเรียน มังคุด พรีเมียม ส่งตรงจากสวน",
  description: "ทุเรียน มังคุด และผลไม้พรีเมียมส่งตรงจากสวนนาครักษ์ คัดสดทุกวัน ปลอดสารเคมี มาตรฐานส่งออก ส่งฟรีทั่วไทย",
  keywords: "มังคุด, ทุเรียน, ผลไม้สด, ผลไม้พรีเมียม, ชุดของขวัญผลไม้, สวนนาครักษ์, ส่งตรงจากสวน",
  openGraph: {
    title: "สวนนาครักษ์ | ทุเรียน มังคุด พรีเมียม ส่งตรงจากสวน",
    description: "ทุเรียน มังคุด และผลไม้พรีเมียมส่งตรงจากสวนนาครักษ์ คัดสดทุกวัน ปลอดสารเคมี",
    type: "website",
    locale: "th_TH",
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
      </head>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
