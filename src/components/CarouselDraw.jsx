import React from 'react';
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
import { useState, useEffect, useRef } from 'react';



export default function Carousel(props) {

    // const [dimensions, setDimensions] = React.useState({
    //     width: document.querySelector(".item").innerWidth,
    //     height: document.querySelector(".item").innerHeight,
    // });
    // console.log(dimensions);
    // const handleResize = () => {
    //     setDimensions({
    //         width: document.querySelector(".item").innerWidth,
    //         height: document.querySelector(".item").innerHeight,
    //     });
    // }
    // React.useEffect(() => {
    //     window.addEventListener("resize", handleResize, false);
    // }, []);



    const itemRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [slideMargin, setSlideMargin] = useState(0);

    const handleResize = () => {
        if (itemRef.current) {
            const { offsetWidth, offsetHeight } = itemRef.current;
            setDimensions({ width: offsetWidth, height: offsetHeight });
        }
    };

    useEffect(() => {
        // Ajoutez l'écouteur de redimensionnement au chargement du composant
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            // Supprimez l'écouteur de redimensionnement lors du démontage du composant
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function updateCarouselOnRight(e) {
        // console.log(e.target.parentElement.parentElement.parentElement);
        setSlideMargin(slideMargin-30);  
        e.target.parentElement.parentElement.style.transform = "translateX("+ slideMargin+ "vw)";
    }

    return (
        <>
            <div>
                <h2>{props.title}</h2>
                <div className="wrapper">
                    <section id='section1' className='row-content'>
                        <a className='arrow__btn scroll-btn' >‹</a>
                        <div className="item">
                            <img src={carouselImg1} alt="Describe Image" ref={itemRef}></img>
                        </div>
                        <div className="item">
                            <img src={carouselImg2} alt="Describe Image"></img>
                        </div>
                        <div className="item">
                            <img src={carouselImg3} alt="Describe Image"></img>
                        </div>
                        <div className="item">
                            <img src={carouselImg4} alt="Describe Image"></img>
                        </div>
                        <div className="item">
                            <img src={carouselImg5} alt="Describe Image"></img>
                        </div>
                        <div className="item">
                            <img src={carouselImg6} alt="Describe Image"></img>
                        </div>
                        <a onClick={updateCarouselOnRight} className='arrow__btn scroll-btn'>›</a>
                    </section>
                    <section id='section2' className='row-content'>
                        <a className='arrow__btn scroll-btn'>‹</a>
                        <div className="item">
                            <img src={carouselImg7} alt="Describe Image"></img>
                        </div>
                        <div className="item">
                            <img src={carouselImg8} alt="Describe Image"></img>
                        </div>
                        <div className="item">
                            <img src={carouselImg9} alt="Describe Image"></img>
                        </div>
                        <div className="item">
                            <img src={carouselImg10} alt="Describe Image"></img>
                        </div>
                        <div className="item">
                            <img src={carouselImg11} alt="Describe Image"></img>
                        </div>
                        <div className="item">
                            <img src={carouselImg12} alt="Describe Image"></img>
                        </div>
                        <a onClick={updateCarouselOnRight} className='arrow__btn scroll-btn'>›</a>
                    </section>
                </div>
            </div>
        </>
    );
}