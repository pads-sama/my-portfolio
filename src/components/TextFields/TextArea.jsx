import React from "react";

const TextArea = ({ name, id }) => {
  return (
    <>
      <textarea name={name} id={id} className="px-2"></textarea>
    </>
  );
};

export default TextArea;
