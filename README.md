# Keploy with Gin and MongoDB: a beginner tutorial

A single-page documentation site, built with Next.js and MDX, that walks a
first-time user through recording and replaying API tests for Keploy's
[Gin + MongoDB sample app](https://github.com/keploy/samples-go/tree/main/gin-mongo).

**Live site:** _add your Vercel URL here_

## Stack

- **Next.js (App Router)** with static export (`output: "export"`)
- **MDX** via `@next/mdx`. The whole tutorial is `app/page.mdx`
- **Tailwind CSS v4** plus design tokens in `app/globals.css`
- **rehype-pretty-code + Shiki** for build-time syntax highlighting, with
  separate light and dark themes
- **next-themes** for the light/dark toggle
- **lucide-react** for icons

## Custom MDX components

| Component | File | Used for |
| --- | --- | --- |
| `<FlowDiagram />` | `components/flow-diagram.tsx` | Switchable record/test diagram |
| `<Callout type="info | warning | tip">` | `components/callout.tsx` | Notes, warnings, "why" boxes |
| `<Tabs>` / `<Tab>` | `components/tabs.tsx` | Docker vs native instructions |
| `<Checklist>` | `components/checklist.tsx` | Tick-off prerequisites |
| `Pre` | `components/code-block.tsx` | Copy button on every code block |

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # static site in ./out
npm run lint
```

## Project layout

```plaintext
app/
  layout.tsx        page shell: header, sidebar, footer
  page.mdx          the tutorial
  globals.css       tokens and styles
components/         React components used from MDX
mdx-components.tsx  global MDX element overrides
next.config.ts      MDX + rehype plugin setup
```

## Deploy

Import the repository at [vercel.com/new](https://vercel.com/new). The default
Next.js settings work; no environment variables are needed.
