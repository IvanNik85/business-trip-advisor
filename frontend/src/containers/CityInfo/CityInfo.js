import "./CityInfo.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Feedback from "../../components/Feedback/Feedback";
import ShowHotel from "../../components/Select/ShowHotel";
import Selection from "../../components/Select/Selection";
import CityLife from "../../components/CityLifeTransportation/CityLife";
import Icon from "../../UI/Icon/Icon";

import weatherData from "../../weaterData";
const data = ["asdasdl", "kakakka", "kakakka"];

export default class CityInfo extends Component {
  state = {
    selectedCity: "",
    accomodation: [],
    weatherData,
    rewOption: ""
  };

  setSelectedCity = value => {
    this.setState({ selectedCity: value }, this.getAccomodations());
  };

  getAccomodations = () => {
    //poziv da spusti sa baze 4 top rated akomodations za grad koji je stejt!
    this.setState({ accomodation: data });
  };
  setRewOption = val => {
    this.setState({ rewOption: val });
  };

  render() {
    const { cityName, cityList, setId, data } = this.props;
    return (
      <div className="cityDiv">
        <div className="cityHeader">
          <div className="cHeaderLeft">
            <div className="flex">
              <h3>Ocu da nadjem info za grad: </h3>
              <h1>{cityName}City</h1>
            </div>
            <div className="flex">
              <Selection
                options={cityList}
                setOption={this.setSelectedCity}
                classes={"selectCity"}
              />
            </div>
          </div>
          <div className="cHeaderRight">
            <a href="#accomodation"> ACCOMODATION</a>
            <a href="#transportation">TRANSPORT</a>
            <a href="#cityLife">CITYLIFE</a>
          </div>
        </div>
        <CityLife
          title="Accomodation"
          contDiv="accomodation"
          iconDiv="accomodationStyle"
          setId={setId}
          id={9}
          data={data}
        />
        <CityLife
          title="Transportation"
          contDiv="transportation"
          iconDiv="transportStyle"
        />
        <CityLife
          title="City Life"
          contDiv="cityLife"
          iconDiv="cityLifestyle"
        />
        <div className="hotelReviews">
          <div className="reviewsHeder">
            <div className="flex">
              <h2>Reviews</h2>
              <Selection
                options={["latest", "date", "score"]}
                setOption={this.setRewOption}
                classes="rewSelect"
              />
            </div>
            <div className="flex">
              <Icon
                iconClass={"comment-medical"}
                color={"addComentIcon"}
                fontSize={60}
                clicked={() => console.log("radi ikon klik")}
              />
            </div>
          </div>

          <Feedback />
        </div>
      </div>
    );
  }
}
