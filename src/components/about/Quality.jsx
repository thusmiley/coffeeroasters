import React from "react";

const Quality = () => {
  return (
    <section>
      <div className="w-container px-cx mx-auto mt-[198px] flexCenter flex-col text-center bg-dark-gray rounded-[10px] text-cream pt-6 px-6 pb-[61px] md:mt-[304px] md:px-[74px] md:pb-[67px] xl:flex-row-reverse xl:items-start xl:text-left xl:px-[85px] xl:py-[88px]">
        <picture>
          <source media="(max-width: 480px)" srcset="/src/assets/about/mobile/image-quality.jpg" />
          <source media="(max-width: 1200px)" srcset="/src/assets/about/tablet/image-quality.jpg" />
          <source media="(min-width: 1201px)" srcset="/src/assets/about/desktop/image-quality.jpg" />
          <img
            src="/src/assets/about/mobile/image-quality.jpg"
            alt="Uncompromising quality"
            className="rounded-[10px] mb-[64px] mt-[-110px] md:mt-[-170px] xl:mb-0 xl:ml-[125px]"
          />
        </picture>

        <div className="xl:w-[50%]">
          <h2 className="font-fraunces text-[28px] leading-[28px] md:text-[32px] md:leading-[48px] xl:text-[40px]"> Uncompromising quality</h2>
          <p className="paragraph mt-6">
            Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid
            over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quality;
