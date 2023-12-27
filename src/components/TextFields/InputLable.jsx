import React from "react";

const InputLable = ({ label, htmlFor }) => {
  return (
    <label className="" htmlFor={htmlFor}>
      {label.split("").map((char) => (
        <span className="text-sm font-medium tracking-wider">{char}</span>
      ))}
    </label>
  );
};

export default InputLable;
