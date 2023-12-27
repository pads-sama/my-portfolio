import React, { useRef } from "react";
import InputLable from "../TextFields/InputLable";
import "./Contacts.css";
import TextArea from "../TextFields/TextArea";
import TextInput from "../TextFields/textInput";
import SubmitButton from "../Buttons/SubmitButton";
import HeroTextName from "../Hero/HeroTextName";
import { useScroll, useTransform } from "framer-motion";
import HeroSocials from "../Hero/HeroSocials";

const Contacts = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  return (
    <div
      ref={containerRef}
      className="h-full relative transition overflow-hidden grid grid-rows-2 w-full | sm:grid-rows-0   sm:h-[100%]  | md:grid-rows-0  md:h-[100%] | xl:h-[100dvh] xl:grid-cols-2 xl:grid-rows-1"
    >
      <div className="contacts_image w-full h-[100dvh] flex items-end relative xl:h-[100dvh]">
        <HeroTextName
          textY={textY}
          className="text-6xl uppercase transition z-10 | sm:text-7xl | md:text-8xl xl:text-7xl xl:font-extrabold"
          text2="Contact me"
        />
        {/* <div className="backgroundOverlay  bg-gradient-to-l from-primary to-secondary opacity-[.2] z-10 "></div> */}
      </div>
      <div className="w-full h-full grid place-content-center bg-primary |  xl:h-[100dvh]">
        <div>
          <div className="w-96">
            <span className="text-2xl tracking-wider text-accent-clr">
              Send me a message
            </span>
            <p className="text-xs pt-5 tracking-wide leading-5 text-gray-300 | xl:text-sm">
              Have a project in mind or just want to chat about web development?
              I'd love to hear from you! Feel free to drop me a message, and
              I'll get back to you as soon as possible.
            </p>
          </div>
          <form action="">
            <div className="w-96 flex flex-col mt-10 relative form_control">
              <TextInput type="text" id="name" name="name" />
              <InputLable label="Name" />
            </div>
            <div className="w-96 flex flex-col mt-10 relative form_control">
              <TextInput type="email" id="email" name="email" />
              <InputLable label="Email" />
            </div>
            <div className="w-96 flex flex-col mt-10 relative form_control">
              <TextArea id="message" name="message" />
              <InputLable label="Message" />
            </div>
            <SubmitButton />
          </form>
        </div>
        <div className="absolute bottom-0 w-full flex transition | xl:w-auto xl:right-72 ">
          <div className="flex flex-col items-center justify-center w-full">
            <HeroSocials />
            <span className="tracking-wider text-sm text-gray-400">
              Juan Carlos Padillo{" "}
              <span className="text-accent-clr">@ 2023</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
