import React, { useRef, useState } from "react";
import TextInput from "../TextFields/textInput";
import InputLable from "../TextFields/InputLable";
import TextArea from "../TextFields/TextArea";
import SubmitButton from "../Buttons/SubmitButton";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const emailConfig = {
  serviceID: "service_bqaeoxz",
  templateID: "template_i84vt2f",
  userID: "-J-InccJzAx8JtXnk",
};

const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const ContactsForm = () => {
  const form = useRef();

  const initialFormState = {
    //set the initial value of the input fields
    user_name: "",
    user_email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialFormState);

  const resetInputFields = () => {
    setFormValues(initialFormState);
  };

  const [isLoading, setIsLoading] = useState(false);

  const [errorMessages, setErrorMessages] = useState(initialFormState);
  const validateForm = () => {
    let isValid = true;
    const errors = { ...initialFormState };

    // Validate username
    const usernameInput = form.current.user_name;
    if (usernameInput.value.trim() === "") {
      isValid = false;
      errors.user_name = "Please enter your name";
    }

    // Validate useremail
    const useremailInput = form.current.user_email;
    if (!useremailInput.value.trim()) {
      isValid = false;
      errors.user_email = "Please enter your email address";
    }
    // Validate message
    const messageInput = form.current.message;
    if (messageInput.value.trim() === "") {
      isValid = false;
      // Display an error message or style the input to indicate the error
      errors.message = "Please enter your message";
    }

    setErrorMessages(errors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    setIsLoading(true);

    emailjs
      .sendForm(
        emailConfig.serviceID,
        emailConfig.templateID,
        form.current,
        emailConfig.userID
      )
      .then(
        () => {
          setIsLoading(false);
          toast.success("Message was Sent!", toastConfig);
          resetInputFields();
        },
        (error) => {
          setIsLoading(false);
          toast.error(error.text, toastConfig);
        }
      );
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <ToastContainer />

        <div className="w-96 flex flex-col mt-10 relative form_control">
          <TextInput
            type="text"
            id="name"
            name="user_name"
            value={formValues.user_name}
            onChange={(e) =>
              setFormValues({ ...formValues, user_name: e.target.value })
            }
          />
          <InputLable htmlFor="name" label="Name" />
          {errorMessages.user_name && (
            <span className="text-red-500 tracking-wider pt-1 text-xs">
              {errorMessages.user_name}
            </span>
          )}
        </div>
        <div className="w-96 flex flex-col mt-10 relative form_control">
          <TextInput
            type="email"
            id="email"
            name="user_email"
            value={formValues.user_email}
            onChange={(e) =>
              setFormValues({ ...formValues, user_email: e.target.value })
            }
          />
          <InputLable htmlFor="email" label="Email" />
          {errorMessages.user_email && (
            <span className="text-red-500 tracking-wider pt-1 text-xs">
              {errorMessages.user_email}
            </span>
          )}
        </div>
        <div className="w-96 flex flex-col mt-10 relative form_control">
          <TextArea
            id="message"
            name="message"
            value={formValues.message}
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
          />
          <InputLable htmlFor="message" label="Message" />
          {errorMessages.message && (
            <span className="text-red-500 tracking-wider pt-1 text-xs">
              {errorMessages.message}
            </span>
          )}
        </div>
        <SubmitButton isLoading={isLoading} />
      </form>
    </>
  );
};

export default ContactsForm;
