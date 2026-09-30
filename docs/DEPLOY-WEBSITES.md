# Standard-Deploy — DISIGNX Websites

**Status:** Verbindlich für Marken- und Marketing-Websites  
**Referenzumsetzung:** RE-MAN (`reman-website`)  
**Nicht gilt für:** `disignx-commerce-platform` (Docker + `plesk-deploy.sh`)

---

## Zweck

Normale Websites (keine API, keine Datenbank, keine Logins) werden **statisch** ausgeliefert.

GitHub ist die Quelle. CI baut. Plesk serviert nur Dateien. Auf dem Server läuft kein Node, kein Docker, kein systemd für die Website.

---

## Wann dieses Verfahren gilt

| Gilt | Gilt nicht |
|------|------------|
| Broschüren- und Markenseiten | Commerce, Admin, APIs |
| Statische Next.js-Seiten (`output: "export"`) | Alles, was zur Laufzeit Node braucht |
| Formulare nur als `mailto:` / externer Dienst | Session, Auth, serverseitige Bilder-Pipeline |

Neue Website dieses Typs: dieses Dokument kopieren, Tabelle „Instanz“ anpassen, Workflow-URL setzen. Nicht den Commerce-Weg übernehmen.

---

## Ablauf

```
main (Quellcode)
    → GitHub Actions (pnpm build)
    → Branch `deploy` (Inhalt von out/)
    → Plesk Git: Branch `deploy` pullen
    → Document Root = HTML/CSS/JS/Bilder
```

| Rolle | Ort |
|--------|-----|
| Quelle | GitHub, Branch **`main`** |
| Artefakt | GitHub, Branch **`deploy`** (nur Build, orphan) |
| Live-Dateien | Plesk Document Root, **ohne** `.git` |
| TLS / Domain | Plesk |
| Build | GitHub Actions, nicht xs8001 |

Plesk kopiert den Branch `deploy` ins Document Root. In `httpdocs` / Subdomain-Root gibt es kein Git. **Kein** `git pull` auf dem Server.

---

## Repo-Vertrag

Jedes Website-Repo erfüllt:

1. Next.js mit `output: "export"` und `trailingSlash: true`
2. `images.unoptimized: true` (kein `next start` für Bildoptimierung)
3. Build schreibt nach `out/`
4. `out/` steht in `.gitignore`
5. Workflow `.github/workflows/deploy-static.yml`:
   - Trigger: Push auf `main` und `workflow_dispatch`
   - `pnpm install --frozen-lockfile` + `pnpm build`
   - `NEXT_PUBLIC_SITE_URL` zur **Build-Zeit**
   - Publish von `./out` auf Branch **`deploy`** (`force_orphan: true`)
6. Kein `server.js`, kein `plesk-deploy.sh`, kein Passenger/Plesk-Node
7. `public/.htaccess` mit `DirectoryIndex` und 404 (Apache hinter Plesk)

Lokal:

```bash
pnpm install
pnpm typecheck
pnpm build
pnpm preview
```

`pnpm dev` nur zur Entwicklung. Produktion ist immer `out/`.

---

## Alltags-Deploy

1. Lokal prüfen (`pnpm typecheck`, bei Bedarf `pnpm build`)
2. Nach `main` pushen
3. Actions: Job **Deploy static** muss grün sein
4. Plesk → Domain → Git → Branch **`deploy`** → **Jetzt pullen**
5. Im Browser die Domain prüfen, inkl. Unterseiten (`/agb/`, Impressum, Datenschutz)

Zusätzliche Bereitstellungsaktionen in Plesk bleiben **leer**.

---

## Erstes Mal (neue Domain)

1. Leeres GitHub-Repo, `main` pushen, warten bis `deploy` existiert
2. Plesk Git verbinden: SSH-URL, Deploy-Key, Branch **`deploy`**, Ziel = Document Root der (Sub-)Domain
3. Kein zweites Repo anlegen, wenn der Clone-Pfad schon existiert — vorhandenen Git-Eintrag nutzen
4. **Jetzt pullen**
5. Document Root muss `index.html` enthalten, nicht `package.json`

Name in Plesk ohne extra `.git` (Beispiel: `reman-website`). Ziel ist die Demo- oder Live-Domain, nie versehentlich die andere.

---

## Umstieg von Node auf diesem Server

Nur wenn die Domain noch per `next start`, Proxy oder systemd läuft. **Zuerst** `deploy` pullen, **danach** Node/Proxy entfernen. Sonst 403 (kein `index.html`).

Platzhalter ersetzen: `DOMAIN`, `DOCROOT`, `UNIT`.

```bash
# 1) Branch `deploy` in Plesk schon gepullt? Dann:
ls /var/www/vhosts/…/DOCROOT/index.html

# 2) Node und Proxy aus
systemctl disable --now UNIT 2>/dev/null || true
pkill -f 'next start --hostname 0.0.0.0 --port' || true
rm -f /etc/systemd/system/UNIT
systemctl daemon-reload
rm -f /var/www/vhosts/system/DOMAIN/conf/vhost.conf
rm -f /var/www/vhosts/system/DOMAIN/conf/vhost_ssl.conf
plesk sbin httpdmng --reconfigure-domain DOMAIN
plesk ext nodejs --disable -domain DOMAIN 2>/dev/null || true
```

Plesk-Node.js (Passenger) nicht wieder aktivieren. `app.js` / `server.js` sind nicht Teil dieses Verfahrens.

---

## Instanz RE-MAN

| | |
|---|---|
| **Repo** | `https://github.com/Disignx/reman-website` |
| **Quelle** | `main` |
| **Artefakt** | `deploy` |
| **Demo** | https://dev.re-man.at/ |
| **Document Root** | `/var/www/vhosts/re-man.at/dev.re-man.at` |
| **Host** | xs8001 |
| **Build-URL** | `NEXT_PUBLIC_SITE_URL=https://dev.re-man.at` |
| **Alter Node-Port** | 3003 (abschalten nach Cutover) |
| **Alte Unit** | `reman-dev.service` |

Cutover-Befehle für RE-MAN:

```bash
ls /var/www/vhosts/re-man.at/dev.re-man.at/index.html

systemctl disable --now reman-dev.service 2>/dev/null || true
pkill -f 'next start --hostname 0.0.0.0 --port 3003' || true
rm -f /etc/systemd/system/reman-dev.service
systemctl daemon-reload
rm -f /var/www/vhosts/system/dev.re-man.at/conf/vhost.conf
rm -f /var/www/vhosts/system/dev.re-man.at/conf/vhost_ssl.conf
plesk sbin httpdmng --reconfigure-domain dev.re-man.at
plesk ext nodejs --disable -domain dev.re-man.at 2>/dev/null || true
```

---

## Nicht tun

- Auf xs8001 `pnpm build` / `pnpm install` für die Website
- `nohup node server.js` oder systemd als Dauerbetrieb
- Plesk-Node.js / Passenger für Next
- Plesk-eigenes npm-Install
- `git pull` im Document Root
- Docker nur deshalb, weil Commerce Docker nutzt
- `output: "export"` weglassen und wieder `next start` fahren

---

## Fehler

| Symptom | Ursache | Fix |
|---------|---------|-----|
| 403, Log `No matching DirectoryIndex` | Document Root ohne `index.html`, oder Proxy schon weg vor dem Pull | Branch `deploy` pullen |
| 500 nach „Node.js enable“ | Passenger sucht `app.js` | Node.js disable, statisch bleiben |
| Domain 200, Inhalt alt | Plesk zieht noch `main` | Branch auf `deploy` |
| Action grün, Plesk alt | Pull nicht ausgeführt | **Jetzt pullen** |
| Action rot | Build lokal: `pnpm build` | Export-Fehler im Next-Log |
| `/agb` 404 | fehlender Slash, kein `trailingSlash` | `trailingSlash: true`, `.htaccess` |
| Nach Reboot 403 | alter Node-Prozess war der einzige Lieferant | Cutover: Proxy weg, `index.html` muss liegen |

SSL-Warnung im Apache-Log (Zertifikat passt nicht zum Namen) ist getrennt vom Deploy — Zertifikat der Subdomain in Plesk ausstellen.
