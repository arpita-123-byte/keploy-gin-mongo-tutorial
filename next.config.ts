import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Let .mdx files act as routes (app/page.mdx is the whole site).
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Fully static HTML export — no server needed.
  output: "export",
  images: { unoptimized: true },
};

const withMDX = createMDX({
  options: {
    // Plugins are passed as strings so they stay serialisable for Turbopack.
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-pretty-code",
        {
          theme: { light: "github-light", dark: "github-dark-dimmed" },
          keepBackground: false,
          defaultLang: "plaintext",
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
