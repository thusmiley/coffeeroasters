import React from "react";

const Hero = () => {
  return (
    <section className="px-6 mx-auto text-cream text-center mt-[83px] md:mt-[120px] md:px-10 xl:px-20 max-w-[1280px]">
      <div className="home-hero-bg pt-[100px] pb-[120px] px-6 rounded-[10px] md:px-[58px] md:pb-[160px] md:text-left md:ml-0 xl:mt-[113px] xl:pt-[117px] xl:pl-[85px] xl:pb-[180px]">
        <h1 className="heading1 md:text-left">
          Great coffee
          <br className="hidden md:block" /> made simple.
        </h1>
        <p className="paragraph mt-6 mb-10 md:max-w-[398px] md:text-left xl:mt-8 xl:max-w-[445px]">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <a href="/plan" className="cta md:float-left">
          Create your plan
        </a>
      </div>
    </section>
  );
};

export default Hero;
