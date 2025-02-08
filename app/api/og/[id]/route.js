import { ImageResponse } from "next/og";
import { getPostData } from "@/lib/posts";

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const { id } = req.params;
  const post = await getPostData(id);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          color: "white",
          background: "black",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
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
