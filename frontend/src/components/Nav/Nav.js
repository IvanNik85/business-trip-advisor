import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import LogOut from "../LogOut/LogOut";

function Nav(props) {
  const { user = "Pera", logOut, admin, history } = props;
  let adminPanel = null;
  if (admin) {
    adminPanel = <Link to="/admin">Admin Panel </Link>;
  }
  const logOutNow = () => {
    logOut();
    history.push("/");
  };
  return (
    <div className="navBar">
      <div>LOGO</div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/">Login</Link>
        <Link to="/chosen-city">Chosen city </Link>
        <Link to="/hotel"> Hotel </Link>
        <Link to="/city-info">City info </Link>
        <Link to="/accomodation">Accomodation </Link>
        {adminPanel}
        <LogOut clicked={logOutNow} />
      </div>
      <div>
        <h3>Welcome, {user} </h3>
      </div>
    </div>
  );
}

export default withRouter(Nav);
