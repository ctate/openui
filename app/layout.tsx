import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "OpenUI - AI-Native UI Standardization",
  description:
    "OpenUI is an AI-native specification for standardizing UI components across different libraries and frameworks. It promotes interoperability, consistent user experiences, and enhanced AI integration by defining common properties and behaviors for UI elements.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-background ${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
