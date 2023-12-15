import React from "react";
import { skills } from "../../constants";

const AboutSkills = () => {
  return (
    <div className="skills-container rounded-md py-5 flex justify-center flex-col">
      {/* <span className="text-2xl font-extrabold tracking-wider  skills-items border border-secondary/70 rounded-xl mb-3 flex justify-center items-center h-14 uppercase text-secondary">
        Skills
      </span> */}
      <div className="space-y-2">
        {skills.map(({ label, rate }, index) => (
          <div
            className="w-[400px] border border-secondary/70 flex justify-between h-auto p-3 rounded-xl skills-items"
            key={index}
          >
            <span className="skill-name text-secondary font-bold">{rate}</span>
            <span className="skill-name text-accent-clr tracking-wide">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSkills;
