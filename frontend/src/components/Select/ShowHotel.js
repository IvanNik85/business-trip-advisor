import React from "react";
// import Bar from '../bar';
import "./ShowHotel.scss";
import Bar from "../Bar/Bar";

export default function ShowHotel(props) {
  const { name, city, text, img, score } = props;
  return (
    <div className="element">
      <div className="img">
        <img src={img} alt={name} />
      </div>
      <div>
        <h3>
          {name},{city}
        </h3>
        <p>{text}</p>
        <Bar score={score} />
      </div>
      <div className="rate">{score}</div>
    </div>
  );
}
