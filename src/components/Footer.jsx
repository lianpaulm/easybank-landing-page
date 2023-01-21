import React from "react";
import Logo from "../assets/images/logo-light.svg";
import { socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="bg-dark-blue p-[40px] md:px-[24px] md:py-[55px]">
      {/* grid container */}
      <div className="max-w-[1110px] mx-auto flex flex-col md:flex-row items-center md:items-start xl:gap-[130px] lg:gap-[80px] gap-[40px] md:gap-[50px]">
        <div className=" shrink-0">
          {/* logo */}
          <img src={Logo} alt="logo" className="mx-auto md:mx-0" />
          {/* social icons */}
          <div className="flex gap-[16px] md:gap-[13px]  xl:mt-[60px] mt-[30px] lg:mt-[60px] md:mt-[54px]">
            {socialLinks.map((link, index) => {
              const { url, icon, name } = link;
              return (
                <a
                  href={url}
                  key={index}
                  aria-label={name}
                  className="text-white hover:text-lime-green transition-colors md:w-[20px] w-[24px]"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>

        {/* links */}
        <div className="text-white grid md:flex xl:gap-[130px] lg:gap-[80px] md:gap-[50px] gap-[15px] text-[1rem] md:text-[.9rem] lg:text-[1rem] text-center md:text-start ">
          <div className="flex flex-col gap-[15px] ">
            <a href="#" className="hover:text-lime-green transition-colors">
              About Us
            </a>
            <a href="#" className="hover:text-lime-green transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-lime-green transition-colors">
              Blog
            </a>
          </div>
          <div className="flex flex-col gap-[15px]">
            <a href="#" className="hover:text-lime-green transition-colors">
              Careers
            </a>
            <a href="#" className="hover:text-lime-green transition-colors">
              Support
            </a>
            <a href="#" className="hover:text-lime-green transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* copyright */}
        <div className="md:ml-auto h-full grid">
          {/* footer cta */}
          <button className="md:mx-0 mx-auto md:ml-[auto] mb-[1.8rem] text-white py-3 px-8 rounded-full bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-75 transition-opacity">
            Request Invite
          </button>
          <p className="text-[1rem] md:text-[.9rem] lg:text-[1rem]">
            &#169; Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
