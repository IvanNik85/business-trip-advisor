import React from "react";

const InputField = props => {
  const { type, name, placeholder, onChangeHandler, classes } = props;

  return (
    <input
      className={classes}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
export default InputField;
