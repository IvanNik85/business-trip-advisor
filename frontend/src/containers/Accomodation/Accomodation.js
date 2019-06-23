import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import "./Accomodation.scss";
import Image from "../../UI/Image/Image";

class Accomodation extends Component {
  render() {
    return (
      <div className="accomDiv">
        Accomodation in city {this.props.cityName}
        <div className="accomSelect">
          <h3>Selecet accomodation komponenta</h3>
        </div>
        <div className="accomInfo">
          <div className="accomList">
            <div className="accomUnit">
              <div className="accomListLeft">{"Unit komponenta"}</div>
              <div className="accomListRight" />
            </div>
          </div>
          <div className="accomMap">
            <h3>Accomodation map komponenta</h3>
          </div>
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
)(Accomodation);
