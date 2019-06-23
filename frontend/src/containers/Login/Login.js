import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

import Overlay from "../../components/Login/Overlay/Overlay";
import OverlayPanel from "../../components/Login/Overlay/OverlayPanel";
import Form from "../../components/Login/Form/Form";
import Button from "../../UI/Button/Button";
import "./Login.scss";

class Login extends Component {
  state = {
    leftPanel: false,
    rightPanel: false
  };

  setRightActive = () => {
    this.setState(prevState => ({ rightPanel: !prevState.rightPanel }));
  };

  componentWillUpdate(prevProps) {
    if (this.props.isLogedIn !== prevProps.isLogedIn) {
      this.props.history.push("/city-info");
    }
  }

  render() {
    return (
      <div
        className={[
          "container",
          this.state.rightPanel ? "right-panel-active" : ""
        ].join(" ")}
      >
        <Form
          classes="sign-up-container"
          title="Create Account"
          buttontext="Sign Up"
        />
        <Form
          classes="sign-in-container"
          title="Sign in"
          buttontext="Sign In"
          clicked={this.props.logIn}
          isLogedIn={this.props.isLogedIn}
        />

        <Overlay>
          <OverlayPanel
            classes="overlay-left"
            title="Welcome Back!"
            text="To keep connected with us please login with your personal info"
          >
            <Button classes="ghost" clicked={this.setRightActive}>
              Sign In
            </Button>{" "}
          </OverlayPanel>
          <OverlayPanel
            classes="overlay-right"
            title="Hello, Friend!"
            text="Enter your personal details and start journey with us"
          >
            <Button classes="ghost" clicked={this.setRightActive}>
              Sign Up
            </Button>
          </OverlayPanel>
        </Overlay>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogedIn: state.isLogedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logIn: () => dispatch({ type: actionTypes.LOGED_IN })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
