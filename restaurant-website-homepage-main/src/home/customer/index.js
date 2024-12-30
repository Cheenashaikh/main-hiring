import React, { useEffect, useState } from "react";
import { customer } from "../../../utilis/customer";
import "./customer.css";


const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = customer.length;

    const nextSlide = () => {
        console.log("Next slide clicked");
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlider = () => {
        console.log("Previous slide clicked");
        setCurrent(current === 0 ? length - 1 : current - 1);
    };



    useEffect(() => {
        setTimeout(nextSlide, 2000)
    })
    return (
        <div className="customer">
           
            <div className="heading">
                <span className="right_line2" style={{marginLeft:"450px"}}></span>
                <h6 >Latest News</h6>
                <span className="left_line2"></span>
                <div className="para">
                    <h1 style={{marginLeft:"450px"}}>Our Customer Says</h1>
                    <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ting eusm tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <section>


                {customer.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? "slide active" : "slide"}
                            key={index}

                        >



                            {index === current && (
                                <div className="material">
                                    <div className="headding" id="customerHeading">
                                    {/* <h1 className="apostrophe">"</h1> */}
                                    
                                        <h3>{slide.heading}</h3>
                                        <p>{slide.text}</p>
                                    </div>

                                    <div className="customerImage">  <img src={slide.image} alt="BOOK" className="image" />  </div>
                                </div>
                            )}

                        </div>
                    );
                })}
            </section>
          
        </div>
    );
};

export default ImageSlider;

