import React, { useState } from "react";
import axios from "axios";
import { validateEmail } from "../utils/utils";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [messageObj, setMessageObj] = useState({
    message: "",
    messageClass: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setMessageObj({
        message: "Thank you for signing up!",
        messageClass: "success",
      });
      axios
        .post(
          "https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge",
          {
            email,
          }
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      setMessageObj({
        message: "Please enter a valid email.",
        messageClass: "danger",
      });
    }
  };

  return (
    <div className="footer">
      <div>Sign up for our Newsletter</div>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input className="submit-btn" type="submit" value="SUBMIT" />
        </div>
        <div className={`alert ${messageObj.messageClass}`}>
          {messageObj.message}
        </div>
      </form>
      <div className="footer-links">
        &copy; 2021 - SPARTA PLAESENT -{" "}
        <a href="#" className="footer-link">
          INSTAGRAM
        </a>{" "}
        -{" "}
        <a href="#" className="footer-link">
          FACEBOOK
        </a>{" "}
        -{" "}
        <a href="#" className="footer-link">
          TWITTER
        </a>
      </div>
    </div>
  );
};

export default Footer;
