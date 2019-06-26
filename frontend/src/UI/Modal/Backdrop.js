import React from "react";
import "./Backdrop.scss";
import "./Modal.scss";

const Backdrop = props =>
  props.show ? 
  (<div className={"backDrop"} onClick={props.clicked}>
    <div
      className={"containerModal"}
      style={{ display: props.show ? "block" : "none" }}
    >
      {props.children}
    </div>
  </div>) : 
  null;

export default Backdrop;
