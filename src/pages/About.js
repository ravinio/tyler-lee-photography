import React from "react";
//import images
//import Adrianna from "../img/home/adrianna.jpg";
// import link
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="section">
            <div className="container mx-auto h-full relative">
                {/* Text & Image */}
                <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 lg:pt-16 text-left">
                    <div>
                        image
                        {/* <img src={Adrianna} alt="..." /> */}
                    </div>
                    <div className="pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
                        <h1 className="h1">About Me</h1>
                        <p className="mb-12 max-w-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <b>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</b>
                            <br />
                            <br />
                            In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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