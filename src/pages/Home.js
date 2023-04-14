import React, { useContext } from "react";
//import images
import Adrianna from "../img/home/adrianna.jpg";
// import link
import { Link } from "react-router-dom";
//import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions";
// cursor context
import { CursorContext } from "../context/CursorContext";

const Home = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)

    return (
        <section 
            transition={transition1}
            className="section"
        >
            <div className="container mx-auto h-full relative">
                {/* Text & image Wrapper */}
                <div 
                    className="flex flex-col justify-center"
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                >
                    {/* text */}
                    <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
                        <h1 className="h1">
                            Designer <br /> & Photographer
                        </h1>
                        <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
                            Sydney, Aus
                        </p>
                        <Link to={"/contact"} className="btn mb-[30px]">hire me</Link>
                    </div>
                    {/* image */}
                    <div className="flex justify-end max-h-96 lg:max-h-max">
                        <div className="relative lg:-right-40 overflow-hidden">
                            <img src={Adrianna} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;