import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/hanken-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toc } from "@/components/toc";

export const metadata: Metadata = {
  title: "Test a Gin + MongoDB API with Keploy, without writing tests",
  description:
    "A beginner-friendly walkthrough: record real API calls to a Go URL shortener and replay them as tests with mocked MongoDB.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body id="top">
        <ThemeProvider>
          <a className="skip-link" href="#content">
            Skip to content
          </a>
          <SiteHeader />
          <div className="shell">
            <aside className="sidebar">
              <Toc />
            </aside>
            <main id="content">
              <article className="prose">{children}</article>
              <footer className="site-footer">
                <p>
                  Written by Arpita. Built with Next.js and MDX. The sample app is{" "}
                  <a
                    href="https://github.com/keploy/samples-go/tree/main/gin-mongo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    keploy/samples-go
                  </a>
                  .
                </p>
              </footer>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
