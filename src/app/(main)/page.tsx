'use client'

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PortfolioSec from "@/components/PortfolioSec/PortfolioSec";
import client from "@/sanity/sanity.client";
import { getBacImages, getMenus, getSkillCards } from "@/sanity/sanity.query";
import { urlFor } from "@/sanity/sanityImageUrl";
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
      setMenus(menus[0]);
      setSkillCards(skillCards);
    })();
  }, []);
  return (
    <>
      {/* <div className="flex justify-center">
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
      <div className="flex flex-row flex-wrap justify-center items-center">
        {bacImages && bacImages.map((img: any) => (
          <div key={img._key} className="m-2" style={{ width: '400px', height: '300px' }}>
            <Image
              src={urlFor(img.asset).url()}
              alt={img.altText || 'Sanity Image'}
              width={400}
              height={400}
              className="rounded-lg"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        ))}
      </div> */}
      <main className="main_section">
        <Header menus={menus} />
        <PortfolioSec />
        <Footer />
      </main>
    </>
  );
}

