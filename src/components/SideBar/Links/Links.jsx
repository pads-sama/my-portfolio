import React from "react";
import { SidebarMenu } from "../../../constants";
import { motion } from "framer-motion";

const variants = {
  sidebarOpen: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  sidebarClosed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};
const variantsItem = {
  sidebarOpen: {
    y: 0,
    opacity: 1,
  },
  sidebarClosed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setIsSidebarOpen }) => {
  const handleClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center absulote w-full h-full"
      variants={variants}
    >
      {SidebarMenu.map((i) => (
        <motion.a
          key={i}
          variants={variantsItem}
          onClick={handleClick}
          href={"#" + i}
          className="text-primary hover:text-secondary px-10 tracking-wide hover:scale-100 text-2xl font-semibold w-full text-left hover:bg-primary py-3"
        >
          {i}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
