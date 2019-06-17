import React from "react";
import "./Hotel.scss";
import Feedback from "../../components/Feedback/Feedback";
import Selection from "../../components/Select/Selection";

export default function Hotel(props) {
  const { id, data } = props;
  // data info
  return (
    <div className="hotelDiv">
      <div className="hotelHeader">
        <h1>Hotel header</h1>
      </div>

      <div className="hotelInfo">
        <div className="hInfoLeft">
          <div className="flex">
            <img src={data.img} alt={data.title} width="300" />
          </div>
          <div className="flex">
            <h1>{data.title}</h1>
            <h6>{data.subtitle}</h6>
            <p>{data.text}</p>
          </div>
        </div>
        <div className="hInfoRight">
          {"Weather komponenta"} <br />
          {"Hotel Map komponenta"}
        </div>
      </div>
      <div className="hotelReviews">
        <div className="reviewsHeder">
          <h2>Reviews</h2>
          <Selection options={["latest", "oldest", "Top rated"]} />
          <i
            className="fas fa-comment-medical"
            onClick={() => console.log("rade ikon")}
          />
        </div>
        <Feedback />
      </div>
    </div>
  );
}
