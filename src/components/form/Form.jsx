import "./form.scss";
import { useState } from "react";

import React from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="Email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="message">
          Message
          <textarea
            type="text"
            name="message"
            placeholder="message"
            className="input"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>

      <button type="submit" className="button">
        Send
      </button>
    </form>
  );
}
