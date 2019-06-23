import "./CityInfo.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Feedback from "../../components/Feedback/Feedback";
import ShowHotel from "../../components/Select/ShowHotel";
import Selection from "../../components/Select/Selection";
import CityLifeTransportation from "../../components/CityLifeTransportation/CityLifeTransportation";
// import Icon from "../../UI/Icon/Icon";
import Button from '../../UI/Button/Button'
import Weather from "../../components/Weather/Weather";
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
            <div className="headerCityInfo">
              <h3>Ocu da nadjem info za grad: </h3>
              <h1>{cityName}</h1>
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
            <a href="#cityife">CITYLIFE</a>
          </div>
        </div>
        <CityLifeTransportation
          title="Accomodation"
          contDiv="accomodation"
          iconDiv="accomodationStyle"
          setId={setId}
          id={9}
          data={data}
        />
        <CityLifeTransportation
          title="Transportation"
          contDiv="transportation"
          iconDiv="transportStyle"
        />
        <CityLifeTransportation
          title="City Life"
          contDiv="cityLife"
          iconDiv="cityLifestyle"          
        />
        <div className="hotelReviews">
          <div className="reviewsHeder">
            <div className="flex">
              <h2>Reviews</h2>              
            </div>
            <div className="flex1">
              {/* <Icon
                iconClass={"plus-circle"}
                color={"addComentIcon"}
                fontSize={60}
                clicked={() => console.log("radi ikon klik")}
              />              */}
              <Button classes={'addComment'} 
                  clicked={() => console.log("radi ikon klik")}>                  
                    +
              </Button> 
                <h3>SORT</h3>
                <Selection
                  options={["LATEST", "DATE", "SCORE"]}
                  setOption={this.setRewOption}
                  classes="rewSelect"
                />
            </div>
          </div>

          <Feedback />
        </div>
      </div>
    );
  }
}
