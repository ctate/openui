import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "OpenUI - AI-Native UI Standardization",
    template: "%s | OpenUI",
  },
  description:
    "OpenUI is an AI-native specification for standardizing UI components across different libraries and frameworks. It promotes interoperability, consistent user experiences, and enhanced AI integration by defining common properties and behaviors for UI elements.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://openuispec.org",
    siteName: "OpenUI",
    images: [
      {
        url: "/api/og?title=OpenUI&description=AI-Native UI Standardization",
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
