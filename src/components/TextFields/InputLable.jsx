import React from "react";

const InputLable = ({ label, htmlFor, className }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {label.split("").map((char) => (
        <span>{char}</span>
      ))}
    </label>
  );
};

export default InputLable;
