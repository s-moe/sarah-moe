// import "./contact.scss";
// import { useRef } from "react";
// import emailjs from "emailjs-com";
// import { LocalPhone } from "@material-ui/icons";
import Form from "../form/Form";
import PhoneNumber from "../contactInfoItems/PhoneNumber";
import EmailAddress from "../contactInfoItems/EmailAddress";
import MyLocation from "../contactInfoItems/MyLocation";
import "./contactSection.scss";
import React from "react";

export default function ContactSection() {
  return (
    // <div className="container">
    <div className="contactSection__wrapper">
      <div className="left">
        <Form />
      </div>
      <div className="right">
        <h1>Contact Me</h1>
        <PhoneNumber />
        <EmailAddress />
        <MyLocation />
      </div>
    </div>
    // </div>
  );
}
