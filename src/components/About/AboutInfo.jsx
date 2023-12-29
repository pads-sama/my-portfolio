import React from "react";
import { Artistic } from "../../assets";
import { motion } from "framer-motion";

const AboutInfo = ({ inView, containerRef }) => {
  return (
    <motion.div>
      <motion.div
        style={{
          transform: inView ? "none" : "translateX(-200px)",
          opacity: inView ? 1 : 0,
          transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) .2s",
        }}
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
