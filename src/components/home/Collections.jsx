import React from "react";
import gran from "../../assets/home/desktop/image-danche.png";
import danche from "../../assets/home/desktop/image-danche.png";
import piccollo from "../../assets/home/desktop/image-piccollo.png";
import planalto from "../../assets/home/desktop/image-planalto.png";

const Collections = () => {
  return (
    <section className="px-6 mx-auto flexCenter flex-col my-[120px] md:px-10 md:my-[144px] xl:mt-[136px] xl:mb-50 xl:px-[165px] max-w-[1280px]">
      <h2 className="heading2 text-transparent bg-clip-text bg-gradient-to-b from-[#83888F] to-[#fefcf7] md:text-[96px] md:leading-[72px] xl:pt-4 xl:text-[150px]">
        our collection
      </h2>

      <div className="md:mt-[-70px] md:max-w-[573px] xl:flex xl:max-w-[100%] xl:mt-[-15px]">
        <div className="mt-[48px] text-center  md:flex md:text-left md:items-center xl:flex-col xl:mr-[30px] xl:mt-0 xl:text-center">
          <img
            src={gran}
            alt="Gran Espresso"
            className="md:w-[255px] md:h-[193px] md:mr-9 xl:mr-0"
          />
          <div>
            <h3 className="heading3 mt-6 mb-4 md:mt-0 md:mb-6 md:text-left xl:mt-[71px] xl:mb-6 xl:text-center">
              Gran Espresso
            </h3>
            <p className="max-w-[282px] mx-auto md:text-left xl:text-center">
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </div>
        </div>

        <div className="mt-[60px] text-center md:flex md:text-left md:items-center xl:flex-col xl:mr-[30px] xl:mt-0 xl:text-center">
          <img
            src={planalto}
            alt="Planalto"
            className="md:w-[255px] md:h-[193px] md:mr-9 xl:mr-0"
          />
          <div>
            <h3 className="heading3 mt-6 mb-4 md:mt-0 md:mb-6 md:text-left xl:mt-[71px] xl:mb-6 xl:text-center">
              Planalto
            </h3>
            <p className="max-w-[282px] mx-auto md:text-left xl:text-center">
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </div>
        </div>

        <div className="mt-[60px] text-center md:flex md:text-left md:items-center xl:flex-col xl:mr-[30px] xl:mt-0 xl:text-center">
          <img
            src={piccollo}
            alt="Piccollo"
            className="md:w-[255px] md:h-[193px] md:mr-9 xl:mr-0"
          />
          <div>
            <h3 className="heading3 mt-6 mb-4 md:mt-0 md:mb-6 md:text-left xl:mt-[71px] xl:mb-6 xl:text-center">
              Piccollo
            </h3>
            <p className="max-w-[282px] mx-auto md:text-left xl:text-center">
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry{" "}
            </p>
          </div>
        </div>

        <div className="mt-[60px] text-center md:flex md:text-left md:items-center xl:flex-col xl:mt-0 xl:text-center">
          <img
            src={danche}
            alt="Danche"
            className="md:w-[255px] md:h-[193px] md:mr-9 xl:mr-0"
          />
          <div>
            <h3 className="heading3 mt-6 mb-4 md:mt-0 md:mb-6 md:text-left xl:mt-[71px] xl:mb-6 xl:text-center">
              Danche
            </h3>
            <p className="max-w-[282px] mx-auto md:text-left xl:text-center">
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
