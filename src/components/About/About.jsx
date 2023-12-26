import React from "react";
import "./About.css";
import { Attributes } from "./Attributes";
import AboutInfo from "./AboutInfo";
import AboutSkills from "./AboutSkills";

const About = () => {
  return (
    <div className=" flex  z-[1] h-full relative overflow-hidden | xl:h-[100dvh] xl:flex xl:justify-center xl:items-center">
      <div className=" bg-black/50 backgroundOverlay z-[2]"></div>
      <div className="about_container"></div>
      <div className="mt-10 grid grid-rows-2 z-10 transition text-xs px-5 | sm:px-10 sm:mt-10 | md:px-20 md:w-[71.875rem] md:mt-10 md:place-content-center | xl:px-0 xl:w-[71.875rem] xl:place-content-center ">
        <Attributes />
        <div className="transition grid grid-cols-1 -mt-52 py-10 gap-5  | sm:grid-cols-1 | md:grid-cols-2 md:-mt-28 | xl:grid-cols-2  xl:-mt-32">
          <AboutInfo />
          <AboutSkills />
        </div>
      </div>
    </div>
  );
};

export default About;
