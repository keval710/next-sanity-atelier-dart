'use client'

import { getBacImages, getMenus, getSkillCards } from "@/sanity/sanity.query";
import { urlFor } from "@/sanity/sanityImageUrl";
import { Images, Menus, SkillCard } from "@/types/Type";
import React, { createContext, useEffect, useState } from "react";

interface Context {
    bacImages: Images[];
    menus: Menus[];
    skillCards: SkillCard[];
    currentImageUrl: string;
}

export const SanityContext = createContext<Context>({
    bacImages: [],
    menus: [],
    skillCards: [],
    currentImageUrl: ''
});

export const SanityProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [bacImages, setBacImages] = useState<Images[]>([]);
    const [menus, setMenus] = useState<Menus[]>([]);
    const [skillCards, setSkillCards] = useState<SkillCard[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const bacImages = await getBacImages();
                const menusData = await getMenus();
                const skillCardsData = await getSkillCards();
                setBacImages(bacImages);
                if (menusData.length > 0) {
                    setMenus(menusData[0].menu);
                }
                setSkillCards(skillCardsData);
            } catch (error) {
                console.error("Error fetching data from Sanity:", error);
            }
        })();
    }, []);
    useEffect(() => {
        if (bacImages.length > 0) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bacImages.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [bacImages]);

    const currentImageUrl = bacImages[currentImageIndex] ? urlFor(bacImages[currentImageIndex].asset).url() : '';

    return (
        <SanityContext.Provider
            value={{
                bacImages,
                menus,
                skillCards,
                currentImageUrl
            }}>
            {children}
        </SanityContext.Provider>
    );
};
