import React, { Component } from "react";
import "./RateSlider.scss";

export default class RateSlider extends Component {
  state = { value: 5 };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    let padding = this.state.value * 10 - 1.5;
    return (
      <div className="slidecontainer">
        <div className="center-tooltip" style={{ paddingLeft: `${padding}%` }}>
          <div className="tooltip">
            <div>
              <p className="innertooltip">{this.state.value}</p>
            </div>
          </div>
        </div>
        <div className="divSlider">
          <input
            className="slider"
            type="range"
            min="1"
            max="10"
            value={this.state.value}
            onChange={this.handleChange}
            step="1"
          />
        </div>
      </div>
    );
  }
}
