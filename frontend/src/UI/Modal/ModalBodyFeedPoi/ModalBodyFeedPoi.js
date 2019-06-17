import React, { Component } from "react";
import "./ModalBodyFeedPoi.scss";
import ModalBodyFeed from "./ModalBodyFeed/ModalBodyFeed";
import ModalBodyPOI from "../ModalBodyFeedPoi/ModalBodyPoi/ModalBodyPoi";

export default class ModalBodyFeedAndPOI extends Component {
  state = {
    showFeedback: true,
    showPOI: false,
    selectCategory: "",
    color:
      "linear-gradient(90deg, rgba(0,212,255,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 50%)"
  };
  setSelected = value => {
    this.setState({ selectCategory: value });
  };
  openPOI = () => {
    this.setState({
      showFeedback: false,
      showPOI: true,
      color:
        "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,212,255,1) 50%)"
    });
  };

  openFeedback = () => {
    this.setState({
      showFeedback: true,
      showPOI: false,
      color:
        "linear-gradient(90deg, rgba(0,212,255,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 50%)"
    });
  };

  render() {
    return (
      <div className="modalBodyFeedAndPOI">
        <div className="choose">
          <div onClick={this.openFeedback}>{this.props.title1}</div>
          <div onClick={this.openPOI}>{this.props.title2}</div>
        </div>
        <div className="topBorder" style={{ background: this.state.color }} />
        <ModalBodyFeed
          show={this.state.showFeedback}
          setOption={this.props.setOption}
        />
        <ModalBodyPOI show={this.state.showPOI} />
      </div>
    );
  }
}
