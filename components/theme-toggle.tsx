"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="icon-button"
      aria-label="Switch between light and dark theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/* Both icons render; CSS shows the one that matches the theme,
          so there is no flash or hydration mismatch. */}
      <Sun className="theme-icon-sun" size={18} aria-hidden />
      <Moon className="theme-icon-moon" size={18} aria-hidden />
    </button>
  );
}
