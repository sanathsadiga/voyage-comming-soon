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

// src/app/page.tsx
export const metadata = {
  title: "Travel CMS – Coming Soon",
  description: "The ultimate CMS for tours and travel websites – with itineraries, booking engine, and modern widgets.",
  openGraph: {
    title: "Travel CMS – Coming Soon",
    description: "Build beautiful travel websites with itineraries, booking engine and more!",
    url: "https://voyage-forge.com/",
    siteName: "Travel CMS",
    images: [
      {
        url: "https://res.cloudinary.com/dp3fvdwse/image/upload/v1754218499/Voyage_Forge_Company_laudwl.jpg", // Use full URL
        width: 1200,
        height: 630,
        alt: "Travel CMS OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel CMS – Coming Soon",
    description: "Build beautiful travel websites with itineraries, booking engine and more!",
    images: ["https://res.cloudinary.com/dp3fvdwse/image/upload/v1754218499/Voyage_Forge_Company_laudwl.jpg"],
  },
  metadataBase: new URL("https://voyage-forge.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
