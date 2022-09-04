import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import $ from "jquery";

const Navbar = ({
  textEnter,
  largeEnter,
  textLeave,
  imageEnter,
  defaultColor,
}) => {
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
      link: "https://drive.google.com/file/d/1gdC7zdeDq_ZZZVhfR79LOOZrqUFiqytM/view?usp=sharing",
    },
  ];

  // Functions for mobile navbar slider button
  const handleToggle = () => {
    $("#sideMenu").toggleClass("translate-x-full");
    $("#sideButton").toggleClass("active");
  };
  const resize = () => {
    $("#sideMenu").addClass("translate-x-full");
    $("#sideButton").toggleClass("active");
  };

  // For Navbar to show up when scrolled up
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
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
    <div className="overflow-hidden w-screen">
      <div
        style={{ color: defaultColor }}
        onMouseEnter={imageEnter}
        className="w-full hidden md:flex zed absolute justify-between items-center mr-5 p-5 md:px-24"
      >
        <a href="/" className="flex items-center">
          <div
            className="font-lora-italic text-2xl top-0 overflow-hidden  flex flex-row items-center "
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
            style={{ color: "#b5b5b5" }}
          >
            S
          </div>
        </a>
        <div
          style={{ color: "#b5b5b5" }}
          className="flex tracking-1.5 flex-row "
        >
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            className="block md:inline-block p-2 no-underline border-none"
          >
            <a
              href="/#work"
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              className="text-lg font-lato cursor-pointer block md:inline-block p-2 no-underline border-none"
            >
              Work
            </a>
          </Link>
          <a
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
            href="/about"
            onClick={uncheckNav}
            className="font-lato text-lg  top-0 overflow-hidden p-2 flex flex-row items-center"
          >
            About
          </a>
          <Link
            activeClass="active"
            to="get-in-touch"
            spy={true}
            smooth={true}
            duration={500}
            className="block md:inline-block p-2 no-underline border-none"
          >
            <a
              href="/#get-in-touch"
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              className="cursor-pointer font-lato text-lg block md:inline-block p-2 no-underline border-none"
            >
              Contact
            </a>
          </Link>
          <a
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1gdC7zdeDq_ZZZVhfR79LOOZrqUFiqytM/view?usp=sharing"
            onClick={uncheckNav}
            className="font-lato text-lg  top-0 overflow-hidden pl-2 flex flex-row items-center"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Scroll Up Navbar */}
      <div
        onMouseEnter={imageEnter}
        style={{ zIndex: "150 !important" }}
        className={`navContainer ${
          show && "md:hidden"
        } text-brand-gray bg-brand-black zed hidden md:flex w-screen top-0 fixed  flex-row justify-between items-center md:px-24 md:py-5`}
      >
        <a href="/" className="flex items-center">
          <div
            className="font-lora-italic text-2xl top-0 overflow-hidden  flex flex-row items-center "
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
            style={{ color: "#b5b5b5" }}
          >
            S
          </div>
        </a>

        <div className="flex flex-row text-brand-gray font-lato text-lg ">
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            className="block md:inline-block p-2 no-underline border-none"
          >
            <a
              href="/#work"
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              className="text-lg font-lato cursor-pointer block md:inline-block no-underline border-none"
            >
              Work
            </a>
          </Link>{" "}
          <a
            className="p-2"
            href="/about"
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
          >
            About
          </a>
          <Link
            activeClass="active"
            to="get-in-touch"
            spy={true}
            smooth={true}
            duration={500}
            className="block md:inline-block p-2 no-underline border-none"
          >
            <a
              href="/#get-in-touch"
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              className="cursor-pointer font-lato text-lg block md:inline-block no-underline border-none"
            >
              Contact
            </a>
          </Link>
          <a
            className="pl-5 p-2"
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1gdC7zdeDq_ZZZVhfR79LOOZrqUFiqytM/view?usp=sharing"
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
          >
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}

      <div className="md:hidden bg-brand-black text-brand-gray overflow-hidden p-1 top-0 fixed z-50 w-full flex justify-between items-center h-auto">
        <a href="/" className="ml-5 font-lora-italic text-2xl">
          S
        </a>
        <nav
          id="sideMenu"
          className="text-xl sideMenu fixed  p-36 text-center bg-brand-black inset-y-0 right-0 transform transition items-center translate-x-full duration-500 ease-in-out uppercase min-h-screen w-full flex z-10 flex-col justify-around min-w-screen"
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
            width="60"
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
