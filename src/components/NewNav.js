import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import $ from "jquery";

const Navbar = ({ textEnter, textLeave, imageEnter, defaultColor }) => {
  const links = [
    {
      name: "Work",
      link: "/#work",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/#get-in-touch",
    },
    {
      name: "Resume",
      link: "/",
    },
  ];

  // Functions for mobile navbar slider button
  const handleToggle = () => {
    $("#sideMenu").toggleClass("translate-x-full");
    $("#sideButton").toggleClass("active");
  };
  const resize = () => {
    $("#sideMenu").addClass("translate-x-full");
  };

  // For the bounce effect for logo
  const [hov, setHov] = useState(false);
  const variants = {
    default: { opacity: 0, y: 50, zIndex: -10 },
    hover: { opacity: 1, y: 0, zIndex: 10 },
    delay1: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.025 } },
    delay2: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.05 } },
    delay3: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.075 } },
    delay4: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.1 } },
    delay5: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.125 } },
  };

  // For Navbar to show up when scrolled up
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      console.log(show);
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }
      if (window.scrollY < 50) {
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

  //Function to uncheck navCheckbox
  function uncheckNav() {
    document.getElementById("menu-btn").checked = false;
  }

  return (
    <div className="z-20 overflow-hidden w-screen bg-red-300">
      <div
        style={{ color: defaultColor }}
        className="w-full hidden md:flex absolute justify-between items-center mr-5"
      >
        <a href="/" className="flex items-center">
          <motion.div
            className="font-lora text-4xl top-0 overflow-hidden p-5 flex flex-row items-center md:px-10"
            onMouseEnter={textEnter}
            onMouseLeave={imageEnter}
            onMouseOver={() => setHov((hov) => !hov)}
            onMouseOut={() => setHov((hov) => !hov)}
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
        </a>
        <div className="flex flex-row">
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={1}
            duration={500}
            className="block cursor-pointer z-50 md:inline-block p-5 no-underline border-none"
          >
            <div
              onMouseEnter={textEnter}
              onMouseLeave={imageEnter}
              className="text-lg z-50 uppercase font-lato"
            >
              Work
            </div>
          </Link>
          <a
            onMouseEnter={textEnter}
            onMouseLeave={imageEnter}
            href="/about"
            onClick={uncheckNav}
            className="font-lato text-lg uppercase top-0 overflow-hidden p-5 flex flex-row items-center"
          >
            About
          </a>
          <Link
            activeClass="active"
            to="get-in-touch"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="block md:inline-block p-5 no-underline border-none"
          >
            <button
              onMouseEnter={textEnter}
              onMouseLeave={imageEnter}
              className="cursor-pointer font-lato text-lg uppercase"
            >
              Contact
            </button>
          </Link>
          <a
            onMouseEnter={textEnter}
            onMouseLeave={imageEnter}
            href="/"
            onClick={uncheckNav}
            className="font-lato text-lg uppercase top-0 overflow-hidden p-5 flex flex-row items-center"
          >
            Resume
          </a>
        </div>
      </div>

      <div
        onMouseEnter={imageEnter}
        onMouseLeave={textLeave}
        className={`navContainer ${
          show && "md:hidden"
        } text-white z-20 bg-brand-darkGrey hidden md:flex w-screen top-0 fixed  flex-row justify-between items-center md:px-10 md:py-5`}
      >
        <div
          className="text-3xl font-normal"
          style={{ fontFamily: "Arial" }}
          onMouseEnter={textEnter}
          onMouseLeave={imageEnter}
        >
          shradha
        </div>
        <div className="flex flex-row text-white gap-4 font-lato text-lg uppercase">
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onMouseEnter={textEnter}
            onMouseLeave={imageEnter}
          >
            <div
              onMouseEnter={textEnter}
              onMouseLeave={imageEnter}
              className="text-lg z-50 uppercase font-lato"
            >
              Work
            </div>
          </Link>
          <a href="/about" onMouseEnter={textEnter} onMouseLeave={imageEnter}>
            About
          </a>
          <Link
            activeClass="active"
            to="get-in-touch"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onMouseEnter={textEnter}
            onMouseLeave={imageEnter}
          >
            <div
              onMouseEnter={textEnter}
              onMouseLeave={imageEnter}
              className="text-lg z-50 uppercase font-lato"
            >
              Contact
            </div>
          </Link>
          <a href="/" onMouseEnter={textEnter} onMouseLeave={imageEnter}>
            Resume
          </a>
        </div>
      </div>

      <div className="md:hidden bg-brand-darkGrey text-white overflow-hidden p-1 top-0 fixed z-50 w-full flex justify-between items-center h-auto">
        <a href="/" className="ml-5 font-laro text-2xl">
          Shradha
        </a>
        <nav
          id="sideMenu"
          className="text-xl sideMenu fixed p-36 text-center bg-brand-darkGrey2 inset-y-0 right-0 transform transition items-center translate-x-full duration-500 ease-in-out uppercase min-h-screen w-full flex z-10 flex-col justify-around min-w-screen"
        >
          {links.map((value, key) => (
            <div key={key} className="block" onClick={resize}>
              <a href={value.link}>{value.name}</a>
            </div>
          ))}
        </nav>
        <button onClick={handleToggle} className="z-50 flex" id="sideButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 200 200"
          >
            <g stroke-width="6.5" stroke-linecap="round">
              <path
                d="M72 82.286h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="#fff"
              />
              <path
                d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                fill="none"
                stroke="#ffffff"
              />
              <path
                d="M72 125.143h28.75"
                fill="#ffffff"
                fill-rule="evenodd"
                stroke="#fff"
              />
              <path
                d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                fill="none"
                stroke="#fff"
              />
              <path
                d="M100.75 82.286h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="#fff"
              />
              <path
                d="M100.75 125.143h28.75"
                fill="#ff0"
                fill-rule="evenodd"
                stroke="#fff"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
