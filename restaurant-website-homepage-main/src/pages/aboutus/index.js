import React from "react";
import "./aboutus.css";
import Mission from "./mission";
import Vision from "./vision";
import Values from "./values";

import Footer from "../../components/footer";
import Story from "./ourstory";


function AboutUs() {
  return (

    <>
    <div className="servics">
      <div className="container">
        <div className="aboutHeading">
          <h2>Who are we?</h2>
        </div>
      </div>
      <div className="container">
        <div className="para">
          <p>At **Maid Genie**, we are a dedicated team focused on simplifying home management by connecting you with skilled, reliable, and professional maids. Our platform is designed to make it easy for you to find trusted help for your home, whether it’s for cleaning, cooking, or other household tasks. We carefully select and verify every service provider to ensure the highest standards of quality and trust. Our mission is to provide a seamless, stress-free experience, helping you maintain a well-managed home while offering convenience and peace of mind. With Maid Genie, you can be confident that your home is in good hands.</p>
        </div>
      </div>
      <Mission />
      <Vision/>
      <Values/>
      <Story/>
    
 
 

      <Footer/>
    </div>

</>
  );
}
export default AboutUs;