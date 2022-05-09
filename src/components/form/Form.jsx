import "./form.scss";
import { useRef } from "react";

import React from "react";

export default function Form() {
  const form = useRef();
  return (
    <form ref={form}>
      {/* <label>Name</label> */}
      <input type="text" name="name" placeholder="Name" className="input" />
      {/* <label>Email</label> */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input"
        required
      />
      {/* <label>Message</label> */}
      <textarea
        name="message"
        placeholder="Message"
        className="input"
        required
      />
      <input type="submit" value="Send" className="button" />
    </form>
  );
}
