# AixStream — Farcaster Mini App (Base)

Dieses Repository wurde vorbereitet, um deine App als Farcaster Mini App zu betreiben und mit Base (via viem) zu verbinden.

Wichtig: Ich kann die Befehle nicht auf deinem Windows-System ausführen. Führe die folgenden PowerShell-Befehle in deinem lokalen VS Code Terminal aus und poste die Ausgaben hier, dann helfe ich sofort beim Debugging.

## 1) Schnell-Check: Node + npm
```powershell
node --version
npm --version
```
- Erwartet: `node --version` >= `v22.11.0`.

Wenn `npm` nicht gefunden wird, folge den Anweisungen im Abschnitt "Node installieren / nvm-windows".

## 2) Projekt-Root öffnen
```powershell
cd 'C:\Users\Silas\Documents\hello-mini-base-main\hello-mini-base-main'
```

## 3) Abhängigkeiten installieren
```powershell
# alle dependencies aus package.json
npm install

# Farcaster SDK + viem
npm install @farcaster/miniapp-sdk viem
```

Wenn `npm install` fehlschlägt, kopiere die ersten ~50 Zeilen der Fehlermeldung hierher.

## 4) Dev-Server starten
```powershell
npm run dev
```
Öffne die angezeigte URL (z. B. `http://localhost:5173`) und prüfe die Browser-Konsole auf Fehler.

## 5) Build & Deploy (optional)
```powershell
npm run build
npx vercel
```

## Troubleshooting: "npm wurde nicht als ... erkannt"
- Prüfe, ob Node installiert ist und in PATH liegt.
- Empfohlene Wege:
  - Einfache Installation: lade den LTS-Installer von https://nodejs.org/ und folge dem MSI.
  - nvm-windows (empfohlen, wenn du mehrere Node-Versionen willst): https://github.com/coreybutler/nvm-windows/releases

Beispiel mit nvm-windows:
```powershell
nvm install 22.19.0
nvm use 22.19.0
node --version
npm --version
```

## Was du mir schicken solltest, wenn etwas schiefgeht
- Ausgabe von `node --version` und `npm --version`.
- Die ersten ~50 Zeilen von `npm install` Fehlern (falls vorhanden).
- Falls `npm run dev` Fehler wirft, kopiere den Terminal-Output und die Browser-Konsole-Fehler.

---
Wenn du möchtest, führe eines der folgenden aus und poste die Ausgabe hier:

1) Kurz-Check:
```powershell
node --version; npm --version
```

2) Komplettes Setup (in Projekt-Root):
```powershell
./scripts/setup.ps1
```

Ich helfe dann sofort beim Fixen. — Viel Erfolg! 🚀
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/dea4c3d6-1e91-412f-83a7-63c1873e7e75

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/dea4c3d6-1e91-412f-83a7-63c1873e7e75) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/dea4c3d6-1e91-412f-83a7-63c1873e7e75) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
