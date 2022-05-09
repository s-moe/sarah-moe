import "../../global.scss";
import "./contactInfoItems.scss";
import { Phone } from "@material-ui/icons";
import React from "react";

export default function PhoneNumber() {
  return (
    <div className="contactInfoItem">
      <div className="info">
        {" "}
        <Phone className="icon" />
        <span className="text"> +1 425.923.9939</span>
      </div>
    </div>
  );
}
