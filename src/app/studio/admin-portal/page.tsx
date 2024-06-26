"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { useEffect } from "react";
import { isAuthenticated } from "@/app/lib/Auth";
import { useRouter } from 'next/navigation';

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
    }, []);

    return <NextStudio config={config} />;
}
