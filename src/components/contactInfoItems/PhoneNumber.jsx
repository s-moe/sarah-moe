import "../../global.scss";
import "./contactInfoItems.scss";
import { Mail, PersonPin, Phone } from "@material-ui/icons";
// import { Pin } from "@mui/icons-material";
import React from "react";

export default function ContactInfoItem() {
  return (
    <div className="contactInfoItem">
      <div className="info">
        {" "}
        <Phone className="icon" />
        <span className="text"> +1 425.923.9939</span>
      </div>
      {/* <div className="info">
        {" "}
        <Mail />
        hello@sarahmoe.com
      </div>
      <div className="info">
        {" "}
        <PersonPin />
        Seattle, WA
      </div> */}
    </div>
  );
}
