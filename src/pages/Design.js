import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "../components";
import { useTitle } from "../hooks/useTitle";
import { motion } from "framer-motion";
import Zoom from "react-medium-image-zoom";

// Design images
import Ill1 from "../assets/Designs/ill1.png";
import Web1 from "../assets/Designs/Web1.png";
import Web2 from "../assets/Designs/Web2.png";
import Web3 from "../assets/Designs/Web3.png";
import App1 from "../assets/Designs/App1.png";

const Design = () => {
  useTitle("Designs | Shradha B");

  // Mouse-related statements
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setcursorVariant] = useState("default");
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    secondary: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      backgroundColor: "#FFEE8C",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
    large: {
      height: 80,
      width: 80,
      x: mousePos.x - 40,
      y: mousePos.y - 40,
      backgroundColor: "#FFEE8C",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
  };
  const imageEnter = () => setcursorVariant("secondary");
  const largeEnter = () => setcursorVariant("large");

  // Images-related operations
  const allImages = [
    { id: 1, src: Ill1, tag: "Illustration" },
    { id: 2, src: App1, tag: "App" },
    { id: 3, src: Web1, tag: "Web" },
    { id: 4, src: Web2, tag: "Web" },
    { id: 5, src: Web3, tag: "Web" },
  ];
  const [selectedFilter, setSelectedFilter] = useState("All");
  const handleFilterChange = (filter) => {
    if (selectedFilter === filter && filter !== "All") {
      setSelectedFilter("All");
    } else {
      setSelectedFilter(filter);
    }
  };

  const filteredImages =
    selectedFilter === "All"
      ? allImages
      : allImages.filter((image) => image.tag === selectedFilter);

  return (
    <>
      <Navbar
        imageEnter={imageEnter}
        largeEnter={largeEnter}
        defaultColor={"black"}
      />
      <div
        onMouseEnter={imageEnter}
        onMouseLeave={imageEnter}
        className="w-full h-auto font-lato pt-40 bg-brand-black text-[#fefefe] min-h-screen"
      >
        <div className="flex flex-col gap-10 font-lato text-xl tracking-[0.3px] leading-7 md:px-24">
          <div className="flex flex-wrap gap-6">
            {/* Filter Section */}
            <button
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              onClick={() => handleFilterChange("All")}
              className={`px-4 py-2 border-2 rounded-full hover:cursor-none ${
                selectedFilter === "All"
                  ? "border-brand-gold bg-brand-gold text-brand-black"
                  : "border-[#292929] text-[#d1d1d1] bg-transparent"
              }`}
            >
              All
            </button>
            <button
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              onClick={() => handleFilterChange("Illustration")}
              className={`px-4 py-2 border-2 rounded-full ${
                selectedFilter === "Illustration"
                  ? "border-brand-gold bg-brand-gold text-brand-black"
                  : "border-[#292929] text-[#d1d1d1] bg-transparent"
              }`}
            >
              Illustration
            </button>
            <button
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              onClick={() => handleFilterChange("App")}
              className={`px-4 py-2 border-2 rounded-full ${
                selectedFilter === "App"
                  ? "border-brand-gold bg-brand-gold text-brand-black"
                  : "border-[#292929] text-[#d1d1d1] bg-transparent"
              }`}
            >
              App Design
            </button>
            <button
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              onClick={() => handleFilterChange("Web")}
              className={`px-4 py-2 border-2 rounded-full ${
                selectedFilter === "Web"
                  ? "border-brand-gold bg-brand-gold text-brand-black"
                  : "border-[#292929] text-[#d1d1d1] bg-transparent"
              }`}
            >
              Web Design
            </button>
            {/* Add more buttons for other tags */}
          </div>
          <div className="flex flex-wrap gap-[14px]">
            {/* Image Gallery */}
            {filteredImages.map((image) => (
              <div key={image.id} className="rounded-lg">
                <Zoom>
                  <img
                    src={image.src}
                    alt={image.tag}
                    width={430}
                    className="rounded-lg"
                  />
                </Zoom>
              </div>
            ))}
          </div>
        </div>
        <Footer imageEnter={imageEnter} largeEnter={largeEnter} />
        <motion.div
          className="cursor hidden md:flex"
          variants={variants}
          animate={cursorVariant}
        />
      </div>
    </>
  );
};

export default Design;
