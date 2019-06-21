import React, { Component } from "react";
import "./CityLifeTransportation.scss";
import Icon from "../../UI/Icon/Icon";
import IconAndText from "../../UI/IconAndText/IconAndText";
import ShowHotel from "../Select/ShowHotel";
import AccomodationFiles from "./AccomodationFiles";


class CityLifeTransportation extends Component {
  state = {
    id: "hidden",
    transform: true,    
  };

  handleClick = () => {
    this.setState({
      id: this.state.id === "hidden" ? "visible" : "hidden",
      transform: !this.state.transform
    });
  };

  render() {
    const { title, contDiv, iconDiv, setId, data } = this.props;
    

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
    let showHotel = null;

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
    } else if (title === "Transportation") {
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
    } else {  
      icons = null;     
    }
    

    return (
      <div className={contDiv} id={contDiv}>
        <div className="title" onClick={this.handleClick}>
          <h1>{title}</h1>
          <span>
            <i
              style={{
                transform: this.state.transform
                  ? "rotate(0deg)"
                  : "rotate(180deg)",
                transition: "0.4s"
              }}
              className="fas fa-chevron-down"
            />
          </span>
        </div>
        <div className={iconDiv} id={this.state.id}>
          {icons}    
          {title === "Accomodation" && <AccomodationFiles setId={setId} id={9} data={data} />}     
        </div>
      </div>
    );
  }
}

export default CityLifeTransportation;
