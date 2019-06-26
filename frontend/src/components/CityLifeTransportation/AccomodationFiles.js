import "./AccomodationFiles.scss";
import React from "react";
import { Link } from "react-router-dom";
import ShowHotel from "../Select/ShowHotel";
import Weather from "../Weather/Weather";
import weatherData from "../../weaterData";

class AccomodationFiles extends React.Component {
  state = {
    weatherData
  };
  render() {
    const { data, id, setId, summary, icon, temperature } = this.props;
<<<<<<< HEAD
    let hotels = data.map((hotel, index) => (
      <ShowHotel setId={setId} key={index} data={hotel} />
=======
    let hotels = data.map(hotel => (
      <ShowHotel setId={setId} key={hotel._id} data={hotel} />
>>>>>>> 802bc0c5794237b1a02e9f7d622fdf7a73a615b8
    ));
    return (
      <div className="fullWidth">
        <div id="accomWeather">
          <h3>Our top rated accomodations</h3>
          <Link id="linkAccomodation" to="/accomodation">
            SHOW ALL <i className="fas fa-chevron-right" />
          </Link>
          <div id="weather">
            <Weather
              summary={this.state.weatherData.currently.summary}
              icon={this.state.weatherData.currently.icon}
              temperature={this.state.weatherData.currently.temperature}
            />
          </div>
        </div>
        <div className="cityInformation">
<<<<<<< HEAD
          <div className="cityInfoLeft">
            {hotels}
            {/* {"Map list hotela sa ocenama komponenta"} */}
          </div>
=======
          <div className="cityInfoLeft">{hotels}</div>
>>>>>>> 802bc0c5794237b1a02e9f7d622fdf7a73a615b8
          <div className="cityInfoRight">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.953980873315!2d20.409139615444435!3d44.802126485395874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f92363f1881%3A0x550c0955fccddcc2!2z0KHQsNCy0YHQutC4INC90LDRgdC40L8gNywg0JHQtdC-0LPRgNCw0LQgMTEwNzA!5e0!3m2!1ssr!2srs!4v1560939287558!5m2!1ssr!2srs"
              width="100%"
              height="500px"
              frameBorder="0"
              style={{ border: 0, padding: "0 10px 10px" }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AccomodationFiles;
