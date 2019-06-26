import React, { Component } from "react";
import faker from "faker";
import Hotel from "./containers/Hotel/Hotel";
import Layout from "./UI/Layout/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./containers/Login/Login";
import CityInfo from "./containers/CityInfo/CityInfo";
import ChosenCity from "./containers/ChosenCity/ChosenCity";
import Nav from "./components/Nav/Nav";
import Accomodation from "./containers/Accomodation/Accomodation";
import Home from "./containers/Home/Home";
import AdminPanel from "./containers/AdminPanel/AdminPanel";
import { connect } from "react-redux";
import * as actionTypes from "./store/actions/actions";
import { logedOut } from "./store/actions/actions";
import axios from "axios";
import { withRouter } from "react-router-dom";

class App extends Component {
  logingOut = () => {
    let token = localStorage.getItem("token");
    


    axios({
      method: "post",
      url: "https://js1plus1-api.herokuapp.com/users/logout",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      console.log(res);
      this.props.logOut();
      this.props.history.push("/");
     
    });
  };

  render() {
    let nav = null;
    if (this.props.isLogedIn) {
      nav = (
        <Nav
          admin={this.props.isAdmin}
          clicked={this.logingOut}
          user={this.props.userName}
        />
      );
    }
    
    return (
      <div className="App">
        <Layout>
          <Router>
            {nav}
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/chosen-city" component={ChosenCity} />
              <Route exact path="/accomodation" component={Accomodation} />
              <Route exact path="/admin" component={AdminPanel} />
              <Route
                exact
                path="/hotel"
                render={props => (
                  <Hotel {...props}  />
                )}
              />

              <Route
                exact
                path="/city-info"
                render={props => (
                  <CityInfo
                    {...props}
                    
                  />
                )}
              />
            </Switch>
          </Router>
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLogedIn: state.isLogedIn,
    isAdmin: state.isAdmin,
    userName: state.userName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logedOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));