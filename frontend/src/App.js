import React from 'react';
import Layout from './components/UI/Layout/Layout'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/Home/Home';
import CityInfo from './containers/CityInfo/CityInfo';
import ChosenCity from './containers/ChosenCity/ChosenCity';

function App() {
  return (
    <div className="App">
      <Layout>
        
          <Router><Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/city-info" component={CityInfo}/>
            <Route exact path="/chosen-city" component={ChosenCity}/>
            </Switch>
          </Router>
        
      </Layout>
    </div>
  );
}

export default App;
