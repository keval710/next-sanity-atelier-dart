"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../../sanity.config";
import { useContext, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { UserContext } from "@/context/UserContext";
import { isAuthenticated } from "@/app/lib/Auth";

export default function Studio() {
    const router = useRouter();
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await isAuthenticated();
                if (!res) {
                    router.push('/login');
                } else if (res.role !== 'admin') {
                    router.push('/');
                }
            } catch (error) {
                console.error('Error checking authentication:', error);
            }
        };
        checkAuth();
    }, [router]);

    return <NextStudio config={config} />;
}
