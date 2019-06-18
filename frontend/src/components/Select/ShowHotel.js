import React from "react";
import "./ShowHotel.scss";
import Bar from "../Bar/Bar";

export default function ShowHotel(props) {
  const { data, id, setId } = props;
  console.log(id);
  return (
    <div className="element">
      <div className="img">
        <img src={data.img} alt={data.title} />
      </div>
      <div className="hotelData">
        <h1 onClick={() => setId(id)}> {data.title}</h1>
        <h3>{data.subtitle}</h3>
        <p>{data.text}</p>
        <Bar score={data.score} />
      </div>
    </div>
  );
}
