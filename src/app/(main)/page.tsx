'use client'

import { useContext } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PortfolioSec from "@/components/PortfolioSec/PortfolioSec";
import { SanityContext } from "@/context/SanityContext";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  const { bacImages, menus, skillCards, currentImageUrl } = useContext(SanityContext);
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000000 ease-in-out"
        style={{ backgroundImage: `url(${currentImageUrl})` }}
      ></div>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div>
        <Header menus={menus} bacImages={bacImages} />
        <PortfolioSec />
        <Footer />
      </div>
    </>
  );
}