<#
  setup.ps1
  Einfaches PowerShell-Skript zum Ausführen der empfohlenen Checks und Installationen.
  Hinweis: Das Skript führt `npm install` und die zusätzlichen Pakete aus - du musst es lokal in PowerShell starten.
#>

Write-Host "== AixStream Setup Helper =="

$node = Get-Command node -ErrorAction SilentlyContinue
$npm = Get-Command npm -ErrorAction SilentlyContinue

if (-not $node) {
  Write-Host "node.exe nicht gefunden. Bitte installiere Node.js (https://nodejs.org/) oder nvm-windows." -ForegroundColor Yellow
  exit 1
}

Write-Host "Node gefunden:" (node --version)
Write-Host "npm gefunden:" (npm --version)

Write-Host "Wechsle ins Projektverzeichnis..."
Set-Location -Path (Join-Path $PSScriptRoot "..")

Write-Host "Running npm install..."
npm install

if ($LASTEXITCODE -ne 0) {
  Write-Host "npm install ist fehlgeschlagen. Kopiere die Fehlermeldung und poste sie hier." -ForegroundColor Red
  exit $LASTEXITCODE
}

Write-Host "Installiere @farcaster/miniapp-sdk und viem..."
npm install @farcaster/miniapp-sdk viem

if ($LASTEXITCODE -ne 0) {
  Write-Host "Installation der Pakete ist fehlgeschlagen. Kopiere die Fehlermeldung und poste sie hier." -ForegroundColor Red
  exit $LASTEXITCODE
}

Write-Host "Fertig. Starte den Dev-Server mit: npm run dev" -ForegroundColor Green
