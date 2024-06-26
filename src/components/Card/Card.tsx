import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
    cardImg?: StaticImageData,
    img?: StaticImageData
}

const Card: React.FC<Props> = ({ cardImg, img }) => {
    return (
        <li className="item-thumbs span5 design">
            {/* <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="W E B S I T E S"
                href={`${img || ''}`}>
                <span className="overlay-img"></span>
                <span className="overlay-img-thumb font-icon-plus"></span>
            </a>
            <Image src={cardImg || ''} alt="" /> */}
        </li>
    )
}

export default Card