import React from "react";
import { SidebarMenu } from "../../../constants";

const Links = ({ setIsSidebarOpen }) => {
  const handleClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <ul className="flex flex-col justify-center items-center absulote w-full h-full">
      {SidebarMenu.map((i) => (
        <li
          key={i}
          className="text-2xl font-semibold w-full text-left hover:bg-primary group py-3 transition-all duration-500 "
        >
          <a
            onClick={handleClick}
            href={"#" + i}
            className="text-primary group-hover:text-secondary px-10 tracking-wide group-hover:tracking-widest"
          >
            {i}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
