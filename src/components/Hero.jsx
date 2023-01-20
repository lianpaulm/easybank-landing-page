import React from "react";
import mobileMockupsImg from "../assets/images/image-mockups.png";
import heroPatternD from "../assets/images/bg-intro-desktop.svg";
import heroPatternM from "../assets/images/bg-intro-mobile.svg";

const Hero = () => {
  return (
    <section className="px-4 md:px-6 overflow-x-clip">
      {/* container */}
      <div className=" md:h-[100vh] md:max-h-[736px] md:items-center md:grid-cols-[1fr_1fr] grid gap-[1.8rem] md:gap-1 mx-auto max-w-[1110px]">
        {/* hero img */}
        <div className="md:order-1 relative h-[355px] ">
          <img
            src={heroPatternD}
            alt="hero pattern"
            className="max-[767px]:hidden 2xl:top-[-18rem] xl:max-w-[1000px] xl:top-[-16rem] xl:left-[-5rem] lg:left-[-4rem] lg:top-[-12rem] lg:max-w-[780px] md:left-[-2rem] md:top-[-12rem] md:max-w-[750px] md:bottom-[unset] absolute max-w-[600px] bottom-[-15px] left-[50%] translate-x-[-50%] md:translate-x-0"
          />
          <img
            src={heroPatternM}
            alt="hero pattern"
            className="min-[768px]:hidden w-[100vw] absolute left-0 scale-110 -bottom-[40px] min-[450px]:-bottom-[70px] min-[550px]:-bottom-[110px] min-[610px]:-bottom-[120px] min-[660px]:-bottom-[170px]"
          />
          <img
            src={mobileMockupsImg}
            alt="mobile mockups"
            className="2xl:max-w-[760px] 2xl:top-[-15rem] xl:max-w-[680px] xl:left-[69px] xl:top-[-12rem] lg:top-[-8rem] lg:max-w-[560px] lg:left-[65px] md:top-[-6rem] md:max-w-[490px] md:left-[65px] md:bottom-[unset] md:translate-x-0 absolute max-w-[340px] bottom-0 left-[50%] translate-x-[-50%]"
          />
        </div>

        {/* hero text */}
        <div className="z-10 lg:mt-[70px] md:mt-[50px] md:text-left md:mb-0 mb-[80px] text-center ">
          <h1 className="lg:text-[56px] lg:leading-[64px] lg:mb-4 md:text-5xl md:leading-[54px] md:max-w-[450px] max-w-[360px] mx-auto md:mx-0 text-[2.6rem] leading-[44px] mb-5 ">
            Next generation digital banking
          </h1>
          <p className="lg:text-lg lg:mb-8 mb-7 md:max-w-[450px] max-w-[350px] mx-auto md:mx-0">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          {/* hero cta */}
          <button className=" text-white py-3 px-8 rounded-full bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-75 transition-opacity">
            Request Invite
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
