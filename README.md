# AixStream — Farcaster Mini App (Base)

Dieses Repository wurde vorbereitet, um die aixstream App als Farcaster Mini App zu betreiben und mit Base (via viem) zu verbinden.

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

## dokumentieren bei Problemen
- Ausgabe von `node --version` und `npm --version`.
- Die ersten ~50 Zeilen von `npm install` Fehlern (falls vorhanden).
- Falls `npm run dev` Fehler wirft, kopiere den Terminal-Output und die Browser-Konsole-Fehler.

---

1) Kurz-Check:
```powershell
node --version; npm --version
```

2) Komplettes Setup (in Projekt-Root):
```powershell
./scripts/setup.ps1
```
