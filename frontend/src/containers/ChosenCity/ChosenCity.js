import React, { Component } from "react";
import "./ChosenCity.scss";
import Modal from "../../UI/Modal/Modal";
// import feedbackTextarea from "../../components/Modal/feedbackTextarea"

export default class ChosenCity extends Component {
  state = {
    modalShow: false
  };
  modalToggler = () => {
    this.setState(prevState => {return{ modalShow: !prevState }});
  };



  render() {
    return (
      <div>
        <p onClick={this.modalToggler}>Chosen city</p>
        <Modal
          style={{ "z-index": 50 }}
          show={this.state.modalShow}
          clicked={this.modalToggler}
        >
          <feedbackTextarea />
          Modal{" "}
        </Modal>
      </div>
    );
  }
}
