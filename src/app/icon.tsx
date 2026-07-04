import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0D10",
          border: "1px solid #262A31",
          color: "#C97AA8",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        AG
      </div>
    ),
    { ...size }
  );
}
