import React from "react";
//import componenets
import Socials from "./Socials";
import Logo from "../img/logo/cameralogo.png"
import MobileNav from "./MobileNav";
//import link
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='fixed w-full px-[30px] lg:px-[100px] z-50 h-[100px] lg:h-[140px] flex items-center'>
            <div className='flex lg:flex-row lg:items-center w-full justify-between uppercase'>
                {/* Logo Section */}
                <Link to={"/"} className="max-w-[200px]">
                    <img src={Logo} alt="..." />
                    {/* logo */}
                </Link>

                {/* Nav */}
                <nav className="hidden xl:flex gap-x-12 font-semibold">
                    <Link to={"/"} className="text-[#696c6d] hover:text-primary transition">Home</Link>
                    <Link to={"/about"} className="text-[#696c6d] hover:text-primary transition">About</Link>
                    <Link to={"/portfolio"} className="text-[#696c6d] hover:text-primary transition">Portfolio</Link>
                    {/* <Link to={"/contact"} className="text-[#696c6d] hover:text-primary transition">Contact</Link> */}
                </nav>

                {/* Socials */}
                <Socials />

                {/* Mobile */}
                <MobileNav />
            </div>
        </header>
    );
}

export default Header;