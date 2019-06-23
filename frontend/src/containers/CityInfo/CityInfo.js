import "./CityInfo.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

import Feedback from "../../components/Feedback/Feedback";
import ShowHotel from "../../components/Select/ShowHotel";
import Selection from "../../components/Select/Selection";
import CityLife from "../../components/CityLifeTransportation/CityLife";
import Icon from "../../UI/Icon/Icon";
import Modal from "../../UI/Modal/Modal";
import ModalBodyFeedAndPOI from "../../UI/Modal/ModalBodyFeedPoi/ModalBodyFeedPoi";
import ModalHeader from "../../UI/Modal/ModalHeader/ModalHeader";
import ModalTextArea from "../../UI/Modal/ModalTextArea/ModalTextArea";
import TextArea from "../../UI/TextArea/TextArea";

import weatherData from "../../weaterData";

class CityInfo extends Component {
  state = {
    accomodation: [],
    weatherData,
    rewOption: ""
  };

  getAccomodations = data => {
    //poziv da spusti sa baze 4 top rated akomodations za grad koji je stejt!
    this.setState({ accomodation: data });
  };
  setRewOption = val => {
    this.setState({ rewOption: val });
  };

  render() {
    const {
      cityName,
      cityList,
      setSelectedCity,
      setId,
      data,
      modalShow,
      modalOpen,
      modalClose
    } = this.props;
    return (
      <div className="cityDiv">
        <div className="cityHeader">
          <div className="cHeaderLeft">
            <div className="flex">
              <h3>Ocu da nadjem info za grad: </h3>
              <h1>{cityName}</h1>
            </div>
            <div className="flex">
              <Selection
                options={cityList}
                setOption={setSelectedCity}
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
                clicked={modalOpen}
              />
            </div>
          </div>

          <Feedback />
          <Modal
            style={{ "z-index": 50 }}
            show={modalShow}
            clicked={modalClose}
          >
            <ModalHeader
              clicked={modalClose}
              closeSpanClicked={modalClose}
              title={"City Life Feedback"}
              save={"SAVE"}
            />
            <ModalBodyFeedAndPOI
              title1={"Feedback"}
              title2={"POI"}
              setOption={this.setSelectedCategory}
            />
          </Modal>
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
)(CityInfo);
