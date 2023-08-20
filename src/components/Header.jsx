import React from "react";
import logo from "../../src/assets/shared/desktop/logo.svg";
import close from "../../src/assets/shared/mobile/icon-close.svg";
import open from "../../src/assets/shared/mobile/icon-hamburger.svg";
import { useState, useEffect } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="mx-auto w-container">
      <div className="fixed top-0 py-8 flexBetween w-container bg-cream md:py-10">
        <a href="/">
          <img src={logo} alt="logo" className="w-[163px] md:w-[236px]" />
        </a>
        <nav>
          {/* desktop and tablet */}
          <ul className="hidden md:flex uppercase text-gray">
            <li className="mr-8 header-link">
              <a href="/">Home</a>
            </li>
            <li className="mr-8 header-link">
              <a href="/about">About Us</a>
            </li>
            <li className="header-link">
              <a href="/plan">Create Your Plan</a>
            </li>
          </ul>

          {/* mobile */}
          <div className="md:hidden">
            {/* overlay */}
            <div className={`${!toggle ? "hidden" : "fixed"} top-[80px] bottom-0 left-0 right-0 bg-overlay`} />

            {/* open/close buttons */}
            <img src={toggle ? close : open} alt="menu" onClick={() => setToggle(!toggle)} className="cursor-pointer z-10" />

            {/* nav  */}
            <ul
              className={`${
                !toggle ? "hidden" : "flex"
              } absolute justify-center items-center flex-col top-[130px] left-0 right-0 mx-auto sidebar text-[24px] leading-[32px] font-[900] font-fraunces`}
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li className="my-8">
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/plan">Create Your Plan</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
