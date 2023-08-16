import React, { useContext, useEffect, useRef, useState } from "react";
import Gallery from "react-photo-gallery-react17";
import { photos } from "../img/portfolio/photos";
import { CursorContext } from "../context/CursorContext";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, placeholder } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

const Portfolio = () => {
    const galleryRef = useRef();

    useEffect(() => {
      if (window && galleryRef.current) {
        window.cloudinary
          .galleryWidget({
            container: galleryRef.current,
            cloudName: 'dzkmmnpig',
            mediaAssets: [
                { tag: "production-ready", transformation: { crop: "fill" } }, // by default mediaType: "image"
                { tag: "production-ready", mediaType: "video" },
                { tag: "production-ready", mediaType: "spin" }
            ],
            navigationButtonProps: {
                "color": "#FFFFFF",
                "iconColor": "#000000"
            },
            displayProps: {
                "mode": "expanded",
                "columns": 3,
                "spacing": 3
            },
            transformation: {
                "crop": "fill"
            },
            bgColor: "transparent",
            themeProps: {
                "active": "#000000",
            },
            secureDistribution: "res-s.cloudinary.com",
            zoomProps: {
                "type": "popup",
                "steps": 1,
                "level": 1
            }
          })
          .render();
      }
    }, []);

    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

    return (
        <div 
            className="container px-10 pt-20 mx-auto h-screen overflow-scroll scroll-smooth"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <h1 className="h1 pt-20">Portfolio</h1>
            <div>
                <div ref={galleryRef} />
            </div>
        </div>
    );
}

export default Portfolio;