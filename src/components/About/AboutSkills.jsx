import React from "react";
import { skills } from "../../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const appearAnimation = {
  hidden: {
    opacity: 0,
    x: 1000,
  },
  appear: {
    opacity: 1,
    x: 0,
  },

  hideRate: {
    opacity: 0,
    x: -500,
  },
  showRate: {
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

            <motion.span
              initial="hideRate"
              animate={inView ? "showRate" : "hideRate"}
              transition={{ delay: 10 }}
              className="skills_progressbar h-full bg-accent-clr z-[2]"
              style={{ width: skill.style }}
            ></motion.span>
            <motion.div
              // initial="hideRate"
              // animate={inView ? "showRate" : "hideRate"}
              // transition={{ delay: 5 }}
              className=" text-gray-700 absolute h-full w-full px-2 font-bold bg-transparent z-[1]  flex items-center justify-end | xl:text-sm "
            >
              <motion.p>{skill.rate}</motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutSkills;
