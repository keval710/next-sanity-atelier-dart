'use client'

import React, { useState } from 'react'
import HomeSlider from '../HomeSlider/HomeSlider';
import { Menus } from '@/types/Type';

interface Props {
    menus: {
        title: string;
        menu: Menus[]
    }[];
}

const Header: React.FC<Props> = ({ menus }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <HomeSlider />
            <header className="sticky mob-header top-8 mt-[10px] p-0 m-0 bg-transparent z-[500]">
                <div className="sticky-nav mob-relative mob-left-0 pt-38 bg-transparent z-9999 mt-10">
                    <div className="hidden z-9999" id="mobile-nav"></div>
                    <nav id="menu" className="block p-0 m-0 lg:ml-60 lg:-mt-20">
                        <div id="menu-nav" className="p-0 m-0">
                            <nav id="options" className="main-nav">
                                <div className="option-set" data-option-key="filter" id="navbar-default">
                                    <ul className="p-0 m-0">
                                        <li>
                                            {
                                                menus.menu && menus.menu.map((menu) => (
                                                    <a key={menu._key}
                                                        onClick={() => { }}
                                                        data-option-value="*"
                                                        className="selected cursor-pointer hover:text-red-500 block uppercase text-black bg-white text-lg font-bold leading-50 px-18 py-1 px-4 focus:text-red-500 w-max mob-w-100 mb-3 tracking-[4.5px]"
                                                    >
                                                        {menu.menuName}
                                                    </a>
                                                ))
                                            }
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </nav>
                    {/* Mobile menu button */}
                    <button
                        className="absolute left-0 -top-10 text-white focus:outline-none focus:text-white md:hidden"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 6H20M4 12H20M4 18H20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    {/* Mobile menu */}
                    <div className={`md:hidden ${isMobileMenuOpen ? "" : "hidden"}`}>
                        <div className="option-set" data-option-key="filter" id="navbar-default">
                            <ul className="p-0 m-0">
                                <li>
                                    {
                                        menus.menu && menus.menu.map((menu) => (
                                            <a key={menu._key}
                                                data-option-value="*"
                                                className="selected cursor-pointer hover:text-red-500 block uppercase text-black bg-white text-lg font-bold leading-50 px-18 py-1 px-4 focus:text-red-500 w-max mob-w-100 mb-3 tracking-[4.5px]"
                                            >
                                                {menu.menuName}
                                            </a>
                                        ))
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header