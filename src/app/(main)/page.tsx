'use client'

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PortfolioSec from "@/components/PortfolioSec/PortfolioSec";
import client from "@/sanity/sanity.client";
import { getBacImages, getMenus, getSkillCards } from "@/sanity/sanity.query";
import type { BacImages, Menu, SkillCard } from "@/types/Type";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import Link from "next/link";
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
      <div className="flex justify-center">
        <Link href={'/studio/admin-portal'}>
          <button className="py-2 m-5 flex justify-center bg-slate-600 text-white px-9 rounded-xl">Admin</button>
        </Link>
        <Link href={'/login'}>
          <button className="py-2 m-5 flex justify-center bg-slate-600 text-white px-9 rounded-xl">Login</button>
        </Link>
        <Link href={'/reg'}>
          <button className="py-2 m-5 flex justify-center bg-slate-600 text-white px-9 rounded-xl">Reg</button>
        </Link>
      </div>
      <Image
        src={img?.src}
        alt="img"
        width={300}
        height={300}
      />
      <Header />
      <PortfolioSec />
      <Footer />
    </>
  );
}

