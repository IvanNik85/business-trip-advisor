import "./CityInfo.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Feedback from "../../components/Feedback/Feedback";
import ShowHotel from "../../components/Select/ShowHotel";
import Selection from "../../components/Select/Selection";
import CityLifeTransportation from "../../components/CityLifeTransportation/CityLifeTransportation";

export default class CityInfo extends Component {
  state = {
    selectedCity: ""
  };

  setSelectedCity = value => {
    this.setState({ selectedCity: value });
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
              <Selection options={cityList} setCity={this.setSelectedCity} />
            </div>
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
        <div className="cityInfo" id="accomodation">
          <div className="cInfoLeft">
            <ShowHotel setId={this.props.setId} id={9} data={this.props.data} />
            {"Map list hotela sa ocenama komponenta"}
          </div>
          <div className="cInfoRight">{"Google Map"}</div>
        </div>
        <CityLifeTransportation title="Transportation" />
        <CityLifeTransportation title="City Life" />
        <div className="hotelReviews">
          <div className="reviewsHeder">
            <div className="flex">
              <h2>Reviews</h2>
              {"sort komponenta"}
            </div>
            <div className="flex">
              <i
                className="fas fa-comment-medical"
                onClick={() => console.log("rade ikon")}
              />
            </div>
          </div>

          <Feedback />
        </div>
      </div>
    );
  }
}
