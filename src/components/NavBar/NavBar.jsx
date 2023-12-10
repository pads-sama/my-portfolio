import React from "react";
import "./NavBar.css";
import { motion } from "framer-motion";
import { socials } from "../../constants";
import SideBar from "../SideBar/SideBar";
import AnimationList from "../Animations/AnimationList";

const containerVariants = AnimationList(0.5, 0.5);

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const NavBar = () => {
  return (
    <>
      {/* <aside className="w-20 h-screen bg-black"></aside> */}
      <nav className="h-[6.25rem] items-center justify-center w-full flex bg-transparent">
        <SideBar />
        <div className="wrapper w-full px-[2.5rem] pl-24 flex justify-between | sm:pl-24 | md:w-[900px] | xl:px-0 xl:w-[1150px]">
          <motion.span
            className="text-lg font-noto font-bold tracking-wide | sm:text-lg | md:text-xl | xl:text-2xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Pads
            <span className="text-secondary font-noto font-extrabold tracking-wide">
              Dev.
            </span>
          </motion.span>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-5 "
          >
            {socials.map(({ id, image, alt }) => (
              <motion.li key={id} variants={itemVariants}>
                <a href="">
                  <img
                    className="w-5 h-5 | md:w-6  md:h-6 | xl:w-7 xl:h-7 "
                    src={image}
                    alt={alt}
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
