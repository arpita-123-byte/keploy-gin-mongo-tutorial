import type { MDXComponents } from "mdx/types";
import { Pre } from "@/components/code-block";

// Global overrides for the HTML elements MDX produces.
const components: MDXComponents = {
  pre: Pre,
  a: ({ href = "", children, ...props }) => {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
