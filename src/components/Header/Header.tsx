'use client'

import React from 'react'
import HomeSlider from '../HomeSlider/HomeSlider'

const Header = () => {
    return (
        <>
            <HomeSlider />
            <header>
                <div className="sticky-nav">
                    <a id="mobile-nav" className="menu-nav" href="#menu-nav"></a>
                    <nav id="menu">
                        <div id="menu-nav">
                            <nav id="options">
                                <div className="option-set" data-option-key="filter">
                                    <li>
                                        <a href="#home-slider" data-option-value="*" className="selected">H O M E</a>
                                    </li>
                                    <li>
                                        <a href="#work" data-option-value=".design">G R A F I K &nbsp; & &nbsp; W E B D E S I G N</a>
                                    </li>
                                    <li>
                                        <a href="#work" data-option-value=".technik">W E R B E T E C H N I K</a>
                                    </li>
                                    <li>
                                        <a href="#work" data-option-value=".print">P R I N T M E D I E N</a>
                                    </li>
                                    <li>
                                        <a href="#work" data-option-value=".kontakt">K O N T A K T</a>
                                    </li>
                                </div>
                            </nav>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header