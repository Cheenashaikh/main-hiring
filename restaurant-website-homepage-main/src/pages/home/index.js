import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import "./home.css";
import imagepic from "../../assets/image.png"
import Special from "./specialMenu";
import Gallery from "./gallery";
import Choice from "./choice";
import Customer from "./customer";
import Footer from "../../components/footer";
import HeaderPic from "./headerpic";
function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100
        });
        AOS.refresh();
    }, [])


    return (
        <>
            <HeaderPic />

            <div className="home">
                <div className="ourStory">
                    <div className="story">
                        <h6 >Our Story</h6>
                        <span className="right_line"></span>

                    </div>
                    <div className="para">
                        <h1>Few Words About Us</h1>
                        <p>When you need reliable and trustworthy home assistance in Karachi, **Maid Genie** is here to make your life easier. Our platform connects you with skilled and verified maids who specialize in a range of household tasks, including cleaning, cooking, and more. Whether you require daily help, one-time support, or assistance for special occasions, Maid Genie ensures a seamless experience tailored to your needs.

                            We prioritize quality and professionalism, carefully selecting each maid to give you complete peace of mind. With detailed profiles and verified backgrounds, you can trust that you’re inviting the right help into your home. Our user-friendly platform makes it easy to find and book the perfect assistance, saving you time and effort.

                            At Maid Genie, we believe in fostering trust and harmony between you and your help, creating a stress-free, well-managed home environment. Experience exceptional service and convenience designed to meet your busy lifestyle. Let us take care of your home, so you can focus on what truly matters!.</p>
                    </div>


                </div>
                <div className="img">
                    <img src="https://www.henryford.com/-/media/project/hfhs/henryford/henry-ford-blog/images/mobile-interior-banner-images/2019/02/bucket-of-cleaning-products.jpg" data-aos="fade-down" />
                </div>

            </div>

            <Choice />
            <Customer />
            <Footer />
        </>
    );
}

export default Home;

