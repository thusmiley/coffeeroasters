import React from "react";

const Hero = () => {
  return (
    <section className="w-container px-cx mx-auto px-6 pt-[104px] pb-[160px] text-cream text-center home-hero-bg rounded-[10px] mt-[90px] md:mt-[120px] md:px-[58px] md:text-left md:ml-0 xl:mt-[113px] xl:pt-[117px] xl:pl-[85px] xl:pb-[173px]">
      <h1 className="heading1 md:text-left">
        Great coffee
        <br className="hidden md:block" /> made simple.
      </h1>
      <p className="paragraph mt-6 mb-6 md:max-w-[398px] md:text-left xl:mt-8 xl:mb-[56px] xl:max-w-[445px]">
        Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
      </p>
      <a href="/plan" className="cta md:float-left">
        Create your plan
      </a>
    </section>
  );
};

export default Hero;
