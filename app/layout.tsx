import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "OpenUI - AI-Native Specification for UIs",
    template: "%s | OpenUI",
  },
  description: "AI-Native Specification for UIs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://openuispec.org",
    siteName: "OpenUI",
    images: [
      {
        url: "/api/og?title=OpenUI&description=AI-Native Specification for UIs",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@openuispec",
    creator: "@openuispec",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-background ${GeistSans.className}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
