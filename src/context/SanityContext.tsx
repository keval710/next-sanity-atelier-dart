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
    images: {
        src: string,
        thumb: string,
        caption: string
    }[]
}

export const SanityContext = createContext<Context>({
    bacImages: [],
    menus: [],
    skillCards: [],
    currentImageUrl: '',
    images: []
});

export const SanityProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [bacImages, setBacImages] = useState<Images[]>([]);
    const [menus, setMenus] = useState<Menus[]>([]);
    const [skillCards, setSkillCards] = useState<SkillCard[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        {
            src: "/images/fancybox/image1.jpg",
            thumb: "/images/fancybox/image1.jpg",
            caption: "Image 1",
        },
        {
            src: "/images/fancybox/image2.jpg",
            thumb: "/images/fancybox/image2.jpg",
            caption: "Image 2",
        },
        {
            src: "/images/fancybox/image3.jpg",
            thumb: "/images/fancybox/image3.jpg",
            caption: "Image 3",
        },
        {
            src: "/images/fancybox/image4.jpg",
            thumb: "/images/fancybox/image4.jpg",
            caption: "Image 4",
        },
        {
            src: "/images/fancybox/image5.jpg",
            thumb: "/images/fancybox/image5.jpg",
            caption: "Image 5",
        },
        {
            src: "/images/fancybox/image6.jpg",
            thumb: "/images/fancybox/image6.jpg",
            caption: "Image 6",
        },
        {
            src: "/images/fancybox/image7.jpg",
            thumb: "/images/fancybox/image7.jpg",
            caption: "Image 7",
        },
        {
            src: "/images/fancybox/image8.jpg",
            thumb: "/images/fancybox/image8.jpg",
            caption: "Image 8",
        },
        {
            src: "/images/fancybox/image9.jpg",
            thumb: "/images/fancybox/image9.jpg",
            caption: "Image 9",
        },
        {
            src: "/images/fancybox/image10.jpg",
            thumb: "/images/fancybox/image10.jpg",
            caption: "Image 10",
        },
        {
            src: "/images/fancybox/image11.jpg",
            thumb: "/images/fancybox/image11.jpg",
            caption: "Image 11",
        },
        {
            src: "/images/fancybox/image12.jpg",
            thumb: "/images/fancybox/image12.jpg",
            caption: "Image 12",
        },
        {
            src: "/images/fancybox/image13.jpg",
            thumb: "/images/fancybox/image13.jpg",
            caption: "Image 13",
        },
        {
            src: "/images/fancybox/image14.jpg",
            thumb: "/images/fancybox/image14.jpg",
            caption: "Image 14",
        },
        {
            src: "/images/fancybox/image15.jpg",
            thumb: "/images/fancybox/image15.jpg",
            caption: "Image 15",
        },
        {
            src: "/images/fancybox/image1.jpg",
            thumb: "/images/fancybox/image1.jpg",
            caption: "Image 1",
        },
        {
            src: "/images/fancybox/image2.jpg",
            thumb: "/images/fancybox/image2.jpg",
            caption: "Image 2",
        },
        {
            src: "/images/fancybox/image3.jpg",
            thumb: "/images/fancybox/image3.jpg",
            caption: "Image 3",
        },
        {
            src: "/images/fancybox/image4.jpg",
            thumb: "/images/fancybox/image4.jpg",
            caption: "Image 4",
        },
        {
            src: "/images/fancybox/image5.jpg",
            thumb: "/images/fancybox/image5.jpg",
            caption: "Image 5",
        },
        {
            src: "/images/fancybox/image6.jpg",
            thumb: "/images/fancybox/image6.jpg",
            caption: "Image 6",
        },
    ];
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
                currentImageUrl,
                images
            }}>
            {children}
        </SanityContext.Provider>
    );
};
