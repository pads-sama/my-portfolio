import React from "react";
import { motion } from "framer-motion";

const ContactHeadings = ({ inView }) => {
  return (
    <>
      <motion.div className="w-96">
        <motion.span
          style={{
            transform: inView ? "none" : "translateX(-200px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-2xl tracking-wider inline-block text-accent-clr"
        >
          Send me a message
        </motion.span>
        <motion.p
          style={{
            transform: inView ? "none" : "translateX(200px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-xs pt-5 tracking-wide leading-5 text-gray-300 | xl:text-sm"
        >
          Have a project in mind or just want to chat about web development? I'd
          love to hear from you! Feel free to drop me a message, and I'll get
          back to you as soon as possible.
        </motion.p>
      </motion.div>
    </>
  );
};

export default ContactHeadings;
