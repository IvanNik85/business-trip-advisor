import React, { Component } from "react";
import weatherData from "../../weaterData";
import Weather from "../../components/Weather/Weather";

export default class Home extends Component {
  state = {
    weatherData
  };

  render() {
    return (
      <Weather
        summary={this.state.weatherData.currently.summary}
        icon={this.state.weatherData.currently.icon}
        temperature={this.state.weatherData.currently.temperature}
      />
    );
  }
}
