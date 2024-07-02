'use client'

import { UserContext } from '@/context/UserContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const HomeSlider = () => {
    const { handleLogout, userData, setShowDropdown, showDropdown, isUserLogin } = useContext(UserContext);
    return (
        <>
            <div id="home-slider" className="relative overflow-hidden h-full z-[100000]">
                <div></div>
                <div className="flex justify-between items-center mob-d-block mt-0">
                    <div className="claim mob-mb-1rem mob_logo_section top-8 left-0 bg-white text-end text-black decoration-line-none text-1xl font-bold leading-34 ps-10 pe-10 uppercase px-14.8 py-2 w-[40%] mb-16 mt-0 lg:mt-5 ml-0 z-2 mob-ps-0">
                        <li className="list-none">WORKSHOP FOR ADVERTISING & DESIGN</li>
                    </div>
                    <div className="flex mob:flex-col mob:items-center fixed top-[45px] md:top-[22px] lg:top-[22px] right-[20px] mob:static">
                        {isUserLogin && userData ? (
                            <div className="relative flex items-center mob:mb-4">
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-700 text-white rounded-full cursor-pointer hover:bg-gray-600"
                                    onClick={() => setShowDropdown(!showDropdown)}
                                >
                                    {userData.userName.slice(0, 2).toUpperCase()}
                                </div>
                                {showDropdown && (
                                    <div className="absolute top-12 right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden">
                                        {userData.role === 'admin' && (
                                            <Link
                                                href="/studio/admin-portal"
                                                className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                                            >
                                                <MdOutlineAdminPanelSettings className="mr-2" /> Admin Panel
                                            </Link>
                                        )}
                                        <button
                                            className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                                            onClick={handleLogout}
                                        >
                                            <HiOutlineLogout className="mr-2" />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex space-x-2 mob:flex-col mob:space-y-2 mob:space-x-0">
                                <Link href="/login" className="hover:text-red-500 cursor-pointer uppercase text-black bg-white text-md font-bold leading-50 px-4 py-1 focus:text-red-500 w-max mob:w-full mob:mb-2 flex items-center">
                                    Login
                                </Link>
                                <Link href="/reg" className="hover:text-red-500 cursor-pointer uppercase text-black bg-white text-md font-bold leading-50 px-4 py-1 focus:text-red-500 w-max mob:w-full mob:mb-2 flex items-center">
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className="logo flex justify-center w-full overflow-hidden text-center mt-9 lg:mt-0 z-2 mb-20">
                    <img src="/images/home-logo.webp" width={1500} alt="Logo" />
                </div>
            </div>
        </>
    )
}

export default HomeSlider