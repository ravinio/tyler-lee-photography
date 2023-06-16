import React, { useContext } from "react";
//import images
import HomeImg from "../img/home/tyler-waterfall-3.jpg";
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
            <div className="container px-10 mx-auto h-full">
                {/* Text & image Wrapper */}
                <div 
                    className="flex flex-col justify-end h-screen"
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                >
                    {/* text */}
                    <div className="w-full h-screen pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 flex flex-col justify-end items-start">
                        <h1 className="h1">
                            Photography <br /> Library 
                        </h1>
                        <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
                            By Tyler Lee
                        </p>
                        <Link to={"/contact"} className="btn mb-[30px]">hire me</Link>
                    </div>
                    {/* image */}
                    {/* <div className="flex justify-end max-h-96 lg:max-h-max"> */}
                    <div className="block absolute overflow-visible h-screen top-0 right-0">
                        <img src={HomeImg} alt="..." className="h-full"/>                      
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;