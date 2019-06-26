import React from "react";
import "./Bar.scss";

function Bar(props) {
  let score = props.score;
  let style = "";
  if(score<=4) {
    style = "#e0131d"
  } else if (score < 8){
    style = "#fab823"
  } else {
    style = "#48b91a"
  }
  return (
    <div className="wrapBar">
      <div className="barBack">
        <div className="bar" style={{ width: score * 10 + "%", backgroundColor: style }}></div>
      </div>
      <p>{score}</p>
    </div>
  );
}

export default Bar;
