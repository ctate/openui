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
          fontWeight: 600,
        }}
      >
        <img
          src={logoData as unknown as string}
          alt="OpenUI Logo"
          width={180}
          height={180}
          style={{ marginBottom: 40 }}
        />
        <div
          style={{
            marginBottom: 40,
            fontSize: 60,
            textAlign: "center",
            maxWidth: "90%",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 36,
            textAlign: "center",
            maxWidth: "90%",
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
