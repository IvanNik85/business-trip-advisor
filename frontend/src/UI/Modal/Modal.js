import React from "react";
import Backdrop from "./Backdrop";
import "./Modal.scss";

const modal = props => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.clicked} />
      <div
        // className={"containerModal"}
        className={props.classes}
        style={{ display: props.show ? "block" : "none" }}
      >
        {props.children}
      </div>
    </>
  );
};

export default modal;
