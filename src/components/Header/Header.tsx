'use client'

import React, { useState } from 'react';
import { Images, Menus } from '@/types/Type';
import SubHeader from '../SubHeader/SubHeader';

interface Props {
    menus: Menus[] | null;
    setFilterKey: any,
    scrollToSection: (id: string) => void
}

const Header: React.FC<Props> = ({ menus, setFilterKey, scrollToSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    return (
        <>
            <SubHeader />
            <header className="sticky top-9 md:top-16 mt-[10px] bg-transparent z-[500]">
                <div className="relative pt-10 bg-transparent z-[9999]">
                    <div className="block -mt-10 md:hidden p-2 z-50">
                        <label className="hamburger">
                            <input type="checkbox" onChange={toggleMobileMenu} />
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    </div>
                    <nav className={`${isMobileMenuOpen ? "block" : "hidden"} md:block p-3 mt-4 md:mt-0`}>
                        <ul className="flex flex-col md:flex-col items-center md:items-start space-y-3 md:space-y-4 p-0 m-0 lg:ml-60">
                            {menus && menus.map((menu, index) => (
                                <li key={index} className="w-full md:w-auto -mt-7 md:-mt-24">
                                    <a
                                        // href={`#${menu.menuName}`}
                                        onClick={() => {
                                            scrollToSection(`${menu.menuName}`)
                                            setFilterKey(`#${menu.menuName}`)}}
                                        className="cursor-pointer hover:text-red-500 block text-center uppercase text-black bg-white text-lg font-bold leading-50 px-4 py-1 tracking-[4.5px] transition duration-300"
                                    >
                                        {menu.menuName}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
