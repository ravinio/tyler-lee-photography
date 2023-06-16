import React, { useContext } from "react";
//import images
import Tyler from "../img/home/tyler-waterfall-2.png";
// import link
import { Link } from "react-router-dom";
//import transition
import { transition1 } from "../transitions";
// cursor context
import { CursorContext } from "../context/CursorContext";

const About = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)

    return (
        <section 
            transition={transition1}
            className="section"
        >
            <div className="container mx-auto h-full relative">
                {/* Text & Image */}
                <div 
                    className="flex flex-col lg:flex-row h-screen items-end"
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                >
                
                    <div className="block fixed h-screen top-0 left-0">                        
                        <img src={Tyler} alt="..." className="h-full"/>
                    </div>
                    
                    <div className="p-5 lg:pt-0 lg:pr-0 lg:pl-0 lg:pb-14 lg:w-auto z-10 flex flex-col h-full justify-center items-start">
                        <h1 className="h1">About Me</h1>
                        <p className="mb-12 max-w-sm">
                            Welcome to my portfolio! I'm a passionate photographer with an insatiable wanderlust. Whether it's the bustling streets of a vibrant city or the tranquil serenity of a hidden oasis, I find joy in freezing moments in time and sharing them with the world. <b>Through my lens, I strive to transport you to the stunning locations I've been fortunate enough to explore.</b>
                            <br />
                            <br />
                            So join me on this visual journey as we traverse the globe together, one click at a time.
                        </p>   
                        <Link to={"/portfolio"} className="btn"> 
                            View My Work
                        </Link>                 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;