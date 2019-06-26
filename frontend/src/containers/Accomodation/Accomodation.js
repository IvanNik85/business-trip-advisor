import React, { Component } from "react";
import "./Accomodation.scss";
import ShowHotel from '../../components/Select/ShowHotel'
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actions";
import { isTemplateElement } from "@babel/types";


 class Accomodation extends Component {
  render() {
    let hotels = this.props.data.map((hotel,index) => <ShowHotel  key={index} data={hotel} /> )
    return (
      <div className="accomDiv">
        <div className="accomSelect">
          <h3>Selecet accomodation komponenta</h3>
        </div>
        <div className="accomInfo">
          <div className="accomList">
            <div className="accomUnit">
              <div className="accomListLeft">{hotels}</div>
              <div className="accomListRight">
               
              </div>
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
    data : state.accommodations
  };
};
/*const mapDispatchToProps = dispatch => {
  return {
    setSelectedCity: city => dispatch(setSelectedCity(city)),
    modalOpen: () => dispatch({ type: actionTypes.MODAL_OPEN }),
    modalClose: () => dispatch({ type: actionTypes.MODAL_CLOSE }),
    setCities: cities => dispatch(setCities(cities))
  };
};*/

export default connect(
  mapStateToProps
)(Accomodation);
