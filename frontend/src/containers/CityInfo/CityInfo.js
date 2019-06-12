
import "./CityInfo.scss";
 import React from 'react'
 import {Link} from 'react-router-dom'
 
 export default function CityInfo(props) {
     const {cityName} = props
     return (
         <div className='cityDiv'>

<div className='cityHeader'>
    
    <div className='cHeaderLeft'>
    <h3>Ocu da nadjem info za grad: </h3>
    {'selekt komponenta'}
 

    </div>
    <div  className='cHeaderRight'>
<Link to='#accomodation'> ACCOMODATION</Link>
<Link to='#'>TRANSPORT</Link>
<Link to='#'>CITYLIFE</Link>

    </div>
</div>
<div className='cityInfo' id='accomodation'>
    <div></div>
    <div></div>
</div>
<div className=''></div>
<div className=''></div>
<div className=''></div>
<div className=''></div>








             
         </div>
     )
 }
 
