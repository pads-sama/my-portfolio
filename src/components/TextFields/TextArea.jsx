import React from "react";

const TextArea = ({ name, id, value, onChange }) => {
  return (
    <>
      <textarea
        name={name}
        id={id}
        className="px-2"
        onChange={onChange}
        value={value}
      ></textarea>
    </>
  );
};

export default TextArea;
