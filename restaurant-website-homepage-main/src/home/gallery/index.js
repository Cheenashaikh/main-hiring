import React, { useEffect } from "react";
import Slider from "react-slick"; 
import "./gallery.css";
import { sliderData } from "../../../utilis/sliderData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos'
import 'aos/dist/aos.css';

function Gallery() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,            
        autoplaySpeed: 3000,    
        arrows: false,    
    };
    useEffect(()=>{
        Aos.init({
            duration:1000,
            once:false,
            offset:100
        });
        // Aos.refresh();
    },[])

    return (
        <div className="gallery">
            <div className="heading">
                <span className="right_line2"></span>
                <h6>Our Gallery</h6>
                <span className="left_line2"></span>
                <div className="para">
                    <h2>Lucha Hot Dishes</h2>
                </div>
            </div>
            
            <div className="slider">
                <Slider {...settings}>
                    {sliderData.map((data, index) => {
                        return (
                            <div className="imageSlider" key={index} data-aos="fade-left">
                                <div><img src={data.image} alt={`Gallery Item ${index}`} /></div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default Gallery;

