import { Mockup, ScrollIcon } from "../../assets";
import Buttons from "../Buttons/Buttons";
import { motion } from "framer-motion";
import "./Hero.css";

const titleVariants = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChirdlen: 0.5,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 5,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero relative text-accent-clr">
      <motion.section
        className="space-y-5 text-center section z-10 py-20 px-2"
        initial="initial"
        animate="animate"
        variants={titleVariants}
      >
        <motion.span
          variants={titleVariants}
          className="name text-sm  tracking-wider transition-all duration-700 | sm:text-md | md:text-lg | xl:text-xl"
        >
          Hi, I am Juan Carlos
        </motion.span>
        <motion.div variants={titleVariants}>
          <span className="text-3xl font-extrabold tracking-wide transition-all duration-700 | sm:text-5xl | md:text-6xl | xl:text-7xl">
            Frontend{" "}
          </span>
          <span className="text-3xl font-extrabold text-secondary tracking-wide transition-all duration-700 | sm:text-5xl | md:text-6xl | xl:text-7xl">
            Developer
          </span>
        </motion.div>
        <div className="tracking-wider">
          <motion.p
            variants={titleVariants}
            className=" text-xs transition-all duration-700 | sm:text-sm | md:text-sm | xl:text-sm"
          >
            Dedicated to <span className="text-secondary">crafting </span>
            beautiful and functional websites.
          </motion.p>
        </div>
        <motion.div variants={titleVariants} className="flex justify-center">
          <Buttons label="Message Me" />
        </motion.div>
        <motion.img
          variants={titleVariants}
          animate="scrollButton"
          src={ScrollIcon}
          alt="scroll icon"
          className="absolute bottom-32 right-10 w-20 h-20 cursor-pointer "
        />
      </motion.section>
      <motion.section
        className="section relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <img
          src={Mockup}
          alt="mockup image"
          className="absolute left-[50%] top-[40%] transition-all duration-1000 mockup | sm:top-[20%] | md:top-[10%]  | xl:w-[60%] xl:top-0"
        />
      </motion.section>
    </div>
  );
};

export default Hero;
