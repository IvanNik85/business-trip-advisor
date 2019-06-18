import React from "react";
import "./ModalHeader.scss";
import CloseSpan from "../../CloseSpan/CloseSpan";
import ModalTitle from "./ModalTitle";

const ModalHeader = props => {
  return (
    <div className="modalHeaderContainer">
      <CloseSpan clicked={props.closeSpanClicked} />
      <ModalTitle title={props.title}>
        <span className="save">{props.save}</span>
      </ModalTitle>
    </div>
  );
};
export default ModalHeader;
