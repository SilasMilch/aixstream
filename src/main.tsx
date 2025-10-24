import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { sdk } from '@farcaster/miniapp-sdk'

// Ensure Farcaster SDK is ready before rendering the app to avoid an
// infinite splash screen when the app is opened inside Warpcast/Mini App view.
window.addEventListener('load', async () => {
	try {
		// Wait for the Farcaster Mini App host to be ready (if present).
		await sdk.actions.ready()
	} catch (err) {
		// If the SDK isn't available (running standalone in browser), proceed anyway.
		 
		console.warn('Farcaster miniapp sdk not available or ready failed:', err)
	}

	createRoot(document.getElementById("root")!).render(<App />);
})
