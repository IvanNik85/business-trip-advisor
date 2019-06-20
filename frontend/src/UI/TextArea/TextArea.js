import React from "react";
import "./TextArea.scss";

const TextArea = props => {
  let { rows, cols, placeholder, label, classes, onChangeHandler } = props;

  return (
    <div className={["textArea-container", classes].join(" ")}>
      <label className="label">{label}</label>
      <textarea
        cols={rows}
        rows={cols}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};
export default TextArea;
