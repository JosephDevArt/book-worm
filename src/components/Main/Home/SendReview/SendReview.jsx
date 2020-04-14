import React, { useState } from "react";
import emailjs from "emailjs-com";

function SendReview() {
  const [isLoading, setIsLoading] = useState(false);
  // const [successResponseMessage, setSuccessResponseMessage] = useState("");
  // const [errorResponseMessage, setErrorResponseMessage] = useState("");

  const [responseMessage, setResponseMessage] = useState("");

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
          setResponseMessage("Success");
          setIsLoading(false);
        },
        (error) => {
          setResponseMessage("Something went wrong");
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
        <label htmlFor="name">Name</label>
        <input
          required
          placeholder="Enter name..."
          type="text"
          id="name"
          name="user_name"
        />
        <label htmlFor="email">Email</label>
        <input
          required
          placeholder="Enter email..."
          type="email"
          id="email"
          name="user_email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          required
          placeholder="Enter message..."
          name="message"
        />
        {responseMessage && (
          <p
            className={
              responseMessage === "Success" ? "msg-success" : "msg-error"
            }
          >
            {responseMessage}
          </p>
        )}

        <button type="submit">
          Send Invite {isLoading && <i className="fa fa-refresh fa-spin"></i>}
        </button>
      </form>
    </div>
  );
}

export default SendReview;
