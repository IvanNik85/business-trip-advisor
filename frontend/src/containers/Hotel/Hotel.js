import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import "./Hotel.scss";
import Feedback from "../../components/Feedback/Feedback";
import Selection from "../../components/Select/Selection";
import Weather from "../../components/Weather/Weather";
import weatherData from "../../weaterData";

class Hotel extends Component {
  state = {
    option: "",
    weatherData
  };
  setOption = val => {
    this.setState({ option: val });
  };
  render() {
    return (
      <div className="hotelDiv">
        Hotel in city {this.props.cityName}
        <div className="hotelHeader">
          <h1>Hotel header</h1>
        </div>
        <div className="hotelInfo">
          <div className="hInfoLeft">
            <div className="flex">
              <img
                src={this.props.data.img}
                alt={this.props.data.title}
                width="300"
              />
            </div>
            <div className="flex">
              <h1>{this.props.data.title}</h1>
              <h6>{this.props.data.subtitle}</h6>
              <p>{this.props.data.text}</p>
            </div>
          </div>
          <div className="hInfoRight">
            <div id="weather">
              <Weather
                summary={this.state.weatherData.currently.summary}
                icon={this.state.weatherData.currently.icon}
                temperature={this.state.weatherData.currently.temperature}
              />
            </div>
            {"Hotel Map komponenta"}
          </div>
        </div>
        <div className="hotelReviews">
          <div className="reviewsHeder">
            <h2>Reviews</h2>
            <Selection
              setOption={this.setOption}
              options={["latest", "oldest", "Top rated"]}
            />
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
}
const mapStateToProps = state => {
  return {
    cityName: state.selectedCity,
    modalShow: state.modalShow
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setSelectedCity: city =>
      dispatch({ type: actionTypes.SET_SELECTED_CITY, cityName: city }),
    modalOpen: () => dispatch({ type: actionTypes.MODAL_OPEN }),
    modalClose: () => dispatch({ type: actionTypes.MODAL_CLOSE })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotel);
