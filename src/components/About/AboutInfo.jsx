import React from "react";
import Buttons from "../Buttons/Buttons";

const AboutInfo = () => {
  return (
    <div className="space-y-5 pl-14 text-sm flex flex-col justify-center h-full">
      <h1 className="text-4xl text-secondary font-bold">About Me</h1>
      <p>
        Frontend developer with a passion for crafting immersive digital
        experiences. My journey in the world of web development is driven by a
        relentless pursuit of pixel perfection and a love for transforming ideas
        into visually stunning realities.
      </p>
      <div className="text-xl font-bold tracking-wide text-secondary/80 ">
        What sets me apart?
      </div>
      <p>
        It's not just about writing code; it's about solving problems and
        creating seamless user experiences. I believe in the power of
        collaboration and I am always excited to work with others who share the
        same passion for innovation.
      </p>
      <Buttons label="Download CV" />
    </div>
  );
};

export default AboutInfo;
