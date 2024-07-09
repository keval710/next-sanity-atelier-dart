'use client'

import { useContext, useState } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PortfolioSec from "@/components/PortfolioSec/PortfolioSec";
import { SanityContext } from "@/context/SanityContext";

export default function Home() {
  const { menus, currentImageUrl } = useContext(SanityContext);
  const [filterKey, setFilterKey] = useState("*");
  const scrollToSection = (id: string) => {
    let rootElement = document.documentElement;
    id === 'home' ? rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    }) : rootElement.scrollTo({
      top: 800,
      behavior: "smooth"
    })
  };
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000000 ease-in-out"
        style={{ backgroundImage: `url(${currentImageUrl})` }}
      ></div>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div id="home">
        <Header menus={menus || []} setFilterKey={setFilterKey || '*'} scrollToSection={scrollToSection}/>
        <PortfolioSec filterKey={filterKey || ''} />
        <Footer />
      </div>
    </>
  );
}