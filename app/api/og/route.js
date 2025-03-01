import { ImageResponse } from "next/og";
import { getPostData } from "@/lib/posts";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    // ?id=<id>
    const hasId = searchParams.has("id");

    let post = {
      title: "Ravi Suhag - Personal Blog",
    };

    if (hasId) {
      const id = searchParams.get("id");
      console.log(id);
      post = await getPostData(id);
    }

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: "-.02em",
            fontWeight: 700,
            background: "white",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        >
          <div
            style={{
              left: 42,
              top: 42,
              position: "absolute",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                width: 24,
                height: 24,
                background: "black",
              }}
            />
            <span
              style={{
                marginLeft: 8,
                fontSize: 20,
              }}
            >
              ravisuhag.com
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "20px 50px",
              margin: "0 42px",
              fontSize: 40,
              width: "auto",
              maxWidth: 550,
              textAlign: "center",
              backgroundColor: "white",
              color: "black",
              lineHeight: 1.4,
            }}
          >
            {post.title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
