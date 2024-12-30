import React, { useEffect } from "react";
import "./special.css";
import { data } from "../../../utilis/data";
import Aos from "aos";
import 'aos/dist/aos.css';


function Special() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once:false,
            offset: 100
        });
        // Aos.refresh(); 
    }, []);

    return (
        <div className="special">
            <div className="heading">
                <div className="homeimage">
                    <img src="https://www.zeytin.pk/ext_iframe/envato/lucha/assets/images/menu/menu-bg1.png" className="updown-animation" />
                </div>
                <span className="right_line2"></span>
                <h6>Special menu offers.</h6>
                <span className="left_line2"></span>
                <div className="para">
                    <h2>Enjoy Our Specialties</h2>
                </div>
            </div>
            <div className="card" data-aos="fade-down">
                {data.map((item, index) => (
                    <img src={item.iamge} key={index} alt={`Special item ${index}`} className="rotate" />
                ))}
            </div>
        </div>
    );
}

export default Special;
