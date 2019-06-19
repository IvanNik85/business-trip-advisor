import "./CityInfo.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Feedback from "../../components/Feedback/Feedback";
import ShowHotel from "../../components/Select/ShowHotel";
import Selection from "../../components/Select/Selection";
import CityLifeTransportation from "../../components/CityLifeTransportation/CityLifeTransportation";
import Icon from "../../UI/Icon/Icon";
import Weather from "../../components/Weather/Weather";
import weatherData from "../../weaterData";
const data = ["lalal", "kakakka", "kakakka"];

export default class CityInfo extends Component {
  state = {
    selectedCity: "",
    accomodation: [],
    weatherData
  };

  setSelectedCity = value => {
    this.setState({ selectedCity: value }, this.getAccomodations());
  };

  getAccomodations = () => {
    //poziv da spusti sa baze 4 top rated akomodations za grad koji je stejt!
    this.setState({ accomodation: data });
  };

  render() {
    const { cityName, cityList } = this.props;
    return (
      <div className="cityDiv">
        <div className="cityHeader">
          <div className="cHeaderLeft">
            <div className="flex">
              <h3>Ocu da nadjem info za grad: </h3>
              <h1>{cityName}City</h1>
            </div>
            <div className="flex">
              <Selection options={cityList} setOption={this.setSelectedCity} />
            </div>
          </div>
          <div className="cHeaderRight">
            <a href="#accomodation"> ACCOMODATION</a>
            <a href="#transportation">TRANSPORT</a>
            <a href="#cityife">CITYLIFE</a>
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
          <div className="flex">
            <Weather
              summary={this.state.weatherData.currently.summary}
              icon={this.state.weatherData.currently.icon}
              temperature={this.state.weatherData.currently.temperature}
            />
          </div>
        </div>
        <div className="cityInfo" id="accomodation">
          <div className="cInfoLeft">
            <ShowHotel setId={this.props.setId} id={9} data={this.props.data} />
            {"Map list hotela sa ocenama komponenta"}
          </div>
          <div className="cInfoRight">{"Google Map"}</div>
        </div>
        <CityLifeTransportation
          title="Accomodation"
          contDiv="accomodation"
          iconDiv="accomodationStyle"
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
              {"sort komponenta"}
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
