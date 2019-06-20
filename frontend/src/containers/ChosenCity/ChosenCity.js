import React, { Component } from "react";
import "./ChosenCity.scss";
import Modal from "../../UI/Modal/Modal";
// import ModalBodyFeedAndPOI from "../../UI/Modal/ModalBodyFeedPoi/ModalBodyFeedPoi";
import ModalHeader from "../../UI/Modal/ModalHeader/ModalHeader";
import ModalTextArea from "../../UI/Modal/ModalTextArea/ModalTextArea";
import TextArea from "../../UI/TextArea/TextArea";

export default class ChosenCity extends Component {
  state = {
    modalShow: false,
    selectedCategory: ""
  };
  setSelectedCategory = value => {
    this.setState({ selectedCategory: value });
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
          <ModalTextArea>
            <ModalHeader
              clicked={this.modalClosedHandler}
              closeSpanClicked={this.modalClosedHandler}
              title={"Add comment"}
              save={"SAVE"}
            />
            <TextArea label={"Your comment"} className="modalTxtArea" />
          </ModalTextArea>

          {/* <ModalHeader
            clicked={this.modalClosedHandler}
            closeSpanClicked={this.modalClosedHandler}
            title={"City Life Feedback"}
            save={"SAVE"}
          />
          <ModalBodyFeedAndPOI
            title1={"Feedback"}
            title2={"POI"}
            setOption={this.setSelectedCategory}
          /> */}
        </Modal>
      </div>
    );
  }
}
