# Docker: Run & Build Anleitung (DE)

Dieses Repository ist eine Vite + React App. Die folgenden Schritte zeigen, wie du die App in einem Docker-Container mit Node 22 bauen und lokal ausführen kannst.

Voraussetzungen
- Docker Desktop installiert und läuft

Schnellbefehle

1) Image bauen

```powershell
cd 'C:\Users\Silas\Documents\hello-mini-base-main\hello-mini-base-main'
docker build -t my-miniapp .
```

2) Container starten

```powershell
docker run -it --rm -p 5173:5173 my-miniapp
```

3) Öffne im Browser

http://localhost:5173

Hinweise
- Das Dockerfile baut die App (`npm run build`) und verwendet `npm run preview` um die gebaute `dist/` zu serven. In Entwicklung willst du eventuell `npm run dev` verwenden; in diesem Fall entferne die Build-Schritte und starte Dev-Modus.
- Für Deploy auf Vercel ist `vercel.json` bereits hinzugefügt. Vercel verwendet `npm run build` und liefert `dist/` aus.

Farcaster / Base
- Die Projektänderungen enthalten bereits:
  - `src/main.tsx` mit `sdk.actions.ready()` (Farcaster Mini App SDK integration)
  - `src/lib/baseClient.ts` (viem client für Base)
- Stelle sicher, dass du `npm install @farcaster/miniapp-sdk viem` lokal ausführst, bevor du das Image baust, damit die node_modules installiert sind. Alternativ baut der Dockerfile die Abhängigkeiten selbst.
