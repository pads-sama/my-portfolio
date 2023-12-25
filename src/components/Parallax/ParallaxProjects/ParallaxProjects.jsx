import React, { useRef } from "react";
import HeroTextName from "../../Hero/HeroTextName";
import "./ParallaxProjects.css";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxProjects = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  return (
    <div
      ref={containerRef}
      className="w-full h-[100vh] relative overflow-hidden flex items-end justify-start"
    >
      <motion.div style={{ y: bgY }} className="parallax_project" />
      <div className="backgroundOverlay bg-black/30 z-[5]" />
      <HeroTextName
        textY={textY}
        className="text-6xl uppercase transition z-10 |  sm:text-7xl | md:text-8xl xl:text-9xl xl:font-extrabold"
        text2="Projects"
      />
    </div>
  );
};

export default ParallaxProjects;
