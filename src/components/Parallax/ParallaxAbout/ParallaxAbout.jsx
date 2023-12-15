import React from "react";
import { Tech4, Tech5, Tech8 } from "../../../assets";
import "./ParallaxAbout.css";

const ParallaxAbout = () => {
  return (
    <div className="parallax">
      <section className="section1 w-full h-screen items-center justify-center flex z-[3] ">
        <span className="uppercase font-extrabold text-9xl tracking-wide  px-52">
          About Me
        </span>
      </section>
      <section className="z-[2] relative">
        {/* <img src={Tech4} alt="" className="opacity-40 absolute -bottom-20 " /> */}
      </section>
      <section>
        {/* <img src={Tech5} alt="" className="opacity-100 h-full " /> */}
        <img src={Tech8} alt="" className="opacity-100 h-full " />
      </section>
    </div>
  );
};

export default ParallaxAbout;
