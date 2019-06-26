import React from "react";
import "./ShowHotel.scss";
import Bar from "../Bar/Bar";

export default function ShowHotel(props) {
  const { data, id, setId } = props;
  console.log(data);
  return (
    <div className="wrapElement">
      <div className="element">
        <div className="img">
          <img src={data.img} alt={data.name} />
        </div>
        <div className="hotelData">
          <h1 onClick={() => setId(id)}> {data.name}</h1>
<<<<<<< HEAD
          {/*<h3>{data.subtitle}</h3>*/}
=======
          <h3>{data.category}</h3>
>>>>>>> 802bc0c5794237b1a02e9f7d622fdf7a73a615b8
          <p>{data.description.slice(0, 170)}</p>
          <Bar score={data.rate} />
        </div>
        <div className="score">
          <Bar score={data.rate} />
        </div>
      </div>
    </div>
  );
}
