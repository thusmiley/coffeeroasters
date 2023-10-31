import React from "react";
import commitmentmobile from "../../assets/about/mobile/image-commitment.jpg";
import commitmenttablet from "../../assets/about/tablet/image-commitment.jpg";
import commitmentdesktop from "../../assets/about/desktop/image-commitment.jpg";

const Commitment = () => {
  return (
    <section className="w-container px-cx mx-auto mt-[120px] flexCenter flex-col text-center md:mt-[144px] md:flex-row md:text-left xl:mt-[168px] xl:px-[85px]">
      <picture>
        <source media="(max-width: 480px)" srcset={commitmentmobile} />
        <source media="(max-width: 1200px)" srcset={commitmenttablet} />
        <source media="(min-width: 1201px)" srcset={commitmentdesktop} />
        <img src={commitmentmobile} alt="our commitment" className="rounded-[10px] md:min-w-[281px] mb-12 md:mb-0 md:mr-[69px] md:w-[50%] xl:mr-[125px] xl:min-w-[445px]" />
      </picture>

      <div className="md:w-[50%] md:text-left">
        <h2 className="font-fraunces text-[32px]  leading-[48px] mb-[30px] md:text-left xl:text-[40px] xl:mb-8">Our commitment</h2>
        <p className="paragraph md:text-left">
          We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all
          starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of
          these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer
          training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </section>
  );
};

export default Commitment;
