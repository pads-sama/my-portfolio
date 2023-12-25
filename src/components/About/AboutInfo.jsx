import React, { useRef } from "react";
import { Artistic } from "../../assets";
import { motion, useInView } from "framer-motion";

const appearAnimation = {
  hidden: {
    x: -500,
    opacity: 0,
  },
  appear: {
    x: 0,
    opacity: 1,
  },
};

const AboutInfo = () => {
  const containerRef = useRef();
  const inView = useInView(containerRef, { amount: 0.5, once: true });
  return (
    <motion.div
      ref={containerRef}
      intial="hidden"
      animate={inView ? "appear" : "hidden"}
    >
      <motion.div
        variants={appearAnimation}
        className="flex flex-col justify-center items-center transition gap-3"
      >
        <div className="w-[250px] h-[250px] bg-primary relative rounded-full overflow-hidden border-2 border-accent-clr">
          <img
            src={Artistic}
            alt="my picture"
            className="absolute top-5 left-5"
          />
        </div>
        <div className="text-sm font-bold tracking-wider | xl:text-xl">
          About me?
        </div>
        <p className="text-center | xl:text-sm">
          A freelance web developer passionate about turning ideas into dynamic
          online experiences. I specialize in crafting responsive websites and
          dynamic web applications.
        </p>
        <a
          href=""
          className="underline text-secondary tracking-wide | xl:text-sm"
        >
          Here's my CV
        </a>
      </motion.div>
    </motion.div>
  );
};

export default AboutInfo;
