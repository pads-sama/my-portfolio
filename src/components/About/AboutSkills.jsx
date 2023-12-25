import React from "react";
import { skills } from "../../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const appearAnimation = {
  hidden: {
    opacity: 0,
    // x: 1000, TODO:fixed later
  },
  appear: {
    opacity: 1,
    x: 0,
  },
};

const AboutSkills = () => {
  const containerRef = useRef();
  const inView = useInView(containerRef, { amount: 0.5, once: true });
  return (
    <motion.div
      ref={containerRef}
      intial="hidden"
      animate={inView ? "appear" : "hidden"}
    >
      <motion.div
        className="text-xs gap-5 flex flex-col"
        variants={appearAnimation}
      >
        {skills.map((skill, index) => (
          <motion.div
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
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutSkills;
