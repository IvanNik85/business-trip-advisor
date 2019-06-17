import React from "react";
import "./ModalTitle.scss";

const ModalTitle = props => {
  const { title, classes } = props;

  return (
    <div className={["modalTitle", classes].join(" ")}>
      <h2>{title}</h2>
      {props.children}
    </div>
  );
};

export default ModalTitle;
