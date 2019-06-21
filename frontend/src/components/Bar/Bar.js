import React from "react";
import "./Bar.scss";

function Bar(props) {
  let score = props.score;
  return (
    <div className="wrapBar">
      <div className="barBack">
        <div className="bar" style={{ width: score * 10 + "%" }}></div>
      </div>
      <p>{score}</p>
    </div>
  );
}

export default Bar;
