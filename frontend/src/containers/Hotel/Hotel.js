import React from "react";
import "./Hotel.scss";


export default function Hotel(props) {
  const { title, subtitle,text, img } = props;
  return (
    <div className="hotelDiv">

        <div className="hotelHeader">
            <h1>Hotel header</h1>
        </div>

        <div className='hotelInfo'>
            <div className= 'hInfoLeft'>
                <h1>{title}</h1>
                <h6>{subtitle}</h6>
                <p>{text}</p>
                <img src={img} alt={title}  width= '300'/>
            </div>
        <div className='hInfoRight'>
             {"Weather komponenta"} <br/>
     {"Hotel Map komponenta"}
        </div>

     
  
   </div>
   <div className="hotelReviews">
       <div className='reviewsHeder'>
           <h2>Reviews</h2>
           {'sort komponenta'}
           <i className="fas fa-comment-medical" onClick = {()=>console.log('rade ikon')}></i>

       </div>
  
     {"Reviews komponenta"}
        </div>
        </div>
  );
}
