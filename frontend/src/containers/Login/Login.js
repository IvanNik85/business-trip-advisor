import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actions";
import { logedIn } from "../../store/actions/actions";
import axios from "axios";
import { setUserName } from "../../store/actions/actions";
import { isAdmin } from "../../store/actions/actions";

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

  logingIn = (email, password, e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "https://js1plus1-api.herokuapp.com/users/login",
      data: {
        email: email,
        password: password
      }
    }).then(res => {
      let token = res.data.token;
      localStorage.setItem("token", token);

      this.props.setUser(res.data.user.name);
      this.props.logIn();

      if (res.data.user.isAdmin) {
        this.props.setAdmin();
      }
    });
  };

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
          clicked={this.logingIn}
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
    logIn: () => dispatch(logedIn()),
    setUser: userName => dispatch(setUserName(userName)),
    setAdmin: () => dispatch(isAdmin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
