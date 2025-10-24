# Deployment Guide — AixStream

This file describes how to publish AixStream to the web and register it as a Farcaster Mini App.

Prerequisites
- Node.js + npm
- A GitHub account (optional, recommended)
- A Vercel account (recommended) or any static hosting (Netlify, Cloudflare Pages, IPFS)

Quick (Vercel)
1. Build the app:

```powershell
npm run build
```

2. If you haven't installed Vercel CLI:

```powershell
npm install -g vercel
```

3. Deploy (runs interactive flow where you choose your Vercel scope):

```powershell
vercel --prod
```

4. Take the produced URL (e.g. `https://aixstream.vercel.app`) and update `index.html` `fc:miniapp` meta `imageUrl` and `url` to match.

Registering the Mini App on Farcaster
- Enable Developer Mode in your Warpcast account: https://farcaster.xyz/~settings/developer-tools
- Post your Vercel URL in Warpcast; Farcaster will render the Mini App embed automatically.

IPFS / Decentralized option
- Build the app (same `npm run build`).
- Upload the `dist/` folder to IPFS using Pinata, Fleek or `ipfs` CLI.
- Use the resulting `https://ipfs.io/ipfs/<CID>/index.html` (or an IPNS/custom gateway) as the `url` in the `fc:miniapp` meta tag.

Notes
- If you want me to attempt the deployment from your machine, run `.\	emplates\scripts\deploy-vercel.ps1` (PowerShell) — it will prompt for Vercel login if necessary.
- Make sure the `fc:miniapp` meta tag points at the final domain for the preview image and the launch URL.
