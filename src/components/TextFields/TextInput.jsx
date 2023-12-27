import React from "react";
import "./TextField.css";

const TextInput = ({ name, type, id, className }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={` block pt-[15px] px-5 h-10 w-full` + className}
    />
  );
};

export default TextInput;
