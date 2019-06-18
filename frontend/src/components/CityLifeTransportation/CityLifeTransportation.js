import React, { Component } from "react";
import "./CityLifeTransportation.scss";
import Icon from "../../UI/Icon/Icon";
import IconAndText from "../../UI/IconAndText/IconAndText";

class CityLifeTransportation extends Component {
  constructor() {
    super();
    this.state = {
      id: "hidden",
      transform: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      id: this.state.id === "hidden" ? "visible" : "hidden"
    });
  }

  render() {
    const { title, contDiv, iconDiv } = this.props;

    const iconClassesCity = [
      { "Food and Drinks": "hamburger" },
      { Safety: "user-shield" },
      { Sightseeing: "binoculars" },
      { "Local Transport": "bus" },
      { "Local Culture": "university" },
      { Other: "map-signs" }
    ];

    const iconClassesTransport = [
      { Aeroplane: "plane" },
      { "Rent a Car": "car" },
      { Bus: "bus-alt" },
      { Subway: "subway" },
      { Taxi: "taxi" }
    ];
    let icons = null;

    if (title === "City Life") {
      icons = iconClassesCity.map((el, i) => {
        return (
          <IconAndText
            key={i}
            iconClass={Object.values(el)}
            color={"color" + i}
            title={Object.keys(el)}
          />
        );
      });
    } else {
      icons = iconClassesTransport.map((el, i) => {
        return (
          <IconAndText
            key={i}
            iconClass={Object.values(el)}
            color={"color" + i}
            title={Object.keys(el)}
          />
        );
      });
    }

    return (
      <div className={contDiv}>
        <div className="title" onClick={this.handleClick}>
          <h1>{title}</h1>
          <span>
            <i className="fas fa-chevron-down" />
          </span>
        </div>
        <div className={iconDiv} id={this.state.id}>
          {icons}
        </div>
      </div>
    );
  }
}

export default CityLifeTransportation;
