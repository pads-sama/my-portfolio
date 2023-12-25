import React from "react";
import { webAttributes } from "../../constants";

export const Attributes = () => {
  return (
    <>
      {/* still 2x2 just scale down the items */}
      <div className="grid grid-cols-2 transition gap-5 h-96 | sm:grid-cols-2  | md:grid-cols-4 | xl:grid-cols-4 xl:gap-7">
        {webAttributes.map((attribute, index) => (
          <div
            className="flex flex-col items-center text-center gap-1 transition"
            key={index}
          >
            <div className="w-20 h-20 rounded-full  bg-transparent border-2 border-accent-clr grid place-content-center | sm:w-24 sm:h-24 | md:w-24 md:h-24 | xl:w-28 xl:h-28 ">
              <img
                src={attribute.icon}
                alt="icons"
                className="w-10 h-10  | md:w-12 md:h-12 | xl:w-14 xl:h-14"
              />
            </div>
            <span className="text-sm font-bold h-10 tracking-wider | xl:text-lg">
              {attribute.title}
            </span>
            <p className="py-1 | sm:py-1 sm:text-xs | md:py-3 md:text-sm | xl:py-4 xl:text-sm">
              {attribute.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
