import React, { Component } from "react";
import genSlideStyle from "./genSlideStyle";
import "./RateSlid.scss";

export default class RangeSlider extends Component {
  state = { value: 3 };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    let padding = this.state.value * 19;
    const slideStyle = genSlideStyle(this.state.value);

    return (
      <div className="rangeDiv">
        <div className="center-tooltip" style={{ paddingLeft: `${padding}%` }}>
          <div className="tooltip">
            <div>
              <p className="innertooltip">{this.state.value}</p>
            </div>
          </div>
        </div>
        <div className="range">
          <span className="bullet" />
          <span className="bullet-1" />
          <span className="bullet-2" />
          <span className="bullet-3" />
          <span className="range-value" style={slideStyle.range} />
          <span className="circle" style={slideStyle.point} />
          <input
            className="range-slide"
            name="range"
            type="range"
            min="0"
            max="10"
            value={this.state.value}
            step="2"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
