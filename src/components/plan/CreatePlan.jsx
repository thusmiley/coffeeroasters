import { useState, useEffect } from "react";
import { planData, sideMenu } from "../../constants";
import { Disclosure } from "@headlessui/react";
import arrowUp from "../../assets/plan/desktop/icon-arrow-up.svg";
import arrowDown from "../../assets/plan/desktop/icon-arrow-down.svg";
import { useForm } from "react-hook-form";

const CreatePlan = () => {
  const [preference, setPreference] = useState(null);
  const [bean, setBean] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [grind, setGrind] = useState(null);
  const [delivery, setDelivery] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [chosenQuantity, setChosenQuantity] = useState(null);
  const [chosenDelivery, setChosenDelivery] = useState(null);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const chooseOptions = (plan, option) => {
    switch (plan) {
      case "preference":
        setPreference(option);
        break;
      case "bean":
        setBean(option);
        break;
      case "quantity":
        setQuantity(option);
        break;
      case "grind":
        setGrind(option);
        break;
      case "delivery":
        setDelivery(option);
        break;
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    setChosenQuantity(data.quantity);
    setChosenDelivery(data.delivery);
    setOpenModal(!openModal);
  };

  const pricing = [
    {
      price: {
        "250g": "8",
        "500g": "9",
        "1000g": "12",
      },
      shipping: { "250g": "7.2", "500g": "9.6", "1000g": "12" },
    },
  ];

  const totalCost = () => {
    switch (chosenQuantity) {
      case "250g":
        switch (chosenDelivery) {
          case "Every week":
            return Math.round(
              4 * pricing[0].price["250g"] * pricing[0].shipping["250g"]
            ).toFixed(2);
            break;

          case "Every 2 weeks":
            return Math.round(
              2 * pricing[0].price["250g"] * pricing[0].shipping["250g"]
            ).toFixed(2);
            break;

          case "Every month":
            return Math.round(
              pricing[0].price["250g"] * pricing[0].shipping["250g"]
            ).toFixed(2);
            break;
        }
        break;
      case "500g":
        switch (chosenDelivery) {
          case "Every week":
            return Math.round(
              4 * pricing[0].price["500g"] * pricing[0].shipping["500g"]
            ).toFixed(2);
            break;

          case "Every 2 weeks":
            return Math.round(
              2 * pricing[0].price["500g"] * pricing[0].shipping["500g"]
            ).toFixed(2);
            break;

          case "Every month":
            return Math.round(
              pricing[0].price["500g"] * pricing[0].shipping["500g"]
            ).toFixed(2);
            break;
        }
        break;
      case "1000g":
        switch (chosenDelivery) {
          case "Every week":
            return Math.round(
              4 * pricing[0].price["1000g"] * pricing[0].shipping["1000g"]
            ).toFixed(2);
            break;

          case "Every 2 weeks":
            return Math.round(
              2 * pricing[0].price["1000g"] * pricing[0].shipping["1000g"]
            ).toFixed(2);
            break;

          case "Every month":
            return Math.round(
              pricing[0].price["1000g"] * pricing[0].shipping["1000g"]
            ).toFixed(2);
            break;
        }
        break;
    }
  };

  const checkout = () => {
    reset();
    setOpenModal(!openModal);
    setPreference(null);
    setBean(null);
    setDelivery(null);
    setGrind(null);
    setQuantity(null);
  };

  return (
    <section className="relative px-6 mx-auto md:px-10 xl:px-[165px] 2xl:flex max-w-[1280px]">
      {/* side menu  */}
      <div className="hidden 2xl:flex flex-col -mt-5 mr-[120px] w-[30%] divide-y-[1px] divide-[#979797]">
        {sideMenu.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="heading3 py-6 hover:opacity-60 cursor-pointer"
          >
            <span className="mr-5 text-cyan">{item.num}</span>
            {item.name}
          </a>
        ))}
      </div>

      {/* accordion  */}
      <form
        className="space-y-4 md:space-y-10 2xl:w-[70%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* questions  */}
        {planData.map((plan) => (
          <div key={plan.id} className="">
            <Disclosure defaultOpen="true">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    id={plan.id}
                    className={`heading4 w-[100%] text-left relative cursor-pointer header-text flex justify-between items-center md:text-[32px] md:leading-[48px] xl:text-[40px]`}
                  >
                    {plan.question}
                    <img
                      src={arrowDown}
                      alt="open options"
                      className={`${
                        open
                          ? "-rotate-180 transform duration-200 ease-linear"
                          : ""
                      } ml-6`}
                    />
                  </Disclosure.Button>
                  <div
                    className={`relative flex flex-col mt-6 md:my-10 md:grid md:grid-cols-3 md:gap-3`}
                  >
                    {/* options  */}
                    {plan.options.map((option) => (
                      <Disclosure.Panel
                        key={option.id}
                        className={`relative mb-6`}
                      >
                        <input
                          type="radio"
                          id={`option${option.id}`}
                          {...register(`${plan.id}`, {
                            required: true,
                          })}
                          value={option.type}
                          className="peer appearance-none"
                          onClick={(e) => {
                            e.currentTarget.classList.toggle("activeOption");
                            chooseOptions(plan.id, option.type);
                          }}
                        />
                        <label
                          htmlFor={`option${option.id}`}
                          className="w-full min-h-[140px] bg-[#F4F1EB] p-6 rounded-[10px] cursor-pointer hover:bg-orange hover:text-dark-gray focus:bg-orange md:mb-0 peer-checked:text-white peer-checked:bg-cyan md:min-h-[250px]"
                        >
                          <h3 className="cursor-pointer  heading3 mb-2">
                            {option.type}
                          </h3>
                          <p className="cursor-pointer paragraph md:mt-4">
                            {option.desc}
                          </p>
                        </label>
                      </Disclosure.Panel>
                    ))}
                  </div>
                </>
              )}
            </Disclosure>
          </div>
        ))}

        {/* summary  */}
        <div className="mb-[120px] flexCenter flex-col md:mb-[144px] 2xl:inline">
          <div className="bg-dark-gray rounded-[10px] text-cream py-8 px-6 md:py-[27px] md:px-11 xl:px-[64px] 2xl:mt-20">
            <span className="text-white opacity-50 paragraph">
              ORDER SUMMARY
            </span>
            <p className="summary-text mt-2 2xl:max-w-[730px]">
              “I drink my coffee as &nbsp;
              <span className="text-cyan">
                {preference === null ? "______" : preference}
              </span>
              , with a &nbsp;
              <span className="text-cyan">
                {bean === null ? "______" : bean}
              </span>
              &nbsp; type of bean. &nbsp;
              <span className="text-cyan">
                {quantity === null ? "______" : quantity}
              </span>
              &nbsp; ground ala &nbsp;
              <span className="text-cyan">
                {grind === null ? "______" : grind}
              </span>
              , sent to me &nbsp;
              <span className="text-cyan">
                {delivery === null ? "______" : delivery}
              </span>
              .”
            </p>
          </div>
          <button
            type="submit"
            className="order-btn mb-[100px] cta mt-[56px] md:mt-10 2xl:float-right 2xl:mb-[168px]"
          >
            Create my plan!
          </button>
        </div>
      </form>

      {/* checkout modal */}
      {openModal && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black/70 z-30"
          onClick={() => setOpenModal(!openModal)}
        />
      )}

      {openModal && (
        <div className="fixed z-30 w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-6 max-w-[540px] md:px-0">
          <div className="rounded-[12px] flexCenter flex-col bg-cream">
            <div className="bg-dark-gray py-7 px-6 rounded-t-[10px] w-[100%] md:py-12 md:px-[56px]">
              <h2 className="font-fraunces text-[28px] leading-[32px] text-cream md:text-[40px] md:leading-[48px]">
                Order Summary
              </h2>
            </div>

            <p className="summary-text text-gray px-6 mt-10 md:px-[56px] md:mt-[56px]">
              “I drink my coffee as &nbsp;
              <span className="text-cyan">{preference}</span>, with a &nbsp;
              <span className="text-cyan">{bean}</span>&nbsp; type of bean.
              &nbsp;
              <span className="text-cyan">{quantity}</span>
              &nbsp; ground ala &nbsp;
              <span className="text-cyan">{grind}</span>, sent to me &nbsp;
              <span className="text-cyan">{delivery}</span>.”
            </p>
            <p className="px-6 mb-6 paragraph md:px-[56px] md:mt-[7px] md:mb-[47px]">
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.
            </p>
            <div className="px-6 w-full">
              <button
                type="button"
                className="mb-6 cta w-full px-3 md:hidden"
                onClick={checkout}
              >
                Checkout - <span>{totalCost()}</span> / mo
              </button>
            </div>

            <div className="hidden md:flex flex-row pb-[56px] justify-between items-center w-[100%] px-[56px]">
              <p className="font-fraunces text-[32px] leading-[36px]">
                <span>{totalCost()}</span> / mo
              </p>
              <button
                type="button"
                className="cta w-[150px] text-center px-auto"
                onClick={checkout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CreatePlan;
