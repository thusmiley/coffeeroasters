import React from "react";
import coffeeBean from "../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../../assets/home/desktop/icon-gift.svg";
import truck from "../../assets/home/desktop/icon-truck.svg";

const Features = () => {
  return (
    <section className="px-6 mx-auto h-[1550px] md:px-10 md:h-[1000px] lg:h-[950px] xl:h-[900px] xl:px-20 max-w-[1280px]">
      <div className="bg-dark-gray rounded-[10px] h-[902px] text-cream text-center flex flex-col py-[64px] px-6 md:h-[573px] md:p-[58px] xl:pt-[100px] xl:px-[85px]">
        <h2 className="font-fraunces text-[28px] leading-[28px] md:text-[32px] md:leading-[48px] xl:text-[40px]">
          Why choose us?
        </h2>
        <p className="paragraph mt-6 mb-[64px] md:mb-[70px] md:max-w-[540px] md:mx-auto xl:mt-8 xl:mb-[86px]">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>

        <div className="xl:flex">
          <div className="flexCenter flex-col bg-cyan pt-[72px] px-3 pb-[50px] rounded-[8px] mb-6 md:h-[180px] md:flex-row md:py-[41px] md:pl-[70px] md:pr-[48px] md:text-left xl:flex-col xl:pt-[70px] xl:px-10 xl:pb-10 xl:text-center xl:mb-0 xl:mr-[30px] xl:h-[382px]">
            <img
              src={coffeeBean}
              alt="coffee bean"
              className="w-[72px] h-[72px] object-contain object-center md:mr-[55px] md:h-[56px] md:w-[56px] xl:mr-0 xl:h-[72px] xl:w-[72px]"
            />
            <div>
              <h3 className="heading3 mt-[56px] mb-6 md:mt-0 md:mb-4 xl:mt-[56px]">
                Best quality
              </h3>
              <p className="paragraph md:max-w-[344px]">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>

          <div className="flexCenter flex-col bg-cyan pt-[72px] px-3 pb-[50px] rounded-[8px] mb-6 md:h-[180px] md:flex-row md:py-[41px] md:pl-[70px] md:pr-[48px] md:text-left xl:flex-col xl:pt-[70px] xl:px-10 xl:pb-10 xl:text-center xl:mb-0 xl:mr-[30px] xl:h-[382px]">
            <img
              src={gift}
              alt="coffee bean"
              className="w-[72px] h-[72px] object-contain object-center md:mr-[55px] md:h-[56px] md:w-[56px] xl:mr-0 xl:h-[72px] xl:w-[72px]"
            />

            <div>
              <h3 className="heading3 mt-[56px] mb-6 md:mt-0 md:mb-4 xl:mt-[56px]">
                Exclusive benefits
              </h3>
              <p className="paragraph md:max-w-[344px]">
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </div>

          <div className="flexCenter flex-col bg-cyan pt-[72px] px-3 pb-[50px] rounded-[8px] md:h-[180px] md:flex-row md:py-[41px] md:pl-[70px] md:pr-[48px] md:text-left xl:flex-col xl:pt-[70px] xl:px-10 xl:pb-10 xl:text-center xl:mb-0 xl:h-[382px]">
            <img
              src={truck}
              alt="coffee bean"
              className="w-[72px] h-[72px] object-contain object-center md:mr-[55px] md:h-[56px] md:w-[56px] xl:mr-0 xl:h-[72px] xl:w-[72px]"
            />

            <div>
              <h3 className="heading3 mt-[56px] mb-6 md:mt-0 md:mb-4 xl:mt-[56px]">
                Free shipping
              </h3>
              <p className="paragraph md:max-w-[344px]">
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
