import React from "react";
import logo from "../../src/assets/shared/desktop/logo.svg";
import close from "../../src/assets/shared/mobile/icon-close.svg";
import open from "../../src/assets/shared/mobile/icon-hamburger.svg";
import { useState, useEffect } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [hideMenuOnScroll, setHideMenuOnScroll] = useState(false);
  const pathname = window.location.pathname;

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHideMenuOnScroll(true);
      setToggle(false);
    } else {
      setHideMenuOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        !hideMenuOnScroll ? "top-0" : "top-[-82px] md:top-[-119px]"
      } transition-all duration-500 ease-in-out fixed left-0 right-0 py-8 bg-cream md:py-10 z-20 max-w-[1280px] mx-auto`}
    >
      <div className="flexBetween px-6 mx-auto md:px-10 xl:px-20">
        <a href="/">
          <img src={logo} alt="logo" className="w-[163px] md:w-[236px]" />
        </a>
        <nav>
          {/* desktop and tablet */}
          <ul className="hidden md:flex uppercase text-gray md:space-x-8">
            <li className="header-link">
              <a href="/" className={pathname == "/" ? "text-dark-gray" : ""}>
                Home
              </a>
            </li>
            <li className="header-link">
              <a
                href="/about"
                className={pathname == "/about" ? "text-dark-gray" : ""}
              >
                About Us
              </a>
            </li>
            <li className="header-link">
              <a
                href="/plan"
                className={pathname == "/plan" ? "text-dark-gray" : ""}
              >
                Create Your Plan
              </a>
            </li>
          </ul>

          {/* mobile */}
          <div className="md:hidden">
            {/* overlay */}
            <div
              className={`${
                !toggle ? "hidden" : "fixed"
              } top-[80px] bottom-0 left-0 right-0 bg-overlay`}
              onClick={() => setToggle(!toggle)}
            />

            {/* open/close buttons */}
            <img
              src={toggle ? close : open}
              alt="menu"
              onClick={() => setToggle(!toggle)}
              className="cursor-pointer z-10"
            />

            {/* nav  */}
            <ul
              className={`${
                !toggle ? "hidden" : "flex"
              } absolute justify-center items-center flex-col space-y-8 top-[130px] left-0 right-0 mx-auto sidebar text-[24px] leading-[32px] font-[900] font-fraunces`}
            >
              <li>
                <a href="/" className={pathname == "/" ? "text-gray" : ""}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={pathname == "/about" ? "text-gray" : ""}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/plan"
                  className={pathname == "/plan" ? "text-gray" : ""}
                >
                  Create Your Plan
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
