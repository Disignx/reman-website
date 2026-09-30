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

Kein Docker, kein Plesk, kein Static Export in dieser Phase.
