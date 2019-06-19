import "./AccomodationFiles.scss"
import React from 'react'
import { Link } from "react-router-dom";
import ShowHotel from "../Select/ShowHotel"


export default function AccomodationFiles() {    
    return (
        <div>
            <div>
                <div id="nesto">
                    <h3>Our top rated accomodations</h3>
                    <Link to="/accomodation">SHOW ALL &rArr;</Link>
                    <div id="nesto">{"weder componenta"}</div>
                </div>
                
            </div>
            <div className="cityInformation" id="accom">
                <div className="cityInfoLeft">
                    {/* <ShowHotel setId={this.props.setId} id={9} data={this.props.data} /> */}
                    {"Map list hotela sa ocenama komponenta"}
                </div>
                <div className="cityInfoRight">{"Google Map"}</div>
            </div>
        </div>
    )
}
