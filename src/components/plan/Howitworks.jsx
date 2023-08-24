import React from 'react'

const Howitworks = () => {
  return (
    <section className="bg-dark-gray rounded-[10px] xl:px-[85px] my-[120px] md:my-[144px] text-cream xl:my-[168px] xl:w-container xl:px-cx xl:mx-auto">
      <div className="w-container px-cx mx-auto flexCenter flex-col relative xl:w-[100%]">
        <div className="text-center py-20 md:py-[97px] md:flex">
          {/* orange line */}
          <div className="hidden md:block absolute top-[110px] left-[15px] bg-orange h-[2px] w-[69.5%] xl:w-[74.2%]" />

          <div className="mb-[56px] md:mb-0 md:text-left">
            {/* circle */}
            <div className="hidden md:block rounded-full border-cyan bg-dark-gray h-[30px] w-[30px] border-[2px] mb-14" />
            <span className="text-orange text-[72px] leading-[72px] font-fraunces">01</span>
            <h3 className="text-[28px] leading-[32px] font-fraunces my-6 md:my-10 xl:text-[32px] xl:leading-[36px]">
              Pick your
              <br className="hidden md:block" /> coffee
            </h3>
            <p className="paragraph">
              Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month
              for you to try out.
            </p>
          </div>

          <div className="mb-[56px] md:mb-0 md:mx-[10px] xl:mx-[95px] md:text-left">
            {/* circle */}
            <div className="hidden md:block rounded-full border-cyan bg-dark-gray h-[30px] w-[30px] border-[2px] mb-14" />
            <span className="text-orange text-[72px] leading-[72px] font-fraunces">02</span>
            <h3 className="text-[28px] leading-[32px] font-fraunces my-6 md:my-10 xl:text-[32px] xl:leading-[36px]">
              Choose the
              <br className="hidden md:block" /> frequency
            </h3>
            <p className="paragraph">
              Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.
            </p>
          </div>

          <div className="md:text-left">
            {/* circle */}
            <div className="hidden md:block rounded-full border-cyan bg-dark-gray h-[30px] w-[30px] border-[2px] mb-14" />
            <span className="text-orange text-[72px] leading-[72px] font-fraunces">03</span>
            <h3 className="text-[28px] leading-[32px] font-fraunces my-6 md:my-10 xl:text-[32px] xl:leading-[36px]">
              Receive and
              <br className="hidden md:block" /> enjoy!
            </h3>
            <p className="paragraph">
              We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Howitworks