import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const ToggleButton = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <>
      <button
        onClick={() => {
          setIsSidebarOpen((prev) => !prev);
        }}
        className={`${
          isSidebarOpen ? "bg-transparent" : "bg-secondary"
        }  fixed h-14 w-14 rounded-full border-none top-6 left-6 flex justify-center items-center burger transition-all  delay-200 | xl:h-14 xl:w-14`}
      >
        {!isSidebarOpen ? (
          <Bars3Icon className="h-7 w-7 text-primary group-hover:text-clr-3 group-hover:h-7 group-hover:w-7 | xl:h-7 xl:w-7 " />
        ) : (
          <XMarkIcon className="h-7 w-7 text-primary group-hover:text-clr-3 group-hover:h-7 group-hover:w-7 " />
        )}
      </button>
    </>
  );
};

export default ToggleButton;
