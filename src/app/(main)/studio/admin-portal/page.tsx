"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../../sanity.config";
import { useContext, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { UserContext } from "@/context/UserContext";

export default function Studio() {
    const { userData } = useContext(UserContext);
    const router = useRouter();
    useEffect(() => {
        const checkAuth = async () => {
            try {
                if (!userData?.token) {
                    router.push('/login');
                } else if (userData.role !== 'admin') {
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
