import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavMenu } from "../constants";

const Nav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const showMobileMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };
  return (
    <>
      <div className="h-full w-full flex justify-between items-center px-[2.25rem] | md:px-[80px] | xl:px-[6.25rem] ">
        <div className="logo-container h-full w-full flex justify-start items-center">
          <a
            href=""
            className="logo text-3xl text-clr-1 font-bold tracking-wider font-sans | md:text-4xl | xl:text-4xl"
          >
            JC.
          </a>
        </div>
        <div className=" sm:block | md:hidden">
          <button
            onClick={showMobileMenu}
            className={`${
              isMenuVisible ? "hidden" : "flex"
            }  justify-center items-center burger group`}
          >
            <Bars3Icon className="h-6 w-6 text-clr-2 group-hover:text-clr-3 group-hover:h-7 group-hover:w-7 " />
          </button>
          <button
            onClick={showMobileMenu}
            className={`${
              isMenuVisible ? "flex" : "hidden"
            }  justify-center items-center close group`}
          >
            <XMarkIcon className="h-6 w-6 text-clr-2 group-hover:text-clr-3 " />
          </button>
        </div>
        <div
          className={`${
            isMenuVisible ? "block sm:block md:hidden" : "hidden"
          } nav-menu rounded-xl `}
        >
          <ul className="flex flex-col items-center justify-center space-y-5">
            {NavMenu.map((item) => (
              <li
                key={item.id}
                className="menu-item flex rounded-xl justify-center items-center text-accent-clr font-bold text-sm"
              >
                <a href="">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden | sm:hidden | md:block">
          <ul className="flex">
            {NavMenu.map((item) => (
              <li
                key={item.id}
                className="menu-item flex rounded-xl justify-center items-center text-accent-clr font-bold text-sm"
              >
                <a href="">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
