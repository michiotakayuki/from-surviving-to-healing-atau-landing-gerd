import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500"],
 
});

export const viewport: Viewport = {
  themeColor: "#FBFAF8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.brandName}`,
  },
  description: siteConfig.description,
  keywords: [
    "GERD",
    "gastritis",
    "asam lambung",
    "healing pencernaan",
    "ebook GERD",
    "functional medicine",
    "naturopati",
    "gut healing",
    "anxiety lambung",
  ],
  authors: [{ name: siteConfig.authorName }],
  creator: siteConfig.authorName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.brandName,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: siteConfig.productName,
  author: { "@type": "Person", name: siteConfig.authorName },
  bookFormat: "https://schema.org/EBook",
  inLanguage: "id",
  description: siteConfig.description,
  offers: {
    "@type": "Offer",
    price: "99000",
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
