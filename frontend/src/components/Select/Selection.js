import React from "react";
import "./Selection.scss";

export default function Selection(props) {
  const { options, setOption, classes } = props;

  const opt = options.map((item, i) => (
    <option key={i} value={item}>
      {item}
    </option>
  ));
  return (
    <div className={classes}>
      <select onChange={e => setOption(e.target.value)}>{opt};</select>
    </div>
  );
}
