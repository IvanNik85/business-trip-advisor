import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

export default function LogOut(props) {
  return <span onClick={props.clicked}>LOG OUT</span>;
}
