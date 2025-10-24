<#
Simple deploy helper for PowerShell (ASCII-only to avoid parsing issues).
Usage: run this from the project root containing package.json
#>

param()

Write-Host 'Building production assets...' -ForegroundColor Cyan
npm run build

# Check if vercel CLI exists
$vercel = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercel) {
    Write-Host 'Vercel CLI not found - installing globally (may require admin)...' -ForegroundColor Yellow
    npm install -g vercel
}

Write-Host 'Starting Vercel deploy (this will prompt for login if you are not authenticated)...' -ForegroundColor Cyan
# Use --prod to publish a production deployment
vercel --prod

Write-Host 'If the deploy succeeded you will see the production URL in the output.' -ForegroundColor Green
