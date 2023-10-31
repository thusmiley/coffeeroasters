import React from "react";
import qualitymobile from "../../assets/about/mobile/image-quality.jpg";
import qualitytablet from "../../assets/about/tablet/image-quality.jpg";
import qualitydesktop from "../../assets/about/desktop/image-quality.jpg";

const Quality = () => {
  return (
    <section>
      <div className="w-container px-cx mx-auto mt-[198px] flexCenter flex-col text-center bg-dark-gray rounded-[10px] text-cream pt-6 px-6 pb-[61px] md:mt-[304px] md:px-[74px] md:pb-[67px] xl:flex-row-reverse xl:items-center xl:text-left xl:px-[85px] xl:py-[88px]">
        <picture>
          <source media="(max-width: 480px)" srcset={qualitymobile} />
          <source media={qualitytablet} />
          <source media="(min-width: 1201px)" srcset={qualitydesktop} />
          <img src={qualitymobile} alt="Uncompromising quality" className="rounded-[10px] mb-[64px] mt-[-110px] md:mt-[-170px] xl:mb-0 xl:ml-[125px]" />
        </picture>

        <div className="xl:w-[50%]">
          <h2 className="font-fraunces text-[28px] leading-[28px] md:text-[32px] md:leading-[48px] xl:text-[40px] xl:text-left"> Uncompromising quality</h2>
          <p className="paragraph mt-6 xl:text-left">
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
