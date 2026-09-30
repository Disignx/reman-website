# RE-MAN

Eigenständiges Marken-Frontend. Technisch an Baustellenbanner24 orientiert, aber kein Teil von `disignx-commerce-platform`.

Das Commerce-Repo bleibt unangetastet. Es dient nur als Referenz.

## Start

Im WSL-Terminal, direkt in diesem Ordner:

```bash
cd ~/projects/re-man
pnpm install
pnpm assets:sync-dims
pnpm assets:check
pnpm typecheck
pnpm dev
```

Die Seite läuft danach unter http://localhost:3003.

## Build

```bash
cd ~/projects/re-man
pnpm build
```

## Plesk (dev.re-man.at) — Node, kein Docker

Wie Commerce: GitHub → Plesk Git-Pull. Anders als Commerce: kein Compose, Host-Node startet Next.

1. Domain **dev.re-man.at** → Git → Branch **main** → **Jetzt pullen**
2. Zusätzliche Bereitstellungsaktionen (einmalig eintragen):

```bash
chmod +x scripts/plesk-deploy.sh
scripts/plesk-deploy.sh
```

3. Node.js aktivieren:
   - Application Root: Document Root der Subdomain
   - Startup File: `server.js`
   - Application Mode: `production`
   - Env: `NEXT_PUBLIC_SITE_URL=https://dev.re-man.at`
   - Plesks eigenes npm-install aus

`PORT` setzt Plesk. Nach dem Pull Node-App neu starten.
