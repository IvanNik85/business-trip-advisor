import React from "react";

export default function LogOut(props) {
  return (
    <span onClick={props.clicked} style={{ color: "red" }}>
      LOG OUT
    </span>
  );
}
