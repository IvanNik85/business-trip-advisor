import React, { Component } from "react";
import "./ChosenCity.scss";
import Modal from "../../UI/Modal/Modal";
// import feedbackTextarea from "../../components/Modal/feedbackTextarea"

export default class ChosenCity extends Component {
  state = {
    modalShow: false
  };
  modalOpenHandler = () => {
    this.setState({ modalShow: true });
  };

  modalClosedHandler = () => {
    this.setState({ modalShow: false });
  };

  render() {
    return (
      <div>
        <p onClick={this.modalOpenHandler}>Chosen city</p>
        <Modal
          style={{ "z-index": 50 }}
          show={this.state.modalShow}
          clicked={this.modalClosedHandler}
        >
          <feedbackTextarea />
          Modal{" "}
        </Modal>
      </div>
    );
  }
}
