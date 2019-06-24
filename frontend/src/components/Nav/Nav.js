import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss'
import AdminPanel from "../../containers/AdminPanel/AdminPanel";

export default function Nav(props) {
  const { user = "Pera", logout, admin } = props;
  let adminPanel = null;
  if(admin) {
    adminPanel = <Link to="/admin">Admin Panel</Link>
  }
  return (
    <div className="navBar">      
      <div className="logo">
        <Link to="/home"></Link>
      </div>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/">Login</Link>
        <Link to="/chosen-city">Chosen city </Link>
        <Link to="/hotel"> Hotel </Link>
        <Link to="/city-info">City info </Link>
        <Link to="/accomodation">Accomodation </Link>
        {adminPanel}
        <h3>Welcome, {user} </h3> <span>{logout}</span>
      </div>      
    </div>
  );
}
