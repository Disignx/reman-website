"use client";

import { THEME_IDS, THEMES } from "@/lib/themes";
import { useTheme } from "./theme-provider";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-switcher" role="group" aria-label="Farbschema">
      {THEME_IDS.map((id) => {
        const item = THEMES[id];

        return (
          <button
            key={id}
            type="button"
            className="theme-switcher__swatch"
            style={{ backgroundImage: item.swatch }}
            aria-label={item.label}
            aria-pressed={theme === id}
            onClick={() => setTheme(id)}
          />
        );
      })}
    </div>
  );
}
