import React from "react";

const Howitworks = () => {
  return (
    <section className="px-6 mx-auto md:px-10 xl:px-[165px] max-w-[1280px]">
      <div className="flexCenter flex-col mb-[140px] relative md:text-left md:justify-start xl:mb-[180px]">
        <h2 className="text-[#83888F] heading3 mb-20 md:ml-0 md:w-[100%]">
          How it works
        </h2>

        <div className="max-w-[327px] mx-auto text-center md:max-w-full md:flex md:text-left">
          {/* orange line */}
          <div className="hidden md:block absolute top-[125px] bg-orange h-[2px] w-[70%] -z-[10] xl:w-[75%]" />

          <div className="mb-[56px] md:text-left md:mb-0">
            {/* circle */}
            <div className="hidden md:block rounded-full border-cyan bg-cream h-[30px] w-[30px] border-[2px] mb-14" />
            <span className="text-orange text-[72px] leading-[72px] font-fraunces  ">
              01
            </span>
            <h3 className="text-[28px] leading-[32px] font-fraunces my-6 md:my-10 xl:text-[32px] xl:leading-[36px]">
              Pick your
              <br className="hidden md:block" /> coffee
            </h3>
            <p className="paragraph">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>

          <div className="mb-[56px] md:mb-0 md:mx-[10px] md:text-left xl:mx-[95px]">
            {/* circle */}
            <div className="hidden md:block rounded-full border-cyan bg-cream  h-[30px] w-[30px] border-[2px] mb-14" />
            <span className="text-orange text-[72px] leading-[72px] font-fraunces">
              02
            </span>
            <h3 className="text-[28px] leading-[32px] font-fraunces my-6 md:my-10 xl:text-[32px] xl:leading-[36px]">
              Choose the
              <br className="hidden md:block" /> frequency
            </h3>
            <p className="paragraph">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>

          <div className="mb-[79px] md:mb-0 md:text-left">
            {/* circle */}
            <div className="hidden md:block rounded-full border-cyan bg-cream  h-[30px] w-[30px] border-[2px] mb-14" />
            <span className="text-orange text-[72px] leading-[72px] font-fraunces">
              03
            </span>
            <h3 className="text-[28px] leading-[32px] font-fraunces my-6 md:my-10 xl:text-[32px] xl:leading-[36px]">
              Receive and
              <br className="hidden md:block" /> enjoy!
            </h3>
            <p className="paragraph">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>

        <button className="text-left w-full mt-[60px]">
          <a href="/plan" className="cta text-center md:w-[250px] md:ml-0">
            Create your plan
          </a>
        </button>
      </div>
    </section>
  );
};

export default Howitworks;
