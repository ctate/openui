import { ImageResponse } from "next/og";

export const runtime = "edge";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "OpenUI";
  const description =
    searchParams.get("description") || "AI-Native Specification for UIs";

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
          fontFamily: '"Geist Sans"',
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
            marginBottom: 20,
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
      fonts: [
        {
          name: "Geist",
          data: await loadGoogleFont("Geist", `${title} - ${description}`),
          style: "normal",
        },
      ],
    },
  );
}
