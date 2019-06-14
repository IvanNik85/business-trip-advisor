import React from "react";
import "./CityLifeTransportation.scss";
import IconAndText from "../../UI/IconAndText/IconAndText";

export default function CityLifeTransportation(props) {
  const { title } = props;

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
    <div className="cityLife">
      <h1>{title}</h1>
      <div className="cityLifestyle">{icons}</div>
    </div>
  );
}
