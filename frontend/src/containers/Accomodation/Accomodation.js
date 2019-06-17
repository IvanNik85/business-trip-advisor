import React, { Component } from "react";
import "./Accomodation.scss";


export default class Accomodation extends Component {
  render() {
    return (
      <div className="accomDiv">
        <div className="accomSelect">
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
        </div>
      </div>
    );
  }
}
