'use client'

import React, { useContext } from 'react'
import Contact from '../Contact/Contact'
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { SanityContext } from '@/context/SanityContext';
import { urlFor } from '@/sanity/sanityImageUrl';

const PortfolioSec = ({ filterKey }: { filterKey: string }) => {
    const { skillCards, images } = useContext(SanityContext);
    const cards = skillCards && skillCards[0]?.skillCard;
    const onImageClick = (images: any) => {
        NativeFancybox.show([images]);
    };
    return (
        <>
            <div className="mt-[350px] pt-11 relative z-50">
                <div className="container">
                    <div className="row">
                        <div className="span12"></div>
                    </div>
                    <div className="row">
                        <div className="span3"></div>
                        <div className="span9">
                            <div className="row">
                                <section id="projects" className="isotope grids">
                                    {cards?.length && <ul>
                                        <li className="mob-card-flex item- span3 design"></li>
                                        {(filterKey === '*' || filterKey === '#graphic&webDesign' || filterKey === '#home') && <div id='graphic&webDesign'>
                                            <li
                                                dir="rtl"
                                                className="mob-card-flex flex item- span6 design isotope-item grid-items category-a satz-transform"
                                            >
                                                <div
                                                    onClick={() => onImageClick(images[0])}
                                                    className="mb-16 group2 mob-h-auto mob-w-auto relative w-[570px] h-[400px] web-left-satz-box"
                                                >
                                                    <div className=" w-[95vw] h-[300px] md:w-[570px] md:[400px]">
                                                        <div
                                                            className="absolute inset-0 bg-cover bg-center"
                                                            style={{
                                                                backgroundImage: `url(${urlFor(cards[0].digitalContent.asset).url()})`,
                                                            }}
                                                        >
                                                            <div className="absolute inset-0 bg-black opacity-30"></div>
                                                            <div className="absolute inset-0 flex flex-col justify-center items-center">
                                                                <h3
                                                                    className="text-2xl font-bold uppercase text-centerr"
                                                                    style={{ color: cards[0]?.textColor?.hex }}
                                                                >
                                                                    {cards[0].text}
                                                                </h3>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="hover-overlay2 absolute inset-0 w-[572px] h-[400px] bg-red-800 opacity-0 transition-opacity duration-300 m-0 -mr-8 ">
                                                        <div className="text-white text-2xl leading-none flex justify-center items-center h-full">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="#fff"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={5.2}
                                                                stroke="currentColor"
                                                                className="size-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <div
                                                dir="rtl"
                                                className="flex mob-d-block me-0 web-websites-img space-bottom"
                                            >
                                                <li
                                                    dir="rtl"
                                                    className="mob-card-flex item- span4 design ms-5 isotope-item mob-mr-0  grid-items category-a logo-desin-transform"
                                                >
                                                    <div
                                                        onClick={() => onImageClick(images[1])}
                                                        className="mb-16 group mob-h-auto mob-w-auto relative w-[370px] h-[260px] bottom-40px"
                                                    >
                                                        <div className="relative w-[95vw] h-[300px] md:w-[370px] md:h-[260px]">
                                                            <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{
                                                                    backgroundImage: `url(${urlFor(cards[1].digitalContent.asset).url()})`,
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                                                <div className="absolute inset-0 flex flex-col justify-center items-center">
                                                                    <h3
                                                                        className="text-2xl font-bold uppercase text-centerr"
                                                                        style={{ color: cards[1]?.textColor?.hex }}
                                                                    > {cards[1].text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                            <div className="text-white text-2xl leading-none">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="#fff"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={5.2}
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mob-card-flex item- span5 design isotope-item  grid-items category-a website-transform">
                                                    <div
                                                        onClick={() => onImageClick(images[2])}
                                                        className="mb-16 group2  mob-h-auto mob-w-auto relative w-[470px] h-[330px] bottom-40px"
                                                    >
                                                        <div className="relative md:mr-5 w-[95vw] h-[300px] md:w-[470px] md:h-[330px]">
                                                            <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{
                                                                    backgroundImage: `url(${urlFor(cards[2].digitalContent.asset).url()})`,
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                                                <div className="absolute inset-0 flex flex-col justify-center items-center">
                                                                    <h3
                                                                        className="text-2xl font-bold uppercase text-centerr"
                                                                        style={{ color: cards[2]?.textColor?.hex }}
                                                                    >{cards[2].text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay2 absolute inset-0 w-[451px] h-[330px] bg-red-800 opacity-0 transition-opacity duration-300 m-0 -mr-3">
                                                            <div className="text-white text-2xl leading-none">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="#fff"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={5.2}
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                            <li
                                                dir="rtl"
                                                className=" web-ms-0 mob-card-flex item-span4 design flex justify-center ms-0 grid-items category-a corporate-transform lg:ml-[518px] "
                                            >
                                                <div
                                                    onClick={() => onImageClick(images[3])}
                                                    className="mb-16 group mob-h-auto mob-w-auto relative w-[370px] h-[260px] web-left-corporate-box"
                                                >
                                                    <div className="relative w-[95vw] h-[300px] md:w-[370px] md:h-[260px]">
                                                        <div
                                                            className="absolute inset-0 bg-cover bg-center"
                                                            style={{
                                                                backgroundImage: `url(${urlFor(cards[3].digitalContent.asset).url()})`,
                                                            }}
                                                        >
                                                            <div className="absolute inset-0 bg-black opacity-30"></div>
                                                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                                                                <h3
                                                                    className="text-2xl font-bold uppercase text-centerr"
                                                                    style={{ color: cards[3]?.textColor?.hex }}
                                                                >{cards[3].text}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                        <div className="text-white text-2xl leading-none">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="#fff"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={5.2}
                                                                stroke="currentColor"
                                                                className="size-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>}
                                        {(filterKey === '*' || filterKey === '#advertising technology' || filterKey === '#home') && <div className={`web-cards-right ${filterKey === '#advertising technology' ? 'md:-mb-80' : ''}`} id='advertising technology' >
                                            <li className="mob-card-flex item- span3 technik isotope-item"></li>
                                            <li
                                                dir="rtl"
                                                className="mob-card-flex item- span6 technik flex justify-center ms-0 isotope-item  grid-items category-b lg:ml-[716px]"
                                            >
                                                <div
                                                    onClick={() => onImageClick(images[4])}
                                                    className="mb-16 group mob-h-auto mob-w-auto relative w-[570px] h-[400px] web-left-kfz-box"
                                                >
                                                    <div className="relative w-[95vw] h-[300px] md:w-[570px] md:h-[400px]">
                                                        <div
                                                            className="absolute inset-0 bg-cover bg-center"
                                                            style={{
                                                                backgroundImage: `url(${urlFor(cards[4].digitalContent.asset).url()})`,
                                                            }}
                                                        >
                                                            <div className="absolute inset-0 bg-black opacity-30"></div>
                                                            <div className={`absolute inset-0 flex flex-col justify-center items-center text-[${cards[4]?.textColor?.hex}]`}>
                                                                <h3
                                                                    className="text-2xl font-bold uppercase text-centerr"
                                                                    style={{ color: cards[4]?.textColor?.hex }}
                                                                >{cards[4].text}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                        <div className="text-white text-2xl leading-none">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="#fff"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={5.2}
                                                                stroke="currentColor"
                                                                className="size-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div dir="rtl" className="flex mob-d-block me-0 lg:mr-[100px] web-big-relative bottom-160px">
                                                <li className="mob-ms-0 mob-card-flex item- span3 technik me-5 isotope-item  grid-items category-b">
                                                    <div
                                                        onClick={() => onImageClick(images[5])}
                                                        className="mb-16 group  mob-h-auto mob-w-auto relative w-[270px] h-[189px]"
                                                    >
                                                        <div className="relative w-[95vw] h-[300px] md:w-[270px] md:h-[189px]">
                                                            <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{
                                                                    backgroundImage: `url(${urlFor(cards[5].digitalContent.asset).url()})`,
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                                                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                                                                    <h3
                                                                        className="text-2xl font-bold uppercase text-centerr"
                                                                        style={{ color: cards[5]?.textColor?.hex }}
                                                                    >{cards[5].text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                            <div className="text-white text-2xl leading-none">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="#fff"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={5.2}
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mob-card-flex item- span5 technik isotope-item  grid-items category-b">
                                                    <div
                                                        onClick={() => onImageClick(images[6])}
                                                        className="mb-16 group mob-h-auto mob-w-auto relative w-[470px] h-[330px]"
                                                    >
                                                        <div className="relative w-[95vw] h-[300px] md:w-[470px] md:h-[330px]">
                                                            <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{
                                                                    backgroundImage: `url(${urlFor(cards[6].digitalContent.asset).url()})`,
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                                                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                                                                    <h3
                                                                        className="text-2xl font-bold uppercase text-centerr"
                                                                        style={{ color: cards[6]?.textColor?.hex }}
                                                                    >{cards[6].text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                            <div className="text-white text-2xl leading-none">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="#fff"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={5.2}
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                            <div
                                                dir="rtl"
                                                className="flex mob-d-block me-0 web-big-relative bottom-200px"
                                            >
                                                <li className="mob-ms-0 mob-card-flex item- span6 technik me-5 isotope-item  grid-items category-b">
                                                    <div
                                                        onClick={() => onImageClick(images[7])}
                                                        className="mb-16 group  mob-h-auto mob-w-auto relative w-[570px] h-[400px] space-bottom"
                                                    >
                                                        <div className="relative w-[95vw] h-[300px] md:w-[570px] md:h-[400px]">
                                                            <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{
                                                                    backgroundImage: `url(${urlFor(cards[7].digitalContent.asset).url()})`,
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                                                <div className="absolute inset-20 md:inset-0 flex flex-col justify-center items-center">
                                                                    <h3
                                                                        className="text-2xl font-bold uppercase text-center"
                                                                        style={{ color: cards[7]?.textColor?.hex }}
                                                                    >{cards[7].text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                            <div className="text-white text-2xl leading-none">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="#fff"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={5.2}
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mob-card-flex item- span3 technik isotope-item  grid-items category-b">
                                                    <div
                                                        onClick={() => onImageClick(images[8])}
                                                        className="mb-16 group  mob-h-auto mob-w-auto relative w-[270px] h-[189px] space-bottom"
                                                    >
                                                        <div className="relative w-[95vw] h-[300px] md:w-[270px] md:h-[189px]">
                                                            <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{
                                                                    backgroundImage: `url(${urlFor(cards[8].digitalContent.asset).url()})`,
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                                                <div className='absolute inset-12 flex flex-col justify-center items-center '>
                                                                    <h3
                                                                        className="text-2xl font-bold uppercase text-center"
                                                                        style={{ color: cards[8]?.textColor?.hex }}
                                                                    >{cards[8].text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                            <div className="text-white text-2xl leading-none">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="#fff"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={5.2}
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                            <div
                                                dir="rtl"
                                                className="flex mob-d-block me-0 lg:mr-[100px] web-big-relative bottom-240px "
                                            >
                                                <li className="mob-ms-0 mob-card-flex item- span4 technik me-5 isotope-item  grid-items category-b">
                                                    <div
                                                        onClick={() => onImageClick(images[9])}
                                                        className="mb-16 group  mob-h-auto mob-w-auto relative w-[370px] h-[260px] space-bottom-two"
                                                    >
                                                        <div className="relative w-[95vw] h-[300px] md:w-[370px] md:h-[260px]">
                                                            <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{
                                                                    backgroundImage: `url(${urlFor(cards[9].digitalContent.asset).url()})`,
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                                                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                                                                    <h3
                                                                        className="text-2xl font-bold uppercase text-center"
                                                                        style={{ color: cards[9]?.textColor?.hex }}
                                                                    >{cards[9].text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                            <div className="text-white text-2xl leading-none">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="#fff"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={5.2}
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mob-card-flex item- span4 technik isotope-item grid-items category-b">
                                                    <a
                                                        className="hover-wrap fancybox"
                                                        data-fancybox-group="gallery"
                                                        title="G L A S D E K O R"
                                                        href="/images/img/work/full/image-glasdekor-full.jpg"
                                                    >
                                                        <span className="overlay-img"></span>
                                                        <span className="overlay-img-thumb font-icon-plus"></span>
                                                    </a>

                                                    <div
                                                        onClick={() => onImageClick(images[10])}
                                                        className="mb-16 group  mob-h-auto mob-w-auto relative w-[370px] h-[260px] space-bottom-two"
                                                    >
                                                        <div className="relative w-[95vw] h-[300px] md:w-[370px] md:h-[260px]">
                                                            <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{
                                                                    backgroundImage: `url(${urlFor(cards[10].digitalContent.asset).url()})`,
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                                                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                                                                    <h3
                                                                        className="text-2xl font-bold uppercase text-center"
                                                                        style={{ color: cards[10]?.textColor?.hex }}
                                                                    >{cards[10].text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                            <div className="text-white text-2xl leading-none">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="#fff"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={5.2}
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                            <li
                                                dir="rtl"
                                                className="mob-card-flex item- span7 technik flex justify-center ms-0  grid-items category-b lg:ml-[223px]"
                                            >

                                                <div
                                                    onClick={() => onImageClick(images[11])}
                                                    className="mb-16 group  mob-h-auto mob-w-auto relative w-[670px] h-[470px] web-bau-img"
                                                >
                                                    <div className="relative w-[95vw] h-[300px] md:w-[670px] md:h-[470px]">
                                                        <div
                                                            className="absolute inset-0 bg-cover bg-center"
                                                            style={{
                                                                backgroundImage: `url(${urlFor(cards[11].digitalContent.asset).url()})`,
                                                            }}
                                                        >
                                                            <div className="absolute inset-0 bg-black opacity-30"></div>
                                                            <div className='absolute inset-0 flex flex-col justify-center items-center'>
                                                                <h3
                                                                    className="text-2xl font-bold uppercase text-center"
                                                                    style={{ color: cards[8]?.textColor?.hex }}
                                                                >{cards[11].text}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                        <div className="text-white text-2xl leading-none">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="#fff"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={5.2}
                                                                stroke="currentColor"
                                                                className="size-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div
                                                dir="rtl"
                                                className="flex mob-d-block me-0 web-big-relative bottom-320px"
                                            >
                                                <li className="mob-ms-0 mob-card-flex item- span5 technik me-5 isotope-item  grid-items category-b">
                                                    <div
                                                        onClick={() => onImageClick(images[12])}
                                                        className="mb-16 group  mob-h-auto mob-w-auto relative w-[470px] h-[330px] mehr-space"
                                                    >
                                                        <div className="relative w-[95vw] h-[300px] md:w-[470px] md:h-[330px]">
                                                            <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{
                                                                    backgroundImage: `url(${urlFor(cards[12].digitalContent.asset).url()})`,
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                                                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                                                                    <h3
                                                                        className="text-2xl font-bold uppercase text-center"
                                                                        style={{ color: cards[12]?.textColor?.hex }}
                                                                    >{cards[12].text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                            <div className="text-white text-2xl leading-none">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="#fff"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={5.2}
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mob-card-flex item- span4 technik isotope-item grid-items category-b">
                                                    <div
                                                        onClick={() => onImageClick(images[13])}
                                                        className="mb-16 group  mob-h-auto mob-w-auto relative w-[370px] h-[260px] mehr-space"
                                                    >
                                                        <div className="relative w-[95vw] h-[300px] md:w-[370px] md:h-[260px]">
                                                            <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{
                                                                    backgroundImage: `url(${urlFor(cards[13].digitalContent.asset).url()})`,
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                                                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                                                                    <h3
                                                                        className="text-2xl font-bold uppercase text-center"
                                                                        style={{ color: cards[13]?.textColor?.hex }}
                                                                    >{cards[13].text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                            <div className="text-white text-2xl leading-none">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="#fff"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={5.2}
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                            <li className="web-werbean-margin mob-card-flex item- span6 technik flex justify-center ms-0 isotope-item  grid-items category-b lg:ml-[120px]">
                                                <div
                                                    onClick={() => onImageClick(images[14])}
                                                    className="mb-16 group  mob-h-auto mob-w-auto relative w-[570px] h-[400px] web-big-relative werbean-space"
                                                >
                                                    <div className="relative w-[95vw] h-[300px] md:w-[570px] md:h-[400px]">
                                                        <div
                                                            className="absolute inset-0 bg-cover bg-center"
                                                            style={{
                                                                backgroundImage: `url(${urlFor(cards[14].digitalContent.asset).url()})`,
                                                            }}
                                                        >
                                                            <div className="absolute inset-0 bg-black opacity-30"></div>
                                                            <div className='absolute inset-0 flex flex-col justify-center items-center'>
                                                                <h3
                                                                    className="text-2xl font-bold uppercase text-center"
                                                                    style={{ color: cards[14]?.textColor?.hex }}
                                                                >{cards[14].text}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                        <div className="text-white text-2xl leading-none">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="#fff"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={5.2}
                                                                stroke="currentColor"
                                                                className="size-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div
                                                dir="rtl"
                                                className="flex mob-d-block me-0 lg:mr-[206px] web-cards-right web-mr-70px "
                                            >
                                                <li className="mob-ms-0 mob-card-flex item- span3 technik me-5 isotope-item  grid-items category-b">
                                                    <div
                                                        onClick={() => onImageClick(images[15])}
                                                        className="mb-16 group  mob-h-auto mob-w-auto relative w-[270px] h-[189px] web-big-relative werb-space"
                                                    >
                                                        <div className="relative w-[95vw] h-[300px] md:w-[270px] md:h-[189px]">
                                                            <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{
                                                                    backgroundImage: `url(${urlFor(cards[15].digitalContent.asset).url()})`,
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                                                <div className='absolute inset-3 md:inset-12 flex flex-col justify-center items-center'>
                                                                    <h3
                                                                        className="text-2xl font-bold uppercase text-center"
                                                                        style={{ color: cards[15]?.textColor?.hex }}
                                                                    >{cards[15].text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                            <div className="text-white text-2xl leading-none">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="#fff"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={5.2}
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mob-card-flex item- span4 technik isotope-item grid-items category-b">
                                                    <div
                                                        onClick={() => onImageClick(images[16])}
                                                        className="mb-16 group  mob-h-auto mob-w-auto relative w-[370px] h-[260px] web-big-relative werb-space"
                                                    >
                                                        <div className="relative w-[95vw] h-[300px] md:w-[370px] md:h-[260px]">
                                                            <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{
                                                                    backgroundImage: `url(${urlFor(cards[16].digitalContent.asset).url()})`,
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                                                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                                                                    <h3
                                                                        className="text-2xl font-bold uppercase text-center"
                                                                        style={{ color: cards[16]?.textColor?.hex }}
                                                                    >{cards[16].text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                            <div className="text-white text-2xl leading-none">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="#fff"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={5.2}
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                        </div>}
                                        {(filterKey === '*' || filterKey === '#print media' || filterKey === '#home') && <div id='print media' className={`${filterKey === '#print media' ? 'md:mt-80 md:-mb-80' : ''}`}>
                                            <li className="mob-card-flex item- span3 print"></li>
                                            <li className="web-cards-right mob-card-flex item- span6 print flex justify-end ms-0 isotope-item  grid-items category-c">
                                                <div
                                                    onClick={() => onImageClick(images[17])}
                                                    className="mb-16 group  mob-h-auto mob-w-auto relative w-[570px] h-[400px] gescha-space"
                                                >
                                                    <div className="relative w-[95vw] h-[300px] md:w-[570px] md:h-[400px]">
                                                        <div
                                                            className="absolute inset-0 bg-cover bg-center"
                                                            style={{
                                                                backgroundImage: `url(${urlFor(cards[17].digitalContent.asset).url()})`,
                                                            }}
                                                        >
                                                            <div className="absolute inset-0 bg-black opacity-30"></div>
                                                            <div className='absolute inset-0 flex flex-col justify-center items-center '>
                                                                <h3
                                                                    className="text-2xl font-bold uppercase text-center"
                                                                    style={{ color: cards[17]?.textColor?.hex }}
                                                                >{cards[17].text}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                        <div className="text-white text-2xl leading-none">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="#fff"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={5.2}
                                                                stroke="currentColor"
                                                                className="size-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div
                                                dir="rtl"
                                                className="flex mob-d-block me-0 web-cards-right"
                                            >
                                                <li className="mob-ms-0 mob-card-flex item- span4 print me-5 isotope-item grid-items category-c">
                                                    <div
                                                        onClick={() => onImageClick(images[18])}
                                                        className="mb-16 group  mob-h-auto mob-w-auto relative w-[370px] h-[260px] web-big-relative visiten-space"
                                                    >
                                                        <div className="relative w-[95vw] h-[300px] md:w-[370px] md:h-[260px]">
                                                            <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{
                                                                    backgroundImage: `url(${urlFor(cards[18].digitalContent.asset).url()})`,
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                                                <div className='absolute inset-28 md:inset-20 flex flex-col justify-center items-center'>
                                                                    <h3
                                                                        className="text-2xl font-bold uppercase text-center"
                                                                        style={{ color: cards[18]?.textColor?.hex }}
                                                                    >{cards[18].text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                            <div className="text-white text-2xl leading-none">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="#fff"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={5.2}
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mob-card-flex item- span5 print isotope-item grid-items category-c ">
                                                    <div
                                                        onClick={() => onImageClick(images[19])}
                                                        className="mb-16 group  mob-h-auto mob-w-auto relative w-[470px] h-[330px] web-big-relative visiten-space"
                                                    >
                                                        <div className="relative w-[95vw] h-[300px] md:w-[470px] md:h-[330px]">
                                                            <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{
                                                                    backgroundImage: `url(${urlFor(cards[19].digitalContent.asset).url()})`,
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-black opacity-30"></div>
                                                                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                                                                    <h3
                                                                        className="text-2xl font-bold uppercase text-center"
                                                                        style={{ color: cards[19]?.textColor?.hex }}
                                                                    >{cards[19].text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                            <div className="text-white text-2xl leading-none">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="#fff"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={5.2}
                                                                    stroke="currentColor"
                                                                    className="size-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                            <li className="mob-card-flex item- span4 print flex justify-center ms-0 isotope-item grid-items category-c lg:mr-[70px]">
                                                <div
                                                    onClick={() => onImageClick(images[20])}
                                                    className="mb-0 group  mob-h-auto mob-w-auto relative w-[370px] h-[260px] web-big-relative seib-space"
                                                >
                                                    <div className="relative w-[95vw] h-[300px] md:w-[370px] md:h-[260px]">
                                                        <div
                                                            className="absolute inset-0 bg-cover bg-center"
                                                            style={{
                                                                backgroundImage: `url(${urlFor(cards[20].digitalContent.asset).url()})`,
                                                            }}
                                                        >
                                                            <div className="absolute inset-0 bg-black opacity-30"></div>
                                                            <div className='absolute inset-0 flex flex-col justify-center items-center'>
                                                                <h3
                                                                    className="text-2xl font-bold uppercase text-center"
                                                                    style={{ color: cards[20]?.textColor?.hex }}
                                                                >{cards[20].text}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hover-overlay absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300">
                                                        <div className="text-white text-2xl leading-none">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="#fff"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={5.2}
                                                                stroke="currentColor"
                                                                className="size-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>}
                                        {(filterKey === '*' || filterKey === '#contact' || filterKey === '#home') && <div id='contact' className='mt-14' >
                                            <Contact />
                                        </div>
                                        }
                                    </ul>}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioSec