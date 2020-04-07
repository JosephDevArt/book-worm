import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
function SendReview() {
  const [isLoading, setIsLoading] = useState(false);
  const [successResponseMessage, setSuccessResponseMessage] = useState("");
  const [errorResponseMessage, setErrorResponseMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "gmail",
        "template_HrBwVdT0",
        e.target,
        "user_qIyHdH1H3l9FrD32j8HmG"
      )
      .then(
        (result) => {
          setSuccessResponseMessage("Success");
          errorResponseMessage && setErrorResponseMessage("");
          setIsLoading(false);
        },
        (error) => {
          setErrorResponseMessage("Something went wrong");
          successResponseMessage && setSuccessResponseMessage("");
          setIsLoading(false);
        }
      );
  }
  return (
    <div className="send-review">
      <i className="fas fa-users"></i>
      <h2>Send review</h2>
      <p>We would like to hear from you</p>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input
          required
          placeholder="Enter name..."
          type="text"
          name="user_name"
        />
        <label>Email</label>
        <input
          required
          placeholder="Enter email..."
          type="email"
          name="user_email"
        />
        <label>Message</label>
        <textarea required placeholder="Enter message..." name="message" />
        {successResponseMessage ? (
          <p className="msg-success">{successResponseMessage}</p>
        ) : errorResponseMessage ? (
          <p className="msg-error">{errorResponseMessage}</p>
        ) : null}
        <button type="submit">
          Send Invite {isLoading && <i className="fa fa-refresh fa-spin"></i>}
        </button>
      </form>
    </div>
  );
}

export default SendReview;
