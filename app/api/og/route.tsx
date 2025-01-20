import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "OpenUI";
  const description =
    searchParams.get("description") || "AI-Native UI Standardization";

  const logoUrl = new URL("/logo.png", request.url).toString();
  const logoData = await fetch(logoUrl).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <img
          src={logoData as unknown as string}
          alt="OpenUI Logo"
          width={120}
          height={120}
          style={{ marginBottom: 24 }}
        />
        <div
          style={{
            marginBottom: 24,
            maxWidth: "80%",
            textAlign: "center",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            maxWidth: "80%",
            textAlign: "center",
          }}
        >
          {description}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
