import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = `${SITE.name} — Admission Counselling for Uttarakhand's Top Universities`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px",
          background:
            "radial-gradient(800px 500px at 80% -10%, rgba(184,137,58,0.25), transparent 60%), radial-gradient(700px 500px at -10% 0%, rgba(15,61,46,0.18), transparent 60%), #f6efde",
          fontFamily: "Georgia, serif",
          color: "#0f3d2e",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8a6320",
            fontWeight: 600,
          }}
        >
          <span style={{ width: 56, height: 1, background: "#b8893a" }} />
          {SITE.shortName}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 70,
            fontSize: 100,
            lineHeight: 1.02,
            letterSpacing: -1,
          }}
        >
          <span>The right university</span>
          <span>
            starts with{" "}
            <i style={{ color: "#0f3d2e" }}>the right counsel.</i>
          </span>
        </div>

        <div
          style={{
            marginTop: 60,
            fontFamily: "system-ui, sans-serif",
            color: "#2c3327",
            fontSize: 28,
            maxWidth: 920,
            lineHeight: 1.4,
          }}
        >
          Free 1-on-1 counselling for students interested in universities like
          Uttaranchal University and Graphic Era in Dehradun.
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 72,
            right: 72,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#6a6855",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 600,
            letterSpacing: 2,
          }}
        >
          <span>UTTARANCHAL · GRAPHIC ERA</span>
          <span style={{ color: "#0f3d2e" }}>admissiondesk.in</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
