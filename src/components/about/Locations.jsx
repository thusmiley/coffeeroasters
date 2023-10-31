import React from "react";
import uk from "../../assets/about/desktop/illustration-uk.svg";
import canada from "../../assets/about/desktop/illustration-canada.svg";
import australia from "../../assets/about/desktop/illustration-australia.svg";

const Locations = () => {
  return (
    <section className="w-container px-cx mx-auto text-center my-[120px] md:text-left md:my-[144px] xl:my-[168px] xl:px-[85px]">
      <h2 className="text-[#83888F] heading3 md:ml-0 md:w-[100%]">Our headquarters</h2>

      <div className="flexCenter flex-col md:flex-row md:mt-[72px] md:justify-between">
        <div className="flexCenter flex-col mt-[72px] md:mt-0 xl:justify-start xl:text-left">
          <img src={uk} alt="uk" className="w-full h-[50px] object-contain object-center xl:object-left" />
          <h3 className="text-[28px] leading-[36px] font-fraunces mt-12 mb-[22px] md:text-[24px] xl:text-[32px] xl:leading-[36px] xl:mt-[45px] xl:mb-6 xl:text-left">
            United Kingdom
          </h3>
          <p className="text-[16px] leading-[26px] xl:text-left w-full">
            68 Asfordby Rd <br />
            Alcaston <br />
            SY6 1YA <br />
            +44 1241 918425
          </p>
        </div>

        <div className="flexCenter flex-col mt-20 md:mt-0 xl:text-left xl:justify-start">
          <img src={canada} alt="canada" className="w-full h-[50px] object-contain object-center xl:object-left" />
          <h3 className="text-[28px] leading-[36px] font-fraunces mt-12 mb-[22px] w-full md:text-[24px] xl:text-[32px] xl:leading-[36px] xl:mt-[45px] xl:mb-6 xl:text-left xl:ml-0">
            Canada
          </h3>
          <p className="text-[16px] leading-[26px] xl:text-left">
            1528 Eglinton Avenue <br />
            Toronto <br />
            Ontario M4P 1A6 <br />
            +1 416 485 2997
          </p>
        </div>

        <div className="flexCenter flex-col mt-20 md:mt-0">
          <img src={australia} alt="australia" className="w-full h-[50px] object-contain object-center xl:object-left" />
          <h3 className="text-[28px] leading-[36px] font-fraunces mt-12 mb-[22px] w-full md:text-[24px] xl:text-[32px] xl:leading-[36px] xl:mt-[45px] xl:mb-6">Australia</h3>
          <p className="text-[16px] leading-[26px] xl:text-left w-full">
            36 Swanston Street <br />
            Kewell <br />
            Victoria <br />
            +61 4 9928 3629
          </p>
        </div>
      </div>
    </section>
  );
};

export default Locations;
