<#
  deploy-vercel-prod.ps1
  Non-interactive Vercel deploy helper for Windows PowerShell.

  Behavior:
  - Runs `npm run build`.
  - If environment variable VERCEL_TOKEN is set, runs `vercel --prod --confirm --token $env:VERCEL_TOKEN` (non-interactive).
  - Otherwise falls back to interactive `vercel --prod` (will prompt for login/selection).

  Usage:
  .\scripts\deploy-vercel-prod.ps1

#>

Set-StrictMode -Version Latest

Write-Host "== AixStream: Non-interactive Vercel Deploy Helper =="

$projRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projRoot

function Ensure-Command($name) {
    $cmd = Get-Command $name -ErrorAction SilentlyContinue
    if (-not $cmd) {
        Write-Host "Command '$name' not found. Please install it and ensure it's on PATH." -ForegroundColor Yellow
        return $false
    }
    return $true
}

if (-not (Ensure-Command npm)) { exit 1 }

Write-Host "Running: npm run build"
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Aborting deploy." -ForegroundColor Red
    exit $LASTEXITCODE
}

if (-not (Ensure-Command vercel)) {
    Write-Host "Install Vercel CLI: npm i -g vercel" -ForegroundColor Yellow
    exit 1
}

if ($env:VERCEL_TOKEN) {
    Write-Host "VERCEL_TOKEN found — running non-interactive deploy..."
    vercel --prod --confirm --token $env:VERCEL_TOKEN
    exit $LASTEXITCODE
} else {
    Write-Host "VERCEL_TOKEN not set — running interactive deploy (you may be prompted to login/choose scope)."
    vercel --prod
    exit $LASTEXITCODE
}
