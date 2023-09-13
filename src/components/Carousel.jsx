import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import carouselImg1 from '../img/new_releases_carousel/new_releases_carousel-img1.jpg';
import carouselImg2 from '../img/new_releases_carousel/new_releases_carousel-img2.jpg';
import carouselImg3 from '../img/new_releases_carousel/new_releases_carousel-img3.jpg';
import carouselImg4 from '../img/new_releases_carousel/new_releases_carousel-img4.jpg';
import carouselImg5 from '../img/new_releases_carousel/new_releases_carousel-img5.jpg';
import carouselImg6 from '../img/new_releases_carousel/new_releases_carousel-img6.jpg';
import carouselImg7 from '../img/new_releases_carousel/new_releases_carousel-img7.jpg';
import carouselImg8 from '../img/new_releases_carousel/new_releases_carousel-img8.jpg';
import carouselImg9 from '../img/new_releases_carousel/new_releases_carousel-img9.jpg';
import carouselImg10 from '../img/new_releases_carousel/new_releases_carousel-img10.jpg';
import carouselImg11 from '../img/new_releases_carousel/new_releases_carousel-img11.jpg';
import carouselImg12 from '../img/new_releases_carousel/new_releases_carousel-img12.jpg';
import carouselImg13 from '../img/new_releases_carousel/new_releases_carousel-img13.jpg';
import carouselImg14 from '../img/new_releases_carousel/new_releases_carousel-img14.jpg';
import carouselImg15 from '../img/new_releases_carousel/new_releases_carousel-img15.jpg';
import "./Carousel.css";
// import { useRef } from 'react';
// import CustomSlideInfo from './CustomSlideInfo';
import { useState } from 'react';

export default function Carousel() {

    // const carouselRef = useRef();

    // const goToSlide = (index) => {
    //     if (carouselRef.current) {
    //         carouselRef.current.slideTo(index).slideTo(index);
    //     }
    // };




    return (
        <>
            <AliceCarousel

                disableDotsControls={true}
                infinite={true}
            >
                <div className="carousel-wrapper">
                    <img src={carouselImg1} className="sliderimg" />
                    <img src={carouselImg2} className="sliderimg" />
                    <img src={carouselImg3} className="sliderimg" />
                    <img src={carouselImg4} className="sliderimg" />
                    <img src={carouselImg5} className="sliderimg" />
                    <img src={carouselImg6} className="sliderimg" />
                </div>
                <div className="carousel-wrapper">
                    <img src={carouselImg7} className="sliderimg" />
                    <img src={carouselImg8} className="sliderimg" />
                    <img src={carouselImg9} className="sliderimg" />
                    <img src={carouselImg10} className="sliderimg" />
                    <img src={carouselImg11} className="sliderimg" />
                    <img src={carouselImg12} className="sliderimg" />
                </div>
            </AliceCarousel >
        </>
    )
}
