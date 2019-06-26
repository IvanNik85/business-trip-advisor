import React, { Component } from "react";
import "./Accomodation.scss";
import Image from "../../UI/Image/Image";
import Selection from '../../components/Select/Selection'

export default class Accomodation extends Component {
  state = {
    cityList: ["1", "2","3"]
  }
  render() {
    const { cityName, setSelectedCity, setId, data } = this.props;
    return (
      <div className="accomDiv">
        {/* <div className="accomSelect">
          <h3>Selecet accomodation komponenta</h3>
        </div>
        <div className="accomInfo">
          <div className="accomList">
            <div className="accomUnit">
              <div className="accomListLeft">{"Unit komponenta"}</div>
              <div className="accomListRight">
               
              </div>
            </div>
          </div>
          <div className="accomMap">
            <h3>Accomodation map komponenta</h3>
          </div>
        </div> */}
        <div className="flex">
          <h3>I'd like to get info on the city: </h3>
          <Selection
            options={this.state.cityList}
            setOption={setSelectedCity}
            classes={"selectCity"}
          />
        </div>
        <div className='accomodationContainer'>
          
        </div>

      </div>
    );
  }
}
