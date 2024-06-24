'use client'

import React from 'react'
import Card from '../Card/Card'
import imageWebsites from '@/../public/img/work/thumbs/image-websites.jpg'
import imageWebsitesFull from '@/../public/img/work/full/image-websites-full.jpg'
import Contact from '../Contact/Contact'

const PortfolioSec = () => {
    return (
        <div className="page" id="work">
            <div className="container">
                <div className="row">
                    <div className="span3"></div>
                    <div className="span9">
                        <div className="row">
                            <section id="projects">
                                <ul id="thumbs">
                                    <li className="item-thumbs span3 design"></li>
                                    <Card
                                        cardImg={imageWebsites}
                                        img={imageWebsitesFull}
                                    />
                                    <li className="item-thumbs span9 kontakt">
                                        <Contact/>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSec