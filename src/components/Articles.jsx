import React from "react";
import { articles } from "../data";

const Articles = () => {
  return (
    <section className="px-4 py-[70px] md:px-[24px] md:py-[90px] xl:py-[98px] ">
      {/* container */}
      <div className="max-w-[1110px] mx-auto ">
        <h2 className="xl:text-[2.3rem] md:text-[2.2rem] lg:mb-[50px] mb-[35px] text-[2rem] leading-10 text-center md:text-left">
          Latest Articles
        </h2>

        {/* grid articles */}
        <div className="grid lg:grid-cols-[repeat(4,1fr)] md:grid-cols-[repeat(2,1fr)] gap-[24px] md:gap-[30px] ">
          {articles.map((item, index) => {
            const { image, author, title, text } = item;
            return (
              <div
                key={index}
                className="max-w-[350px] md:max-w-none mx-auto md:mx-0 bg-white cursor-pointer rounded-[4px] overflow-hidden"
              >
                <img
                  src={image}
                  alt=""
                  className="h-[200px] w-full object-cover"
                />
                <div className="lg:p-[25px] p-[30px] ">
                  <p className="text-[.7rem] mb-[.4rem]">By {author}</p>
                  <h3 className="lg:text-[1rem] leading-5 md:text-[1.1rem] mb-[10px] md:mb-[12px]">
                    {title}
                  </h3>
                  <p className="text-[.8rem] md:text-[.78rem]">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Articles;
