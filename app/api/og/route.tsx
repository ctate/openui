import { OgImage } from "@/components/og-image";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "OpenUI";
  const description =
    searchParams.get("description") || "AI-Native UI Standardization";

  return OgImage({ title, description });
}
