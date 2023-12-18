import React from "react";
import PropTypes from "prop-types";

const Buttons = ({ label }) => {
  return (
    <button className="h-9 w-36 bg-accent-clr text-primary font-bold rounded-md text-sm border-2 border-transparent transition-all duration-300 hover:bg-transparent hover:text-accent-clr hover:border-accent-clr | sm:h-9 sm:w-40 sm:text-sm | md:h-10 md:w-48 md:text-lg | xl:h-12 xl:w-52 xl:text-xl">
      {label}
    </button>
  );
};
Buttons.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Buttons;
