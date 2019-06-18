import React from "react";
import "./Icon.scss";

export default function Icon(props) {
  const { iconClass, fontSize, color, clicked } = props;
  return (
    <i
      className={[`fas fa-${iconClass}`, color].join(" ")} style={{ fontSize: fontSize }} onClick={clicked}
    />
  );
}
