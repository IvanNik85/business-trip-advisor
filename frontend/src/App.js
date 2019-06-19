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
import axios from "axios";

axios.defaults.withCredentials = true;

class App extends Component {
  state = {
    hotelId: "",
    hotel: {
      data: {
        title: "Hotel Hilton",
        // subtitle: "lallala",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nisi animi maiores dolorem quos enim! Incidunt, doloremque! Mollitia, architecto nam facilis itaque eius voluptatem, asperiores quasi delectus necessitatibus tenetur assumenda?",
        img: faker.fake("{{image.image}}"),
        score: 9
      }
    },
    cityList: ["Belgrade", "Paris", "London", "Surdulica", "Paramaribo"]
  };

  setHotelID = value => {
    this.setState({ hotelId: value });
  };
  render() {
    console.log(this.state.hotelId);
    return (
      <div className="App">       
        <Layout>
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />

              <Route exact path="/chosen-city" component={ChosenCity} />
              <Route exact path="/accomodation" component={Accomodation} />
              <Route
                exact
                path="/hotel"
                render={props => (
                  <Hotel {...props} data={this.state.hotel.data} />
                )}
              />

              <Route
                exact
                path="/city-info"
                render={props => (
                  <CityInfo
                    {...props}
                    setId={this.setHotelID}
                    data={this.state.hotel.data}
                    cityList={this.state.cityList}
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

export default App;
