import React from "react";
import { skills } from "../../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSkills = ({ inView, containerRef }) => {
  return (
    <motion.div
      style={{
        transform: inView ? "none" : "translateX(200px)",
        opacity: inView ? 1 : 0,
        transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) .1s",
      }}
    >
      <motion.div className="text-xs gap-5 flex flex-col">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className=" relative w-full bg-gray-100 flex h-[1.75rem] overflow-hidden |  | md:h-[2rem] | xl:h-[2rem]"
          >
            <div className=" flex w-24 h-full justify-center items-center bg-orange-700 z-[3] | xl:text-sm">
              {skill.label}
            </div>

            <motion.span
              style={{
                width: skill.style,
                transform: inView ? "none" : "translateX(-500px)",
                opacity: inView ? 1 : 0,
                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) .8s",
              }}
              className="skills_progressbar h-full bg-accent-clr z-[2]"
            ></motion.span>
            <motion.div className=" text-gray-700 absolute h-full w-full px-2 font-bold bg-transparent z-[1]  flex items-center justify-end | xl:text-sm ">
              <motion.p>{skill.rate}</motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutSkills;
