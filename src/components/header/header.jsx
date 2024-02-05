import { useState } from "react";
import { linkData } from "../../lib/data";
import { motion } from "framer-motion";

export default function Header() {
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <header className="z-[999] relative w-full">
      <div className="transition | fixed w-full flex flex-col justify-center items-center bg-bkg-2/60 border border-text/10 h-[7.25rem] inset-0 my-0 mx-auto shadow-lg shadow-black/[0.1] | md:w-[40rem] md:h-[3.5rem] md:rounded-full md:top-5 | 2xl:w-[50rem]"></div>

      <nav className="h-12 flex fixed top-[.5rem]  left-1/2 -translate-x-1/2 | sm:h-[initail] sm:top-6 sm:rounded-full">
        <ul className="transition | flex flex-wrap gap-5 justify-center text-base items-center w-[28rem] h-[inherit] | sm:w-[40rem] ">
          {linkData.map((link) => (
            <li
              key={link.id}
              className="relative flex justify-center items-center h-3/4 px-5"
            >
              <a
                href={link.url}
                className=" flex justify-center items-center"
                onClick={() => {
                  setActiveSection(link.name);
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                    className="rounded-full bg-accent/70 absolute inset-0 -z-10"
                  ></motion.span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
