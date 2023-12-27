import React from "react";
import "./TextField.css";

const TextInput = ({ name, type, id, className, onChange, value }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className={` block pt-[15px] px-5 h-10 w-full` + className}
    />
  );
};

export default TextInput;
