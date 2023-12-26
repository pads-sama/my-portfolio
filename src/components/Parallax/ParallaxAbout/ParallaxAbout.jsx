import React, { useRef } from "react";
import "./ParallaxAbout.css";
import HeroTextName from "../../Hero/HeroTextName";
import "./ParallaxAbout.css";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxAbout = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <>
      <motion.div
        ref={containerRef}
        className=" w-full h-[100vh] flex items-end justify-end relative overflow-hidden"
      >
        <motion.div className="backgroundOverlay bg-gradient-to-l from-primary to-secondary opacity-[.2] z-[5] "></motion.div>
        <motion.div style={{ y: bgY }} className="bg"></motion.div>
        <div className=" z-[6]">
          <HeroTextName
            textY={textY}
            className="text-6xl uppercase transition | sm:text-7xl | md:text-8xl xl:text-9xl xl:font-extrabold"
            text2="About me"
          />
        </div>
      </motion.div>
    </>
  );
};

export default ParallaxAbout;
