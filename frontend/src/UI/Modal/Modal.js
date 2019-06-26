import React from "react";
import Backdrop from "./Backdrop";
import "./Modal.scss";

const modal = props => {
  return (   
    <> 
    <Backdrop 
      style={{'z-index':props.index}}
      show={props.show} 
      clicked={props.clicked} 
      />
    <div
      className={"containerModal"}
      style={{ display: props.show ? "block" : "none" }}
    >
      {props.children}
    </div>   
    </>  
  );
};

export default modal;
