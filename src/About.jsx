import React from "react";
import Hero from "./components/about/Hero";
import Commitment from "./components/about/Commitment";
import Quality from "./components/about/Quality";
import Locations from "./components/about/Locations";

const About = () => {
  return (
    <div>
      <Hero />
      <Commitment />
      <Quality />
      <Locations />
    </div>
  );
};

export default About;
