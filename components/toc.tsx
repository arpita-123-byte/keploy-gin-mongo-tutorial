"use client";

import { useEffect, useState } from "react";

// Ids are generated from the h2 text in app/page.mdx by rehype-slug.
// Keep this list in sync when you rename a heading.
const headings = [
  { id: "what-keploy-does-in-plain-words", text: "What Keploy does" },
  { id: "before-you-start", text: "Before you start" },
  { id: "1-install-keploy", text: "1. Install Keploy" },
  { id: "2-get-the-sample-app", text: "2. Get the sample app" },
  { id: "3-start-recording", text: "3. Start recording" },
  { id: "4-make-two-requests", text: "4. Make two requests" },
  { id: "5-look-at-what-keploy-wrote", text: "5. Look at what Keploy wrote" },
  { id: "6-replay-the-recording-as-tests", text: "6. Replay as tests" },
  { id: "7-break-it-on-purpose", text: "7. Break it on purpose" },
  { id: "things-that-trip-people-up", text: "Things that trip people up" },
  { id: "where-to-go-next", text: "Where to go next" },
];

/** Sidebar contents with scroll-spy. */
export function Toc() {
  const [active, setActive] = useState(headings[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );
    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="toc" aria-label="On this page">
      <p className="toc-title">On this page</p>
      <ol>
        {headings.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`} aria-current={active === h.id ? "true" : undefined}>
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
