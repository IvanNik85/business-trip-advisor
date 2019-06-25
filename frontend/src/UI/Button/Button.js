import React from "react";
import "./Button.scss";

const button = props => (
  <button type={props.type} className={props.classes} onClick={props.clicked}>
    {props.children}
  </button>
);
export default button;
