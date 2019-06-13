import React, { Component } from "react";
import faker from "faker";
import Hotel from "./containers/Hotel/Hotel";
import Layout from "./components/UI/Layout/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./containers/Login/Login";
import CityInfo from "./containers/CityInfo/CityInfo";
import ChosenCity from "./containers/ChosenCity/ChosenCity";
import Nav from "./components/Nav/Nav";
import Accomodation from "./containers/Accomodation/Accomodation";
import Home from "./containers/Home/Home";

class App extends Component {
  state = {
    hotel: {
      title: faker.fake("{{name.title}}"),
      subtitle: faker.fake("{{random.words}}"),
      img: faker.fake("{{image.imageUrl}}"),
      text: faker.fake("{{lorem.paragraph}}")
    }
  };
  render() {
    return (
      <div className="App">
        <Layout>
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/city-info" component={CityInfo} />
              <Route exact path="/chosen-city" component={ChosenCity} />
              <Route exact path="/accomodation" component={Accomodation} />
              <Route
                exact
                path="/hotel"
                render={props => (
                  <Hotel
                    {...props}
                    title={this.state.hotel.title}
                    subtitle={this.state.hotel.subtitle}
                    text={this.state.hotel.text}
                    img={this.state.hotel.img}
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
