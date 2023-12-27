import React from "react";
import "./SubmitButton.css";

const SubmitButton = () => {
  return (
    <div className="w-full py-5 flex justify-end">
      <button
        className="flip-button"
        data-front="Send"
        data-back="Send"
      ></button>
    </div>
  );
};

export default SubmitButton;
