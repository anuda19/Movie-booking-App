import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import './imageCarousel.css'

const ImageCarousel = props => {
    const { images } = props;

    return (
        <div className='shadow-lg carousel'>
            <CCarousel controls indicators>
                {images.map((image, index) => {
                    return (
                        <CCarouselItem key={index}>
                            <CImage
                                className='d-block w-100 carousel_image'
                                src={image}
                                alt={`slide ${index + 1}`}
                                style={{height:"600px"}}
                            />
                        </CCarouselItem>
                    );
                })}
            </CCarousel>
        </div>
    );
};

export default ImageCarousel;
