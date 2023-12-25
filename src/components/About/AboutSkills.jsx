import React from "react";
import { skills } from "../../constants";

const AboutSkills = () => {
  return (
    <>
      <div className="text-xs gap-5 flex flex-col">
        {skills.map((skill, index) => (
          <div
            key={index}
            className=" relative w-full bg-gray-100 flex h-[1.75rem] |  | md:h-[2rem] | xl:h-[2rem]"
          >
            <div className=" flex w-24 h-full justify-center items-center bg-orange-700 z-[2] | xl:text-sm">
              {skill.label}
            </div>
            <span
              className="skills_progressbar h-full bg-accent-clr z-[2]"
              style={{ width: skill.style }}
            ></span>
            <div className=" text-gray-700 absolute h-full w-full px-2 font-bold bg-transparent z-[1]  flex items-center justify-end | xl:text-sm ">
              {skill.rate}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutSkills;
