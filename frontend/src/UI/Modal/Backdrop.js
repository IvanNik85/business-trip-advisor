import React from "react";
import "./Backdrop.scss";
import "./Modal.scss";

const Backdrop = props =>
props.show ? (<div className={"backDrop"} onClick={props.clicked}></div>) :  null;

export default Backdrop;
