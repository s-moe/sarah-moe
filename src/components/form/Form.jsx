import "./form.scss";
import { useState } from "react";
import emailjs from "emailjs-com";

import React from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9azi0y5",
        "contact_form",
        e.target,
        "user_G82CO16402WG1xtpLLb2i"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Thank you for your message. I'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            className="input"
            id="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit" className="button">
          Send
        </button>
      </form>
    </>
  );
}
