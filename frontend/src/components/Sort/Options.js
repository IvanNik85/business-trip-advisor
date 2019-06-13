import React from "react";

export default function Options(props) {
  const { value, text } = props;
  return <option value={value}>{text}</option>;
}
