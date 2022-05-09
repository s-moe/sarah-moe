// import "./contact.scss";
// import { useRef } from "react";
// import emailjs from "emailjs-com";
// import { LocalPhone } from "@material-ui/icons";
import Form from "../form/Form";
import PhoneNumber from "../contactInfoItems/PhoneNumber";
import EmailAddress from "../contactInfoItems/EmailAddress";
import MyLocation from "../contactInfoItems/MyLocation";

// export default function Contact() {
//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [message, setMessage] = useState("");
//   const form = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_9azi0y5",
//         "contact_form",
//         form.current,
//         "user_G82CO16402WG1xtpLLb2i"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     alert("Thank you for your message. I'll get back to you soon.");
//     form.current.reset();
//     // setName("");
//     // setEmail("");
//     // setMessage("");
//   };
//   return (
//     <div className="contact" id="contact">
//       <div className="left">
//         <Form onSubmit={handleSubmit} />

//         {/* <label>Name</label>
//           <input type="text" name="name" placeholder="Name" className="input" />
//           {/* <label>Email</label> */}
//         {/* <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="input"
//             required
//           /> */}
//         {/* <label>Message</label> */}
//         {/* <textarea
//             name="message"
//             placeholder="Message"
//             className="input"
//             required
//           /> */}
//         {/* <input type="submit" value="Send" className="button" />
//         </Form> */}
//         {/* <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <label
//             htmlFor="email
//           "
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <label htmlFor="message">Message</label>
//           <textarea
//             type="message"
//             id="message"
//             name="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea> */}
//         {/* <button type="submit">Send</button> */}
//         {/* </form> */}
//       </div>
//       <div className="right">
//         <div className="wrapper">
//           <h2>Contact Me</h2>

//           <LocalPhone>
//             <h2 className="phoneNumber">+1 425.923.9939</h2>{" "}
//           </LocalPhone>
//           <h3>hello@sarahmoe.com</h3>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Email from "../contactInfoItems/EmailAddress";

export default function () {
  return (
    <div className="container">
      <div className="contactSection__wrapper">
        <div className="left">
          <Form />
        </div>
        <div className="right">
          <PhoneNumber />
          <EmailAddress />
          <MyLocation />
        </div>
      </div>
    </div>
  );
}
