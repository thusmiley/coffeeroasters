import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="plan-hero-bg w-container px-cx mx-auto text-cream text-center pt-[111px] pb-[87px] mt-[90px] rounded-[10px] md:mt-[119px] md:py-[118px] md:pl-[58px] md:text-left xl:py-[137px] xl:pl-[85px]">
        <h1 className="heading1 md:text-[32px] md:leading-[40px] xl:text-[40px] xl:leading-[48px]">Create a plan</h1>
        <p className="paragraph mx-6 mt-6 md:ml-0 md:max-w-[398px] xl:max-w-[445px] xl:mt-8">
          Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.
        </p>
      </div>
    </section>
  );
};

export default Hero;
