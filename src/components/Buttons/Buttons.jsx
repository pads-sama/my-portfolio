import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Buttons = ({ label }) => {
  return (
    <div className="mt-5 | sm:mt-8 | md:mt-9 | xl:mt-10">
      <button className="btn font-medium relative py-[1rem] px-[2.5rem] my-0 mx-auto tracking-wide bg-transparent outline-none text-lg text-gray-100 text-center | before:bg-orange-600 after:bg-accent-clr hover:after:shadow-xl ">
        {label}
      </button>
    </div>
  );
};
Buttons.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Buttons;
