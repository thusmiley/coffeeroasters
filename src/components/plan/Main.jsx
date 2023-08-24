import React, { useState, useEffect } from "react";
import { planData } from "../../constants";

const Main = () => {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    setShow(!show);
    const btn = e.target;
    const parent = btn.parentElement;
    const attribute = btn.getAttribute("data-target");
    const option = parent.nextSibling;
    const question = parent.parentElement;

    question.classList.toggle("question-mb"); //add 80px margin below each question when expanded
    btn.classList.toggle("collapsed"); //rotate the arrow
    option.classList.toggle(attribute); //toggle the classes collapse${plan.id}
    option.classList.toggle("collapse-show"); //add card animation

    //handle side menu active state
    const btnId = e.target.id;
    const sideMenu = document.querySelectorAll(".sideMenu");

    switch (btnId) {
      case "btnpreference":
        sideMenu[0].classList.toggle('sidemenu-active');
        break;
      case "btnbean":
        sideMenu[1].classList.toggle('sidemenu-active');
        break;
      case "btnquantity":
        sideMenu[2].classList.toggle('sidemenu-active');
        break;
      case "btngrind":
        sideMenu[3].classList.toggle('sidemenu-active');
        break;
      case "btndelivery":
        sideMenu[4].classList.toggle('sidemenu-active');
        break;
    }
  };

  const initialState = {
    preference: null,
    bean: null,
    quantity: null,
    grind: null,
    delivery: null,
  };
  const [inputData, setInputData] = useState(initialState);

  const chosenPreference = inputData.preference === null ? "______" : inputData.preference;
  const chosenBean = inputData.bean === null ? "______" : inputData.bean;
  const chosenGrind = inputData.grind === null ? "______" : inputData.grind;
  const chosenQuantity = inputData.quantity === null ? "______" : inputData.quantity;
  const chosenDelivery = inputData.delivery === null ? "______" : inputData.delivery;

  const handleChange = (e) => {
    const { name, id } = e.target;
    setInputData({ ...inputData, [name]: id });
  };

  useEffect(() => {
    const orderBtn = document.querySelector(".order-btn");
    if (inputData.preference !== null && inputData.bean !== null && inputData.delivery !== null && inputData.grind !== null && inputData.quantity !== null) {
      orderBtn.classList.remove("disabled");
    } else {
      orderBtn.classList.add("disabled");
    }
  }, [inputData]);

  const handleSubmit = () => {};

  return (
    <section className="w-container px-cx mx-auto xl:px-[85px] 2xl:flex ">
      {/* side menu  */}
      <div className="hidden 2xl:flex flex-col mr-[125px] w-[30%]">
        <a href="#btnpreference" className="sideMenu heading3 border-b-[#979797] border-b-[1px] pb-6 mb-6 opacity-40 hover:opacity-60 cursor-pointer">
          <span className="mr-7 text-cyan">01</span>Preferences
        </a>
        <a href="#btnbean" className="sideMenu heading3 border-b-[#979797] border-b-[1px] pb-6 mb-6 opacity-40 hover:opacity-60 cursor-pointer">
          <span className="mr-7 text-cyan">02</span>Bean Type
        </a>
        <a href="#btnquantity" className="sideMenu heading3 border-b-[#979797] border-b-[1px] pb-6 mb-6 opacity-40 hover:opacity-60 cursor-pointer">
          <span className="mr-7 text-cyan">03</span>Quantity
        </a>
        <a href="#btngrind" className="sideMenu heading3 border-b-[#979797] border-b-[1px] pb-6 mb-6  opacity-40 hover:opacity-60 cursor-pointer">
          <span className="mr-7 text-cyan">04</span>Grind Option
        </a>
        <a href="#btndelivery" className="sideMenu heading3  opacity-40 hover:opacity-60 cursor-pointer">
          <span className="mr-7 text-cyan">05</span>Deliveries
        </a>
      </div>

      <div className="2xl-w-[70%]">
        {/* accordion  */}
        <div className="accordion ">
          {/* render questions */}
          {planData.map((plan) => (
            <div key={plan.id} className="accordion__item md:w-[100%]">
              <h2 className="mb-6 cursor-pointer flexBetween relative header-text md:mb-10 xl:mb-[56px]">
                <button
                  id={`btn${plan.id}`}
                  className="accordion-btn heading4 transition-all duration-300 ease-in-out w-[100%] text-left relative md:text-[32px] md:leading-[48px] xl:text-[40px]"
                  type="button"
                  data-toggle="collapse"
                  data-target={`collapse${plan.id}`}
                  aria-expanded={show}
                  aria-controls={`collapse${plan.id}`}
                  onClick={handleShow}
                >
                  {plan.question}
                </button>
              </h2>

              {/* render options */}
              <div id={`collapse${plan.id}`} className={`collapse${plan.id}`}>
                {plan.options.map((option) => (
                  <div key={option.id} className={` option relative flex flex-col  mb-4 md:mb-0 md:inline-flex md:flex-wrap md:mr-[10px]`}>
                    <input type="radio" name={plan.id} id={option.type} onChange={handleChange} />
                    <label
                      htmlFor={option.type}
                      className="bg-[#F4F1EB] p-6 rounded-[10px] cursor-pointer hover:bg-orange focus:bg-orange md:flex-1 md:max-w-[216px] md:min-h-[250px] md:pt-8 md:pl-[25px] lg:max-w-[260px] xl:max-w-[270px] 2xl:max-w-[210px]"
                    >
                      <h3 className="heading3 mb-2">{option.type}</h3>
                      <p className="paragraph md:mt-4">{option.desc}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* summary  */}
        <div>
          <form onSubmit={handleSubmit} className="my-[120px] flexCenter flex-col md:my-[144px] 2xl:inline">
            <div className="bg-dark-gray rounded-[10px] text-cream py-8 px-6 md:py-[27px] md:px-11 xl:px-[64px] 2xl:mt-20">
              <span className="text-white opacity-50 paragraph">ORDER SUMMARY</span>
              <p className="summary-text mt-2 2xl:max-w-[730px]">
                “I drink my coffee as <span className="text-cyan">{chosenPreference}</span>, with a <span className="text-cyan">{chosenBean}</span> type of bean.{" "}
                <span className="text-cyan">{chosenQuantity}</span>
                &nbsp; ground ala <span className="text-cyan">{chosenGrind}</span>, sent to me <span className="text-cyan">{chosenDelivery}</span>.”
              </p>
            </div>
            <button type="submit" className="order-btn cta mt-[56px] md:mt-10 2xl:float-right 2xl:mb-[168px]">
              Create my plan!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Main;
