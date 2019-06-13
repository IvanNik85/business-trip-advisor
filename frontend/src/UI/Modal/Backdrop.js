import React from "react";
import "./Backdrop.scss";

const Backdrop = props =>
  props.show ? (
    <div
      style={{ backgroundColor: "rgba(3,255,255,0.8)", height: "600px" }}
      onClick={props.clicked}
    />
  ) : null;

export default Backdrop;
