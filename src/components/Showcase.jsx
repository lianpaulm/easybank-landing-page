import React from "react";
import { showcaseItems } from "../data";

const Showcase = () => {
  return (
    <section className="bg-light-grayish-blue px-4 py-[70px] md:px-[24px] md:py-[90px] xl:pt-[98px] xl:pb-[108px] ">
      {/* container */}
      <div className="max-w-[1110px] mx-auto ">
        {/* heading */}
        <div className="lg:mb-[72px] mb-[70px] md:text-left text-center">
          <h2 className="xl:text-[2.3rem] md:text-[2.2rem] lg:mb-6 md:mb-5 mb-4 text-[2rem] leading-10 max-w-[250px] md:max-w-none mx-auto md:mx-0">
            Why choose Easybank?
          </h2>
          <p className="xl:text-lg lg:max-w-[640px] md:max-w-[610px] max-w-[350px] mx-auto md:mx-0">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        {/* grid showcase */}
        <div className="grid lg:grid-cols-[repeat(4,1fr)] md:grid-cols-[repeat(2,1fr)] gap-[38px] md:gap-[40px] lg:gap-[30px] text-center md:text-left">
          {showcaseItems.map((item, index) => {
            const { icon, title, text } = item;
            return (
              <div key={index}>
                <img
                  src={icon}
                  alt=""
                  className="w-[72px] h-[72px] md:mx-0 mx-auto mb-[25px] md:mb-[32px]"
                />
                <h3 className="text-[1.3rem] md:text-[1.5rem] mb-[18px] md:mb-[20px]">
                  {title}
                </h3>
                <p className="max-w-[350px] md:max-w-none mx-auto md:mx-0">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
