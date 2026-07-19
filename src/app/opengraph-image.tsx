import { ImageResponse } from "next/og";
import { SITE } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — ${SITE.tagline}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#0d0e12",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "180px",
          height: "6px",
          borderRadius: "3px",
          background: "linear-gradient(90deg, #84cc16, #06b6d4, #6366f1)",
          marginBottom: "40px",
        }}
      />
      <div
        style={{
          display: "flex",
          fontSize: "72px",
          fontWeight: 700,
          color: "#e9eaef",
          letterSpacing: "-0.03em",
        }}
      >
        {SITE.name}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "24px",
          fontSize: "32px",
          color: "#8b8d98",
          maxWidth: "900px",
          lineHeight: 1.4,
        }}
      >
        I build and deliver production software and the process around it.
      </div>
    </div>,
    size,
  );
}
