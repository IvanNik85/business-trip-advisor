import React, {Component} from "react";
import "./Hotel.scss";
import Feedback from "../../components/Feedback/Feedback";
import Selection from "../../components/Select/Selection";
import Weather from "../../components/Weather/Weather";
import Button from "../../UI/Button/Button";
import Map from "../../UI/MapLocation/Map"

export default class Hotel extends Component {
  state = {
    option: ""
  };
  setOption = val => {
    this.setState({ option: val });
  };
  render() {
    // const {data} = 
    return (
      <div className="hotelDiv">
        <div className="hotelHeader">
          <h1>Hotel header</h1>
        </div>
        <div className="hotelInfo">
          <div className="hInfoLeft">
            <div className="imgFlex">
              <img src='../../hotel.jpg' alt='hotel' width="300" />
            </div>
            <div className="contentFlex">
              {/* <h1>{data[0].title}</h1> */}
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nisi animi maiores dolorem quos enim! Incidunt, doloremque! Mollitia, architecto nam facilis itaque eius voluptatem, asperiores quasi delectus necessitatibus tenetur assumenda?</p>
          </div>
        </div>
        <div className="hInfoRight">
          <div id="weather">
              <Weather />
          </div>
          <Map />
        </div>
      </div>
      <div className="hotelReviews">
        <div className="reviewsHeder">
          <div className="flex">
            <h2>Reviews</h2>
          </div>
          <div className="flex1">
          <Button classes={'addComment'}>                  
                    +
          </Button> 
            <h3>SORT</h3>
            <Selection options={["LATEST", "OLDEST", "TOP RATED"]} />
          </div>
        </div>
        <Feedback />
      </div>
    </div>
  );
}
}