'use client'

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PortfolioSec from "@/components/PortfolioSec/PortfolioSec";
import client from "@/sanity/sanity.client";
import { getBacImages, getMenus, getSkillCards } from "@/sanity/sanity.query";
import type { BacImages, Menu, SkillCard } from "@/types/Type";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [bacImages, setBacImages] = useState<BacImages[]>([]);
  const [menus, setMenus] = useState<Menu[]>([]);
  const [skillCards, setSkillCards] = useState<SkillCard[]>([]);

  useEffect(() => {
    (async () => {
      const bacImages = await getBacImages();
      const menus = await getMenus();
      const skillCards = await getSkillCards();
      setBacImages(bacImages);
      setMenus(menus);
      setSkillCards(skillCards);
    })();
  }, []);
  const img = useNextSanityImage(client, bacImages[0]?.images[0]);
  return (
    <>
      <Image
        src={img?.src}
        alt="img"
        width={300}
        height={300}
        loading="lazy"
      />
      <Header />
      <PortfolioSec />
      <Footer />
    </>
  );
}

