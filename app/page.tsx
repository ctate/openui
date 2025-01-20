import Landing from "@/components/landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenUI - AI-Native UI Standardization",
  description:
    "OpenUI is an AI-native specification for standardizing UI components across different libraries and frameworks.",
  openGraph: {
    images: [
      {
        url: "/api/og?title=OpenUI&description=AI-Native Specification for UIs",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Home() {
  return <Landing />;
}
