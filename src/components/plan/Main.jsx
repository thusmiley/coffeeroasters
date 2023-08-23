import React, { useState, useEffect } from "react";
import { planData } from "../../constants";

const Main = () => {
  // const [show, setShow] = useState(true);
  const initialStates = {
    preference: null,
    bean: null,
    quantity: null,
    grind: null,
    delivery: null,
  };

  const handleShow = (e) => {
    // setShow(!show);
    const btn = e.target;
    const parent = btn.parentElement;
    const attribute = btn.getAttribute("data-target");
    const option = parent.nextSibling;
    const question = parent.parentElement;

    question.classList.toggle("question-mb"); //add 110px margin below each question when expanded
    btn.classList.toggle("collapsed"); //rotate the arrow
    option.classList.toggle(attribute); //toggle class collapse${plan.id}
    option.classList.toggle("collapse-show"); //add card animation
  };

  return (
    <section className="w-container px-cx mx-auto">
      <div className="accordion border-none">
        {/* render questions */}
        {planData.map((plan) => (
          <div key={plan.id} className="accordion__item">
            <h2 className="mb-[18px] cursor-pointer flexBetween relative header-text">
              <button
                id={`btn${plan.id}`}
                className="accordion-btn heading4 transition-all duration-300 ease-in-out w-[100%] text-left relative"
                type="button"
                data-toggle="collapse"
                data-target={`collapse${plan.id}`}
                aria-expanded='false'
                aria-controls={`collapse${plan.id}`}
                onClick={handleShow}
              >
                {plan.question}
              </button>
            </h2>

            {/* render options */}
            <div id={`collapse${plan.id}`} className={`collapse${plan.id}`}>
              {plan.options.map((option) => (
                <div key={option.id} className={` option relative flex flex-col  mb-4`}>
                  <input type="radio" name={plan.id} id={option.id} />
                  <label htmlFor={option.id} className="bg-[#F4F1EB] p-6 rounded-[10px] cursor-pointer hover:bg-orange focus:bg-orange">
                    <h3 className="heading3 mb-2 ">{option.type}</h3>
                    <p className="paragraph">{option.desc}</p>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
