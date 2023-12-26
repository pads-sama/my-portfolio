import React from "react";
import InputLable from "../TextFields/InputLable";
import InputText from "../TextFields/InputText";
import "./Contacts.css";
import TextArea from "../TextFields/TextArea";

const Contacts = () => {
  return (
    <div className="h-full relative overflow-hidden grid grid-rows-2 w-full | xl:h-[100dvh] xl:grid-cols-2">
      <div className="contacts_image w-full relative ">
        <div className="backgroundOverlay  bg-gradient-to-l from-primary to-secondary opacity-[.2] z-10 "></div>
      </div>
      <div className="w-full h-full grid place-content-center bg-primary">
        <form action="">
          <div className="w-96 flex flex-col mt-10 relative form_control">
            {/* <InputLable label="Name" /> */}

            <input type="text" id="name" name="name" />
            <label htmlFor="" className="label">
              <span>N</span>
              <span>A</span>
              <span>M</span>
              <span>E</span>
            </label>
          </div>
          <div className="w-96 flex flex-col mt-10">
            {/* <InputLable label="Email" /> */}
            <InputText id="email" name="email" />
          </div>
          <div className="w-96 flex flex-col mt-10">
            {/* <InputLable label="Message" /> */}
            <TextArea id="message" name="message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
