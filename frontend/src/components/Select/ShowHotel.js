import React from "react";
import "./ShowHotel.scss";
import Bar from "../Bar/Bar";

export default function ShowHotel(props) {
  const { data, id, setId } = props;
  console.log(data);
  let star = '< i class="fas fa star"></i>';
  let starComlete=[];
  for(let i =0;i<data.category;i++){
    starComlete.push(i);
  }

  return (
    <div className="wrapElement">
      <div className="element">
        <div className="img">
          <img src={data.img} alt={data.name} />
        </div>
        <div className="hotelData">
          <h1 onClick={() => setId(id)}> {data.name}</h1>
          {/* <h3>{data.category}</h3> */}
          <div>{starComlete.map(item => < i className="fas fa-star" style={{'fontSize' :'15px', 'color':'yellow'}} key = {item}></i>)}</div>
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