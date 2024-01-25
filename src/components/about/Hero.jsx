import React from "react";

const Hero = () => {
  return (
    <section className="px-6 mx-auto md:px-10 xl:px-20 max-w-[1280px]">
      <div className="about-hero-bg px-6 text-cream text-center py-[100px] mt-[83px] rounded-[10px] md:mt-[119px] md:py-[118px] md:pl-[58px] md:text-left xl:py-[137px] xl:pl-[85px]">
        <h1 className="font-fraunces text-[28px]  leading-[28px] md:text-left md:text-[32px] md:leading-[40px] xl:text-[40px] xl:leading-[48px]">
          About Us
        </h1>
        <p className="paragraph mt-6 md:ml-0 md:max-w-[398px] md:text-left xl:max-w-[445px]">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </section>
  );
};

export default Hero;
