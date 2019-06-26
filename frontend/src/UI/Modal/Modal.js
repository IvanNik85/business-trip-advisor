import React from "react";
import Backdrop from "./Backdrop";
import "./Modal.scss";

const modal = props => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.clicked} />      
    </>
  );
};

export default modal;
