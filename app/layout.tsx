import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://verdant-library.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Verdant Public Library | Read, Learn, Belong",
    template: "%s | Verdant Public Library",
  },
  description:
    "Explore books, digital resources, local events, and welcoming spaces at Verdant Public Library. Discover your next great read.",
  keywords: [
    "public library",
    "book catalog",
    "digital library",
    "community events",
    "reading",
    "local library",
  ],
  authors: [{ name: "Verdant Public Library" }],
  creator: "Verdant Public Library",
  publisher: "Verdant Public Library",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Verdant Public Library",
    title: "Verdant Public Library | Read, Learn, Belong",
    description:
      "A modern public library for curious minds. Explore books, digital resources, local events, and welcoming spaces.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verdant Public Library | Read, Learn, Belong",
    description:
      "Explore books, digital resources, local events, and welcoming spaces.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#123c2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
