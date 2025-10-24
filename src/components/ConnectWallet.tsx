/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import { createWalletClient, custom } from "viem";
import { base } from "viem/chains";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

type WalletClient = ReturnType<typeof createWalletClient> | null;

const ConnectWallet: React.FC = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [walletClient, setWalletClient] = useState<WalletClient>(null);
  const [loading, setLoading] = useState(false);

  async function connectWallet() {
    setLoading(true);
    try {
      // 1) Get the user address from Farcaster Mini App context
  const addr = await (sdk as any).wallet.getAddress();
      if (addr) {
        setAddress(addr);
      }

      // 2) Create a Viem wallet client using Farcaster's provider
      // We cast to `any` because the miniapp sdk provider shape isn't the same as window.ethereum
  const provider = await (sdk as any).wallet.getProvider();
      const client = createWalletClient({
        chain: base,
        transport: custom(provider as any),
      } as any);
      setWalletClient(client as any);

      // 3) Mark the app ready to show content
      await sdk.actions.ready();
    } catch (error) {
      console.error("Wallet connection failed:", error);
    } finally {
      setLoading(false);
    }
  }

  // Try to auto-connect when possible (e.g., opened inside Warpcast)
  useEffect(() => {
    (async () => {
      try {
  const addr = await (sdk as any).wallet.getAddress();
        if (addr) {
          // If we already have an address, initialize client but avoid double-calling ready
          setAddress(addr);
          const provider = await (sdk as any).wallet.getProvider();
          const client = createWalletClient({ chain: base, transport: custom(provider as any) } as any);
          setWalletClient(client as any);
        }
      } catch (err) {
        // Not fatal — user may connect manually
      }
    })();
  }, []);

  if (address) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-green-600">Connected ✅</span>
        <span className="font-mono text-xs text-muted-foreground">{address}</span>
      </div>
    );
  }

  return (
    <Button onClick={connectWallet} className="gap-2" disabled={loading} aria-label="Connect Wallet">
      <Wallet className="h-4 w-4" />
      {loading ? "Connecting..." : "Connect Wallet"}
    </Button>
  );
};

export default ConnectWallet;
