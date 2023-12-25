import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";
import HeroTitle from "./HeroTitle";
import SideBar from "../SideBar/SideBar";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], //start in the start of the viewport and end in the start of the viewport
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <>
      <motion.div
        ref={containerRef}
        className=" grid place-content-center z-10 relative overflow-hidden h-[100dvh] font-medium text-gray-100 transition-all duration-700"
      >
        <div className="backgroundOverlay bg-black/50 z-[-9]" />
        <motion.div style={{ y: bgY }} className="hero"></motion.div>
        <SideBar />
        <motion.div className=" grid h-auto px-5 | sm:pl-24 | md:w-[56.25rem] | xl:px-0 xl:w-[71.875rem]">
          <HeroTitle textY={textY} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
