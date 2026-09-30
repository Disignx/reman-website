import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { ThemeSwitcher } from "./theme-switcher";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <a className="skip-link" href="#content">
        Zum Inhalt springen
      </a>

      <SiteHeader />

      <main id="content">
        <div id="header-trigger" aria-hidden="true" />
        {children}
      </main>

      <SiteFooter />
      <ThemeSwitcher />
    </>
  );
}
