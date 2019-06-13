import React from "react";

export default function AccObject(props) {
  const { img, type, name, address, web, rate, phone, mail } = props;
  return (
    <div className="accObjectDiv">
      <div className="accObjectLeft">{"img"}</div>
      <div className="accObjectRight">{"infoObj"}</div>
    </div>
  );
}
