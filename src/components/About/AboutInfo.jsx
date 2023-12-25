import React from "react";
import { Artistic } from "../../assets";

const AboutInfo = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center transition gap-3">
        <div className="w-[250px] h-[250px] bg-primary relative rounded-full overflow-hidden border-2 border-accent-clr">
          <img
            src={Artistic}
            alt="my picture"
            className="absolute top-5 left-5"
          />
        </div>
        <div className="text-sm font-bold tracking-wider | xl:text-xl">
          About me?
        </div>
        <p className="text-center | xl:text-sm">
          A freelance web developer passionate about turning ideas into dynamic
          online experiences. I specialize in crafting responsive websites and
          dynamic web applications.
        </p>
        <a
          href=""
          className="underline text-secondary tracking-wide | xl:text-sm"
        >
          Here's my CV
        </a>
      </div>
    </>
  );
};

export default AboutInfo;
