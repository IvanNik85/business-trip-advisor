import React, { Component } from "react";
import "./AdminPanel.scss";
import TestComp from "./TestComp";
import ModalAddNewAccomodation from "../../UI/Modal/ModalNewAccomodation/ModalNewAccomodation"
import ModalAddNewTranspotation from "../../UI/Modal/ModalNewTransportation/ModalNewTransportation";

export default class AdminPanel extends Component {
  state = {
    selectedCategoryTransport: "",
    selectedCategoryAccom: "",
    selectedCategoryStars: ""
  };
  setSelectedCategory = value => {
    if (value === "Bus" || value === "Airplane" || value === "Taxi") {
      this.setState({ selectedCategoryTransport: value });
    } else if (
      value === "Hotel" ||
      value === "Hostel" ||
      value === "Apartments"
    ) {
      this.setState({ selectedCategoryAccom: value });
    } else {
      this.setState({ selectedCategoryStars: value });
    }
  };

  render() {
    return (
      <div className="adminContainer">
        <TestComp
          classes='accomodation'
          name="Add New Accomodation"
          displayDiv="accomodationStyleModal"
          content="content from component accomodation"
        >
          {/* {'cela komponenta ovde'} */}
          <ModalAddNewAccomodation setOption={this.setSelectedCategory} />
        </TestComp>

        <TestComp 
        classes='transportation'
          name="Add New Transportation"
          displayDiv="accomodationStyleModal"
          content="content from componentranspotation"
        >
          <ModalAddNewTranspotation setOption={this.setSelectedCategory} />
        </TestComp>

        <TestComp
        classes='cityLife'
          name="Feedbacks"
          displayDiv="accomodationStyleModal"
          content="content from componentfeedback"
        >
          {
            'mapirani fidbeci sa komentarima conditional render admin? za <i className="fas fa-minus-circle" onClick={console.log("del")}></i>'
          }
        </TestComp>
      </div>
    );
  }
}
