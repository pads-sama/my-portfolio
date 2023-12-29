import React, { useRef } from "react";
import "./Contacts.css";
import HeroTextName from "../Hero/HeroTextName";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import HeroSocials from "../Hero/HeroSocials";
import ContactsForm from "./ContactsForm";
import ContactHeadings from "./ContactHeadings";

const showAnimations = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    duration: 15,
    ease: "linear",
  },
};

const Contacts = () => {
  const containerRef = useRef();
  const inView = useInView(containerRef, { amount: 0.5, once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  return (
    <motion.div
      ref={containerRef}
      className="h-full relative transition overflow-hidden grid grid-rows-2 w-full | sm:grid-rows-0   sm:h-[100%]  | md:grid-rows-0  md:h-[100%] | xl:h-[100dvh] xl:grid-cols-2 xl:grid-rows-1"
    >
      <div className="contacts_image w-full h-[100dvh] flex items-end relative xl:h-[100dvh]">
        <HeroTextName
          textY={textY}
          className="text-6xl uppercase transition z-10 | sm:text-7xl | md:text-8xl xl:text-7xl xl:font-extrabold"
          text2="Contact me"
        />
        <div className="backgroundOverlay  bg-gradient-to-l from-primary to-secondary opacity-[.2] z-8 "></div>
      </div>
      <motion.div className="board-body w-full h-full relative grid place-content-center bg-primary |  xl:h-[100dvh]">
        <div className="board"></div>
        <motion.div className="z-[1]">
          <ContactHeadings inView={inView} />
          <ContactsForm
            style={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          />
        </motion.div>
        <motion.div className="absolute bottom-0 w-full flex transition | xl:w-auto xl:right-72 ">
          <motion.div
            style={{
              transform: inView ? "none" : "translateX(-200px)",
              opacity: inView ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
            }}
            className="flex flex-col items-center justify-center w-full"
          >
            <HeroSocials />
            <motion.span className="tracking-wider text-sm text-gray-400">
              Juan Carlos Padillo{" "}
              <motion.span className="text-accent-clr">@ 2023</motion.span>
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contacts;
