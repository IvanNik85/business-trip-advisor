import React from 'react'
import {Link} from 'react-router-dom';


export default function Nav() {
    return (
        <div className='navBar'>

           <div>LOGO</div>
           <div>
         <Link to='/' >Home></Link>
        <Link to='/chosen-city'>Chosen city </Link>
        <Link to='/hotel' > Hotel </Link>
        <Link to='/city-info' >City info </Link>
               
               
               </div> 
        </div>
    )
}
