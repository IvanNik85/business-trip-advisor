import React from "react";
import "./ModalBodyPoi.scss";

const ModalBodyPOI = props =>
  props.show ? (
    <div>
      <span style={{ display: "block", height: "20em" }}>
        Isto sto i iz feedbackA plus mapa
      </span>
    </div>
  ) : null;

export default ModalBodyPOI;
