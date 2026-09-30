#!/usr/bin/env bash
# Post-Deploy nach Plesk Git-Pull: pnpm install + next build.
# Kein Docker. Node/Next laufen über Plesk (Startup: server.js).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${ROOT}"

if [[ -f "${ROOT}/.env" ]]; then
  set -a
  # shellcheck disable=SC1091
  source "${ROOT}/.env"
  set +a
fi

SITE_URL="${NEXT_PUBLIC_SITE_URL:-https://dev.re-man.at}"
export NEXT_PUBLIC_SITE_URL="${SITE_URL}"
export NODE_ENV=production

if command -v corepack >/dev/null 2>&1; then
  corepack enable >/dev/null 2>&1 || true
fi

if ! command -v pnpm >/dev/null 2>&1; then
  echo "Fehler: pnpm fehlt. Auf xs8001: corepack enable && corepack prepare pnpm@latest --activate" >&2
  exit 1
fi

echo "[plesk-deploy] pnpm install …"
pnpm install --frozen-lockfile

echo "[plesk-deploy] next build (${NEXT_PUBLIC_SITE_URL}) …"
pnpm build

echo "[plesk-deploy] Fertig. Plesk-Node mit server.js neu starten."
