import React, { Component } from "react";

export default class SelectCity extends Component {
  onSelectHandler = event => {
    let value = event.target.value;
    let id = value.split("|");
    let val = id.splice(0, 1);
    this.props.selection(val, id);
  };
  render() {
    return (
      <select
        className={this.props.classes}
        onChange={this.onSelectHandler}
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled>
          {" "}
          -- Odaberi Grad --{" "}
        </option>
        {this.props.cityList.map(item => (
          <option key={item._id} value={item.name + "|" + item._id}>
            {item.name}
          </option>
        ))}
      </select>
    );
  }
}
