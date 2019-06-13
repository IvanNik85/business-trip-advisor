import React from "react";
import "./Selection.scss";

export default function Selection(props) {
  const { options } = props;

  const opt = options.map(item => <option value={item}>{item}</option>);
  return (
    <div>
      <select>{opt};</select>
    </div>
  );
}
