import "./CityInfo.scss";
import React from "react";
import { Link } from "react-router-dom";
import Feedback from "../../components/Feedback/Feedback";
import ShowHotel from "../../components/Select/ShowHotel";
import CityLifeTransportation from "../../components/CityLifeTransportation/CityLifeTransportation"
import faker from "faker";

export default function CityInfo(props) {
  const { cityName } = props;
  return (
    <div className="cityDiv">
      <div className="cityHeader">
        <div className="cHeaderLeft">
          <h3>Ocu da nadjem info za grad: </h3>

          {"selekt komponenta"}
          <h1>{cityName}City</h1>
        </div>
        <div className="cHeaderRight">
          <a href="#accomodation"> ACCOMODATION</a>
          <a href="#transport">TRANSPORT</a>
          <a href="#citylife">CITYLIFE</a>
        </div>
      </div>

      <div className="aInfoDiv">
        <div className="flex">
          <h2>Accomodation</h2>
          <h6>Our top rated accomodations</h6>
        </div>
        <div className="flex">
          <Link to="/accomodation">SHOW ALL &rArr;</Link>
        </div>

        <div className="flex">{"weder componenta"}</div>
      </div>

      <div
        className="cityInfo"
        id="accomodation"
        style={{
          height: "100vh",
          backgroundColor: "grey",
          border: "1px solid black"
        }}
      >
        <div className="cInfoLeft">
          <ShowHotel
            name={faker.address.streetAddress()}
            city={faker.address.city()}
            text={faker.lorem.paragraph()}
            img={faker.img}
            alt={faker.address.zipCode()}
          />
          {"Map list hotela sa ocenama komponenta"}
        </div>
        <div className="cInfoRight">{"Google Map"}</div>
      </div>


      <CityLifeTransportation title='Transportation' classDiv = {'transportation'}/>
     <CityLifeTransportation title='City Life' classDiv = {'cityLife'}/>

      <div className="hotelReviews">
        <div className="reviewsHeder">
          <h2>Reviews</h2>
          {"sort komponenta"}
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
