import "../../global.scss";
import "./contactInfoItems.scss";
import { PersonPin } from "@material-ui/icons";
import React from "react";

export default function ContactInfoItem() {
  return (
    <div className="contactInfoItem">
      <div className="info">
        {" "}
        <PersonPin className="icon" />
        <span className="text"> Seattle, WA</span>
      </div>
    </div>
  );
}
