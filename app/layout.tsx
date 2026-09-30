import type { Metadata } from "next";
import { MotionInit } from "./components/motion-init";
import { SiteShell } from "./components/site-shell";
import { ThemeProvider } from "./components/theme-provider";
import { THEME_IDS, THEME_STORAGE_KEY } from "@/lib/themes";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} — Recycling. Ready for Food.`,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-theme="green" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "body.dx-page-enter:not(.dx-page-ready) .site-header,body.dx-page-enter:not(.dx-page-ready) .dx-enter-fade,body.dx-page-enter:not(.dx-page-ready) .dx-enter-up{opacity:0}",
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(${JSON.stringify(THEME_IDS)}.indexOf(t)!==-1)document.documentElement.setAttribute("data-theme",t)}catch(e){}`,
          }}
        />
      </head>
      <body className="dx-page-enter">
        <ThemeProvider>
          <MotionInit />
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
