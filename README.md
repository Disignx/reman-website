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

Das erzeugt statische Dateien in `out/` (`output: "export"`). Lokal vorschauen:

```bash
pnpm preview
```

## Deploy

Verbindlicher Standard für DISIGNX-Websites (statisch, kein Node):

→ [docs/DEPLOY-WEBSITES.md](docs/DEPLOY-WEBSITES.md)
