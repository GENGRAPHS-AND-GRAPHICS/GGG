"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { Loader2, Shield } from "lucide-react";
import Link from "next/link";
import { AssetFormPage } from "../../components/AssetFormPage";

export default function NewAssetPage() {
    const { data: sessionData, isPending } = authClient.useSession();

    if (isPending) {
        return (
            <div className="min-h-screen bg-transparent flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                    <Loader2 className="w-6 h-6 text-amber-500 animate-spin" />
                    <p className="text-xs text-muted-foreground">Loading workspace...</p>
                </div>
            </div>
        );
    }

    if (!sessionData?.user?.isAdmin) {
        return (
            <div className="min-h-screen bg-transparent flex flex-col items-center justify-center text-foreground p-4">
                <div className="text-center max-w-sm w-full bg-red-500/5 backdrop-blur-md p-6 rounded-2xl border border-red-500/15">
                    <Shield className="w-10 h-10 text-red-500 mx-auto mb-4" />
                    <h1 className="text-sm font-bold mb-1">Access Denied</h1>
                    <p className="text-xs text-muted-foreground mb-4">You do not have administrative privileges to access this creation workspace.</p>
                    <Link href="/" className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-muted hover:bg-accent hover:text-accent-foreground text-xs transition-all w-full border border-border">Return Home</Link>
                </div>
            </div>
        );
    }

    return <AssetFormPage editingPost={null} />;
}
