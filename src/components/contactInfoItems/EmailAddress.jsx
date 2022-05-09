import "../../global.scss";
import "./contactInfoItems.scss";
import { Mail } from "@material-ui/icons";

import React from "react";

export default function EmailAddress() {
  return (
    <div className="contactInfoItem">
      <div className="info">
        {" "}
        <Mail className="icon" />
        <span className="text"> hello@sarahmoe.com</span>
      </div>
    </div>
  );
}
