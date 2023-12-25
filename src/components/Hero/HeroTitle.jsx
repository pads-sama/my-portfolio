import React from "react";
import { motion } from "framer-motion";
import Buttons from "../Buttons/Buttons";
import "./Hero.css";
import HeroTextName from "./HeroTextName";

const HeroTitle = ({ textY }) => {
  return (
    <>
      <motion.section className=" text-center h-full | xl:flex xl:flex-col xl:justify-center xl:text-auto z-10">
        <motion.div className=" text-xl leading-10 tracking-wider transition | sm:text-3xl  | md:text-4xl | xl:text-5xl xl:tracking-wider ">
          <HeroTextName
            textY={textY}
            text1="Hey there! I'm "
            text2="Juan Carlos Padillo,"
            // className="flex flex-wrap justify-center"
          />
        </motion.div>
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 2 },
          }}
          className=" text-xl leading-10 tracking-wider transition | sm:text-3xl  | md:text-4xl | xl:text-5xl xl:tracking-wider "
        >
          I am a Frontend Developer
        </motion.span>
        <Buttons label="Message me" />
      </motion.section>
    </>
  );
};

export default HeroTitle;
