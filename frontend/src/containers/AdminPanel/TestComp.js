import React, { Component } from "react";
import "./TestComp.scss";

export default class TestComp extends Component {
  state = {
    id: "hidden",
    transform: true
  };

  handleClick = () => {
    this.setState({
      id: this.state.id === "hidden" ? "visible" : "hidden",
      transform: !this.state.transform
    });
  };
  render() {
    const { name, displayDiv, content } = this.props;
    return (
      <div>
        <h2 onClick={this.handleClick}>{name}</h2>
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
        <div className={displayDiv} id={this.state.id}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
