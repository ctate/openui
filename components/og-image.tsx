import { ImageResponse } from "next/server";

export function OgImage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
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
