import { ReadingProgress } from "./reading-progress";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#top" className="brand">
          <span className="brand-dot" aria-hidden />
          Keploy with Gin and MongoDB
        </a>
        <div className="site-header-actions">
          <a
            className="header-link"
            href="https://keploy.io/docs/quickstart/samples-gin/"
            target="_blank"
            rel="noreferrer"
          >
            Official quickstart
          </a>
          <ThemeToggle />
        </div>
      </div>
      <ReadingProgress />
    </header>
  );
}
