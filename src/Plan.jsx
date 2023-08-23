import React from "react";
import Hero from "./components/plan/Hero";
import Howitworks from "./components/plan/Howitworks";
import Main from "./components/plan/Main";
import Summary from "./components/plan/Summary";

const Plan = () => {
  return (
    <div>
      <Hero />
      <Howitworks />
      <Main />
      <Summary />
    </div>
  );
};

export default Plan;
