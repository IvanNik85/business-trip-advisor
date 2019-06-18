import React from "react";
import "./CloseSpan.scss";

const CloseSpan = props => {
  return (
    <div className="close">
      <span onClick={props.clicked}>&times;</span>
    </div>
  );
};
export default CloseSpan;
