'use client'

import Link from 'next/link'
import React from 'react'

const HomeSlider = () => {
    return (
        <>
            <div id="home-slider" className="relative overflow-hidden h-full z-0">
                <div></div>
                <div className="flex justify-between items-center mob-d-block mt-10">
                    <div className="claim mob-mb-1rem mob_logo_section top-8 left-0 bg-white text-end text-black decoration-line-none text-1xl font-bold leading-34 ps-10 pe-10 uppercase px-14.8 py-2 w-[40%] mb-16 mt-5 ml-0 z-2 mob-ps-0">
                        <li className="list-none">WORKSHOP FOR ADVERTISING & DESIGN</li>
                    </div>
                    <div className="flex mob-mb-1rem fixed top-[26px] right-[0px] mob-static z-10">
                        <Link href={'/login'} className="selected hover:text-red-500 cursor-pointer uppercase text-black bg-white text-md font-bold leading-50 px-18 py-1 px-4 focus:text-red-500 w-max mob-w-100 mb-3 flex items-center me-2">
                            Login
                        </Link>
                        <Link href={'/reg'} className="selected hover:text-red-500 cursor-pointer uppercase text-black bg-white text-md font-bold leading-50 px-18 py-1 px-4 focus:text-red-500 w-max mob-w-100 mb-3 flex items-center me-2">
                            Register
                        </Link>
                    </div>
                </div>

                <div className="logo flex justify-center top-20 left-60 w-full overflow-hidden text-center z-2 mb-10">
                    <img src="/images/logo-img.gif" width={1500} alt="Logo" />
                </div>
            </div>
        </>
    )
}

export default HomeSlider