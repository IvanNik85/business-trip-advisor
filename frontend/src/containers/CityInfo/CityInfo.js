import "./CityInfo.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actions";
import { setSelectedCity } from "../../store/actions/actions";
import { setCities } from "../../store/actions/actions";

import Feedback from "../../components/Feedback/Feedback";
import SelectCity from "../CityInfo/SelectCity/SelectCity";
import { getAllCities } from "../../store/actions/actions";
import { getAllaccommodations } from "../../store/actions/actions";
import { getAllfeedbacks } from "../../store/actions/actions";
import store from "../../index";
import Selection from "../../components/Select/Selection";
import CityLifeTransportation from "../../components/CityLifeTransportation/CityLifeTransportation";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal"
import ModalHeader from "../../UI/Modal/ModalHeader/ModalHeader"
import ModalBodyFeedAndPOI from "../../UI/Modal/ModalBodyFeedPoi/ModalBodyFeedPoi"
import ModalTextArea from "../../UI/Modal/ModalTextArea/ModalTextArea"



class CityInfo extends Component {
  state = {
    
      filteredAcc: [],
      sortedFeedbacks: [],
      filteredCategoryFeedbacks: [],
  
      rewOption: ""
  }

  componentDidMount() {
    store.dispatch(getAllCities());
    store.dispatch(getAllaccommodations());
    store.dispatch(getAllfeedbacks());
  }

  setRewOption = val => {
    this.setState({ rewOption: val });
  };

  modalOpenHandler = () => {
    this.setState({ modalShow: true });
  };

  modalClosedHandler = () => {
    this.setState({ modalShow: false });
  };
  setFilteredAcc = (val, id) => {
    this.props.setSelectedCity(val);
    let filteredAcc = [...this.props.allAccommodations];
    let acc = filteredAcc
      .filter(item => {
        return item.city == id;
      })
      .sort((a, b) => {
        return b.rate - a.rate;
      })
      .slice(0, 3);

    this.setState({ filteredAcc: acc });
  };
  setRewOption = val => {
    this.setState({ rewOption: val });
  };

  filterFeedbacks = value => {
    let feedbacks = [...this.props.feedbacks];
    let sortedFeedbacks;
    switch (value) {
      case "LATEST":
        sortedFeedbacks = feedbacks.sort((a, b) => {
          return b.date - a.date;
        });
        break;
      case "SCORE":
        sortedFeedbacks = feedbacks.sort((a, b) => {
          return b.rating - a.rating;
        });
        break;

      default:
        sortedFeedbacks = feedbacks;
        break;
    }
    this.setState({ sortedFeedbacks: sortedFeedbacks });
  };
  filterCategoryFeedbacks = category => {
    let feedbacks = [...this.props.feedbacks];
    let filteredCategoryFeedbacks = feedbacks.filter(
      item => item.category === category
    );
    this.setState({ filteredCategoryFeedbacks: filteredCategoryFeedbacks });
  };

  render() {
    const { cityName, setSelectedCity, setId, data } = this.props;
    return (
      <div className="cityDiv">
        <div className="cityHeader">
          <div className="cHeaderLeft">
            <div className="flex">
              <h3>I'd like to get info on the city: </h3>    
              <SelectCity
                classes={"selectCity"}
                cityList={this.props.allCities}
                selection={this.setFilteredAcc}
              />
            </div>    
            <h1>{cityName}</h1>      
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
              {/* <Icon
                iconClass={"plus-circle"}
                color={"addComentIcon"}
                fontSize={60}
                clicked={() => console.log("radi ikon klik")}
              />              */}
              <Button classes={'addComment'} 
                  clicked={this.modalOpenHandler}>                  
                    +
              </Button> 
              <Modal
                classes='containerModal'
                style={{ "z-index": 50 }}
                show={this.state.modalShow}
                clicked={this.modalClosedHandler}
              >          
                <ModalHeader
                  clicked={this.modalClosedHandler}
                  closeSpanClicked={this.modalClosedHandler}
                  title={"Add comment"}
                  save={"SAVE"}
                />
                {/* <TextArea label={"Your comment"} className="modalTxtArea" /> */}           
                <ModalBodyFeedAndPOI
                  title1={"Feedback"}
                  title2={"POI"}
                  setOption={this.setSelectedCategory}
                />
              
              </Modal>
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
    allAccommodations: state.accommodations,
    allFeedbacks: state.feedbacks
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
