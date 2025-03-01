import { ImageResponse } from "next/og";
import { getPostData } from "@/lib/posts";

export async function GET() {
  const { id } = await params;
  const post = await getPostData(id);
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
