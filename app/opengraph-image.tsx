import { ImageResponse } from "next/server";

export const runtime = "edge";
export const alt = "Opeyemi Esther Agbaje — Full-Stack Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#F8FAFC",
          color: "#25364A",
          display: "flex",
          height: "100%",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid #D8E4E5",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            padding: "64px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#347D82",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontSize: 58,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.15,
              marginTop: 24,
            }}
          >
            Opeyemi Esther Agbaje
          </div>
          <div
            style={{
              color: "#347D82",
              fontSize: 34,
              marginTop: 20,
            }}
          >
            Full-Stack Software Engineer
          </div>
          <div
            style={{
              color: "#526579",
              fontSize: 24,
              marginTop: 28,
            }}
          >
            Desktop · Backend · Web
          </div>
        </div>
      </div>
    ),
    size
  );
}
