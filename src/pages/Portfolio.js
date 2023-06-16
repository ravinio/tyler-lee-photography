import React, { useContext } from "react";
import Gallery from "react-photo-gallery-react17";
import { photos } from "../img/portfolio/photos";
import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)

    return (
        <div 
            className="container px-10 pt-20 mx-auto h-screen overflow-scroll scroll-smooth"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <h1 className="h1 pt-20">Portfolio</h1>
            <Gallery photos={photos} direction={"column"} />
        </div>
    );
}

export default Portfolio;