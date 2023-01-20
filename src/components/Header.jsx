import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.svg";
import { navLinks } from "../data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // remove sidebar when width of window is greater then 768px
  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // remove scroll when sidebar open
  isMenuOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");

  return (
    <header className="fixed top-0 left-0 z-50 right-0 bg-white h-[60px] md:h-[80px] drop-shadow-sm px-4 md:px-6">
      {/* container */}
      <div className="flex items-center justify-between h-full max-w-[1110px] mx-auto  ">
        {/* logo */}
        <a href="#" className="shrink-0 max-w-[128px] md:max-w-none">
          <img src={Logo} alt="logo" />
        </a>

        {/* hamburger menu */}
        <button
          id="menu-btn"
          className={`${isMenuOpen && "open"} hamburger block md:hidden`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        {/* overlay bg */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden fixed inset-x-0 top-[60px] h-[100vh] bg-gradient-to-b from-dark-blue to-transparent opacity-90 border`}
          aria-hidden="true"
        ></div>

        {/* navbar */}
        <nav
          className={`md:static md:flex md:flex-row md:gap-8 md:p-0 md:rounded-none ${
            isMenuOpen ? "flex" : "hidden"
          } flex-col gap-4 items-center p-8 bg-white absolute top-[84px] left-[24px] right-[24px] rounded-md`}
        >
          {navLinks.map((link, index) => {
            return (
              <a
                href={link.url}
                key={index}
                className="nav-link text-lg md:text-base md:text-grayish-blue md:hover:text-dark-blue text-dark-blue transition-colors hover:text-grayish-blue"
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* nav cta */}
        <button className="hidden md:block text-white py-3 px-8 rounded-full bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-75 transition-opacity">
          Request Invite
        </button>
      </div>
    </header>
  );
};

export default Header;
