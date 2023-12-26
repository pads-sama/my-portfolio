import React from "react";
import "./TextField.css";
import InputLable from "./InputLable";

const InputText = ({ name, type, id }) => {
  return (
    <div className="relative  flex flex-col h-14">
      <input
        type={type}
        name={name}
        id={id}
        className="text_input bg-transparent z-10 h-full outline-none"
      />
    </div>
  );
};

export default InputText;
