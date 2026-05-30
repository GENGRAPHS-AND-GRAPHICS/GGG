"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { Loader2, Shield } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getPostByIdAction } from "@/app/admin/actions";
import { AssetFormPage } from "../../../components/AssetFormPage";

export default function EditAssetPage() {
    const { data: sessionData, isPending } = authClient.useSession();
    const params = useParams();
    const postId = typeof params.id === 'string' ? params.id : '';

    // Query full post configuration including private file URL
    const { data: post, isLoading: isFetchingPost } = useQuery({
        queryKey: ['adminPost', postId],
        queryFn: () => getPostByIdAction(postId),
        enabled: !!sessionData?.user?.isAdmin && !!postId,
    });

    if (isPending || isFetchingPost) {
        return (
            <div className="min-h-screen bg-transparent flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                    <Loader2 className="w-6 h-6 text-amber-500 animate-spin" />
                    <p className="text-xs text-muted-foreground font-mono">LOADING CONFIGURATION WORKSPACE...</p>
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
                    <p className="text-xs text-muted-foreground mb-4">You do not have administrative privileges to access this editing workspace.</p>
                    <Link href="/" className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-muted hover:bg-accent hover:text-accent-foreground text-xs transition-all w-full border border-border">Return Home</Link>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-transparent flex flex-col items-center justify-center text-foreground p-4">
                <div className="text-center max-w-sm w-full bg-neutral-900/40 backdrop-blur-md p-6 rounded-2xl border border-[#3E291F]">
                    <h1 className="text-sm font-bold mb-1">Asset Not Found</h1>
                    <p className="text-xs text-muted-foreground mb-4">The specified blueprint framework could not be located in the database catalog.</p>
                    <Link href="/admin" className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs hover:bg-amber-500/20 transition-all w-full">Return to Dashboard</Link>
                </div>
            </div>
        );
    }

    return <AssetFormPage editingPost={post} />;
}
