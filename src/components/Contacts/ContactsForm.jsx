import React, { useRef, useState } from "react";
import TextInput from "../TextFields/textInput";
import InputLabel from "../TextFields/InputLabel";
import TextArea from "../TextFields/TextArea";
import SubmitButton from "../Buttons/SubmitButton";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  //The initial form state and error messages
  const initialFormState = {
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

    const { user_name, user_email, message } = formValues; //descruturing the input fields

    // Validate username
    if (user_name.trim() === "") {
      isValid = false;
      errors.user_name = "Please enter your name";
    }

    // Validate useremail
    if (!user_email.trim()) {
      isValid = false;
      errors.user_email = "Please enter your email address";
    }
    // Validate message
    if (message.trim() === "") {
      isValid = false;
      errors.message = "Please enter your message";
    }

    setErrorMessages(errors);
    return isValid;
  };

  //Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    //check if the form is valid
    if (!validateForm()) {
      return;
    }
    //Submit the form

    setIsLoading(true);

    const timeout = setTimeout(async () => {
      try {
        const sendEmail = async (formData) => {
          const emailConfig = {
            serviceID: "service_bqaeoxz",
            templateID: "template_i84vt2f",
            userID: "-J-InccJzAx8JtXnk",
          };

          const response = await emailjs.sendForm(
            emailConfig.serviceID,
            emailConfig.templateID,
            formData,
            emailConfig.userID
          );

          return response;
        };
        const response = await sendEmail(form.current);
        setIsLoading(false);
        toast.success("Message was Sent!", toastConfig);
        resetInputFields();
      } catch (error) {
        toast.error(error.text, toastConfig);
        setIsLoading(false);
      }
    }, 1000);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target; //destructure the name and value of the input field
    setFormValues({ ...formValues, [name]: value }); //set the value of the input field to the updated value
  };
  return (
    <>
      <form ref={form} onSubmit={handleSubmit}>
        <ToastContainer />

        <div className="w-96 flex flex-col mt-10 relative form_control">
          <TextInput
            type="text"
            id="name"
            name="user_name"
            value={formValues.user_name}
            onChange={handleChange}
          />
          <InputLabel htmlFor="name" label="Name" />
          {errorMessages.user_name && (
            <span className="text-red-500 font-bold tracking-wider pt-1 text-xs">
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
            onChange={handleChange}
          />
          <InputLabel htmlFor="email" label="Email" />
          {errorMessages.user_email && (
            <span className="text-red-500 font-bold tracking-wider pt-1 text-xs">
              {errorMessages.user_email}
            </span>
          )}
        </div>
        <div className="w-96 flex flex-col mt-10 relative form_control">
          <TextArea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />
          <InputLabel htmlFor="message" label="Message" />
          {errorMessages.message && (
            <span className="text-red-500 font-bold tracking-wider pt-1 text-xs">
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
