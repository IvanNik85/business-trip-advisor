import "./CityInfo.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actions";
import { setSelectedCity } from "../../store/actions/actions";
import { setCities } from "../../store/actions/actions";
import axios from "axios";

import Feedback from "../../components/Feedback/Feedback";
import ShowHotel from "../../components/Select/ShowHotel";
import Selection from "../../components/Select/Selection";
import CityLifeTransportation from "../../components/CityLifeTransportation/CityLifeTransportation";
import Button from "../../UI/Button/Button";
import SelectCity from "../CityInfo/SelectCity/SelectCity";
import { getAllaccommodations } from "../../store/actions/actions";
import store from "../../index";

//const data = ["asdasdl", "kakakka", "kakakka"];

class CityInfo extends Component {
  state = {
    filteredAcc: [],

    rewOption: ""
  };

  componentDidMount() {
    store.dispatch(getAllaccommodations());
  }
  setFilteredAcc = (val, id) => {
    this.props.setSelectedCity(val);
    let filteredAcc = [...this.props.allAccommodations];
    let acc = filteredAcc.filter(item => {
      //console.log(item.city, "hotelov grad");
      // console.log(id + "  id selektovanog grada");
      return item.city == id;
    });

    this.setState({ filteredAcc: acc });
  };
  setRewOption = val => {
    this.setState({ rewOption: val });
  };
  componentWillUpdate(prevProps) {
    if (prevProps.cityName !== this.props.cityName) {
      this.filterNsort(this.props.cityName);
    }
  }

  render() {
    const { cityName, setSelectedCity, setId, data } = this.props;
    return (
      <div className="cityDiv">
        <div className="cityHeader">
          <div className="cHeaderLeft">
            <div className="flex">
              <h3>Ocu da nadjem info za grad: </h3>
              <h1>{cityName}</h1>
            </div>
            <div className="flex">
              {/*<Selection
                options={this.state.cityList}
                setOption={this.props.setSelectedCity}
                classes={"selectCity"}
              />*/}
              <SelectCity
                classes={"selectCity"}
                cityList={this.props.allCities}
                selection={this.setFilteredAcc}
              />
            </div>
          </div>
          <div className="cHeaderRight">
            <a href="#accomodation"> ACCOMODATION</a>
            <a href="#transportation">TRANSPORT</a>
            <a href="#cityLife">CITYLIFE</a>
          </div>
        </div>
        <CityLifeTransportation
          title="Accomodation"
          contDiv="accomodation"
          iconDiv="accomodationStyle"
          setId={setId}
          id={9}
          data={this.state.filteredAcc}
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
              <Button
                classes={"addComment"}
                clicked={() => console.log("radi ikon klik")}
              >
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

const mapStateToProps = state => {
  return {
    cityName: state.selectedCity,
    modalShow: state.modalShow,
    allCities: state.cities,
    allAccommodations: state.accommodations
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setSelectedCity: city => dispatch(setSelectedCity(city)),
    modalOpen: () => dispatch({ type: actionTypes.MODAL_OPEN }),
    modalClose: () => dispatch({ type: actionTypes.MODAL_CLOSE }),
    getCities: cities => dispatch(setCities(cities))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityInfo);
