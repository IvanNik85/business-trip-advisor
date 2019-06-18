import React, { Component } from "react";
import weatherData from "../../weaterData";
import Skycons from "skycons-component";

export default class Home extends Component {
  state = {
    weatherData
  };

  render() {
    console.log(this.state.weatherData);
    const icon = this.state.weatherData.currently.icon;
    let iconColor = "black";
    if (icon == "clear-day") {
      iconColor = "orange";
    }
    return (
      <Skycons
        icon={icon}
        animate={false}
        iconColor={iconColor}
        style={{ width: 64, height: 64 }}
      />
    );
  }
}
