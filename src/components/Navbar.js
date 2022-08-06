import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
// import { motion } from "framer-motion";

const Navbar = ({ textEnter, textLeave, imageEnter, defaultColor }) => {
  // const [hov, setHov] = useState(false);

  // const variants = {
  //   default: { opacity: 0, y: 50, zIndex: -10 },
  //   hover: { opacity: 1, y: 0, zIndex: 10 },
  //   delay1: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.025 } },
  //   delay2: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.05 } },
  //   delay3: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.075 } },
  //   delay4: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.1 } },
  //   delay5: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.125 } },
  // };

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const [scrollDetect, setScrollDetect] = useState(false);
  const screenWidth = useState(window.innerWidth);
  const [textColor, setTextColor] = useState(defaultColor);

  //Function to uncheck navCheckbox
  function uncheckNav() {
    document.getElementById("menu-btn").checked = false;
  }

  // Function to detect scrolling and change navbar type based on that
  const handleScroll = () => {
    // console.log(window.scrollY);
    if (screenWidth > 500) {
      if (window.scrollY > 50) {
        setScrollDetect(true);
        setTextColor("white");
      } else {
        setScrollDetect(false);
        setTextColor(defaultColor);
      }
    } else {
      if (window.scrollY > 50) {
        setScrollDetect(true);
        setTextColor("white");
      } else {
        setScrollDetect(false);
        setTextColor(defaultColor);
        setShow(true);
      }
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div className={`navContainer ${show && "hidden"} duration-300 transition`}>
      <nav
        className={
          scrollDetect
            ? "nav scrol fixed flex flex-wrap items-center justify-between px-4 top-0 w-full z-20 navLiteBack"
            : "nav scrol fixed flex flex-wrap items-center justify-between px-4 top-0 w-full z-20"
        }
      >
        <div className="flex flex-no-shrink items-center mr-6 pl-0 md:p-5">
          <a className="navLogo self-center md:pb-3" href="/#">
            <button>
              {window.innerWidth > 767 ? (
                <div
                  className="text-3xl font-normal "
                  style={{ fontFamily: "Arial", color: textColor }}
                  onMouseEnter={textEnter}
                  onMouseLeave={imageEnter}
                >
                  shradha
                </div>
              ) : (
                <div
                  className="text-xl font-normal "
                  style={{ fontFamily: "Arial", color: textColor }}
                  onMouseEnter={textEnter}
                  onMouseLeave={imageEnter}
                >
                  shradha
                </div>
              )}
            </button>
          </a>
        </div>

        <input className="menu-btn hidden " type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 my-0 relative select-none"
          for="menu-btn"
        >
          <span className="navicon flex items-center relative"></span>
        </label>

        <ul className="navList uppercase font-lora menu md:border-none  font-normal flex mr-5 md:mt-0 md:my-2 mt-2 ml-5 items-center justify-end list-none m-0 p-0 w-screen md:w-auto  md:bg-transparent">
          <li className="border-none text-center md:pb-3">
            <ScrollIntoView
              selector="#work"
              onClick={uncheckNav}
              className=" block md:inline-block  py-3 no-underline border-none text-black"
            >
              <button
                onMouseEnter={textEnter}
                onMouseLeave={imageEnter}
                style={{ textDecoration: "none", color: textColor }}
                className="cursor-pointer uppercase"
              >
                Work
              </button>
            </ScrollIntoView>
          </li>

          <li className="border-none text-center">
            <Link
              onMouseEnter={textEnter}
              onMouseLeave={imageEnter}
              to="/about"
              onClick={uncheckNav}
              style={{ textDecoration: "none", color: textColor }}
              className="block md:inline-block py-3 no-underline border-none"
            >
              About
            </Link>
          </li>

          <li className="border-none text-center">
            <ScrollIntoView
              selector="#get-in-touch"
              activeClassName="selected"
              onClick={uncheckNav}
              className="block md:inline-block  py-3 no-underline border-none"
            >
              <button
                onMouseEnter={textEnter}
                onMouseLeave={imageEnter}
                style={{ textDecoration: "none", color: textColor }}
                className="cursor-pointer uppercase font-lora"
              >
                Contact
              </button>
            </ScrollIntoView>
          </li>

          <li className="navBlog border-none text-center">
            <Link
              onMouseEnter={textEnter}
              onMouseLeave={imageEnter}
              to="/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: textColor }}
              onClick={uncheckNav}
              className="block md:inline-block py-3 no-underline border-none"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    // <div
    //   onMouseEnter={imageEnter}
    //   onMouseLeave={textLeave}
    //   className="navContainer z- bg-brand-darkGrey w-screen fixed flex flex-row justify-between items-center md:px-10 md:py-5"
    // >
    //   <div
    //     className="text-3xl font-normal text-white "
    //     style={{ fontFamily: "Arial" }}
    //     onMouseEnter={textEnter}
    //     onMouseLeave={imageEnter}
    //   >
    //     shradha
    //   </div>
    //   <div className="flex flex-row text-white gap-4 font-laro text-lg uppercase">
    //     <div onMouseEnter={textEnter} onMouseLeave={imageEnter}>
    //       Work
    //     </div>
    //     <div onMouseEnter={textEnter} onMouseLeave={imageEnter}>
    //       About
    //     </div>
    //     <div onMouseEnter={textEnter} onMouseLeave={imageEnter}>
    //       Resume
    //     </div>
    //   </div>
    /* <motion.div
        className="font-lora text-5xl flex flex-row"
        onMouseOver={() => setHov((hov) => !hov)}
        onMouseOut={() => setHov((hov) => !hov)}
        onMouseEnter={textEnter}
        onMouseLeave={imageEnter}
      >
        S
        <motion.span
          animate={hov ? "hover" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          h
        </motion.span>
        <motion.span
          animate={hov ? "delay1" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          r
        </motion.span>
        <motion.span
          animate={hov ? "delay2" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          a
        </motion.span>
        <motion.span
          animate={hov ? "delay3" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          d
        </motion.span>
        <motion.span
          animate={hov ? "delay4" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          h
        </motion.span>
        <motion.span
          animate={hov ? "delay5" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          a
        </motion.span>
      </motion.div>
      <div
        className="font-lora text-4xl flex flex-row"
        onMouseOver={() => setHov((hov) => !hov)}
        onMouseOut={() => setHov((hov) => !hov)}
        onMouseEnter={textEnter}
        onMouseLeave={imageEnter}
      >
        M{" "}
        <motion.span
          animate={hov ? "delay1" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          e
        </motion.span>
        <motion.span
          animate={hov ? "delay2" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          n
        </motion.span>
        <motion.span
          animate={hov ? "delay3" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          u
        </motion.span> */
    /* </div> */
    // </div>
  );
};

export default Navbar;
