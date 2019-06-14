import React from "react";
import "./Selection.scss";

export default function Selection(props) {
  const { options, setCity } = props;

  const opt = options.map((item, i) => (
    <option key={i} value={item}>
      {item}
    </option>
  ));
  return (
    <div>
      <select onChange={e => setCity(e.target.value)}>{opt};</select>
    </div>
  );
}
