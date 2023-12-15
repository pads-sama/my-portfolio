import { motion } from "framer-motion";
import ToggleButton from "./Buttons/ToggleButton";
import { useEffect, useState } from "react";
import Links from "./Links/Links";
import "./Sidebar.css";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sideBarVariants = {
    sidebarOpen: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    sidebarClosed: {
      clipPath: "circle(25px at 50px 50px)",
      transition: {
        delay: 0.4,
        stiffness: 400,
        dumping: 40,
      },
    },
  };

  return (
    <motion.div
      className=" bg-secondary flex flex-col items-center justify-center z-50 "
      animate={isSidebarOpen ? "sidebarOpen" : "sidebarClosed"}
    >
      <motion.div
        variants={sideBarVariants}
        className="w-[18.75rem] fixed top-0 left-0 bottom-0 bg-secondary paint "
      >
        <Links setIsSidebarOpen={setIsSidebarOpen} />
      </motion.div>
      <ToggleButton
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
    </motion.div>
  );
};

export default SideBar;
