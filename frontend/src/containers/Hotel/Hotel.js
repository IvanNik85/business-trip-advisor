import React from "react";
import "./Hotel.scss";
import Feedback from "../../components/Feedback/Feedback";
import Selection from "../../components/Select/Selection";
import Button from '../../UI/Button/Button'
import Weather from "../../components/Weather/Weather"
import Map from "../../UI/MapLocation/Map"
import weatherData from "../../weaterData"

export default function Hotel(props) {
 const { summary, icon, temperature, data} = props;
  // data info
  return (
    <div className="hotelDiv">
      <div className="hotelHeader">
        <h1>I'd like to get some info on the city</h1>
      </div>

      <div className="hotelInfo">
        {/* <div className="hInfoLeft">
          <div className="imgFlex">
            <img src={data.img} alt={data.title} width="300" />
          </div>
          <div className="contentFlex">
            <h1>{data.title}</h1>
            <h6>{data.subtitle}</h6>
            <p>{data.text}</p>
          </div>
        </div> */}
        
        <div className="hInfoLeft">
          <div className="contentFlex">
            <h1>{data[0].title}</h1>
            {/* <h6>{data.subtitle}</h6> */}
            <p>{data[0].text}</p>
            <div className='divImg'>
              <img src={data[0].img} alt='hotel'/>
            </div>
          </div>
        </div>

        <div className="hInfoRight">
          <Weather summary={weatherData.currently.summary}
            icon={weatherData.currently.icon}
            temperature={weatherData.currently.temperature}/> <br 
          />
          <div className='divMap'>
            <Map showMap={false}/>
          </div>
         
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
