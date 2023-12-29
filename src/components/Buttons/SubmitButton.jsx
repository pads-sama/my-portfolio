import React from "react";
import "./SubmitButton.css";

const SubmitButton = ({ isLoading }) => {
  return (
    <div className="w-full py-5 flex justify-end">
      <button
        type="submit"
        className={`slide_button text-md tracking-widest ${
          isLoading ? "bg-accent-clr/75 border-accent-clr/75" : "bg-transparent"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </div>
  );
};

export default SubmitButton;
