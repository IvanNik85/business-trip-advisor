import React from "react";
import Option from "./Options";

function Sort(props) {
  const nizOpcija = props.opcije.map(option => {
    return <Option value={option} text={option} />;
  });

  return (
    <div>
      <h5>SORT</h5>
      <select id="select">{nizOpcija}</select>
    </div>
  );
}

export default Sort;
