import React from "react";
import "./Button.scss";

const button = props => (
  <button className={props.classes} onClick={props.clicked}>
    {props.children}
  </button>
);
export default button;
