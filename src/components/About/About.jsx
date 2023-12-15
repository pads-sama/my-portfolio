import React from "react";
import "./About.css";
import { Pads } from "../../assets";
import AboutSkills from "./AboutSkills";
import AboutInfo from "./AboutInfo";

const About = () => {
  return (
    <div className="h-full bg-gradient-to-b from-primary to-gradient flex flex-col items-center justify-center text-accent-clr tracking-wide">
      <div className="w-[1200px] grid grid-cols-2 border border-accent-clrGray p-5 rounded-md ">
        <div className="flex flex-col items-end border-r-2 border-accent-clrGray px-10">
          <div className="w-52 h-52 rounded-full border-2 border-secondary overflow-hidden relative bg-gradient-to-t from-primary to-secondary">
            <div className="bg-primary/20 z-10 h-full absolute inset-0"></div>
            <img src={Pads} alt="" className=" h-60 absolute top-0 left-5" />
          </div>
          <h1 className="text-2xl font-bold pt-5 text-secondary">
            Juan Carlos Padillo
          </h1>
          <small className="text-accent-clrGray">Frontend Developer</small>
          <div className="text-xl font-bold pt-5">Skills</div>
          <AboutSkills />
        </div>
        <div>
          <AboutInfo />
        </div>
      </div>
    </div>
  );
};

export default About;
