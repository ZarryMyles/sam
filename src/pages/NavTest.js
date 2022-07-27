import React from "react";
import Navbar from "../components/Navbar";

const NavTest = () => {
  return (
    <>
      <Navbar />
      <div className="text-base md:text-8xl h-screen w-full bg-brand-grey text-white flex justify-center items-center">
        Nav
      </div>
    </>
  );
};

export default NavTest;
