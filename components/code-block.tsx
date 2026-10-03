"use client";

import { Check, Copy } from "lucide-react";
import { useRef, useState, type ComponentProps } from "react";

/** Replaces <pre> in MDX: same highlighted code, plus a copy button. */
export function Pre({ children, ...props }: ComponentProps<"pre">) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  async function copy() {
    const text = ref.current?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text.replace(/\n$/, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — nothing to do */
    }
  }

  return (
    <div className="code-wrap">
      <pre ref={ref} {...props}>
        {children}
      </pre>
      <button
        type="button"
        className="copy-button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy code"}
      >
        {copied ? <Check size={15} aria-hidden /> : <Copy size={15} aria-hidden />}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}
