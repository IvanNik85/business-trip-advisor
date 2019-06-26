import axios from "axios";

export const LOGED_IN = "LOGED_IN";
export const LOGED_OUT = "LOGED_OUT";
export const IS_ADMIN = "IS_ADMIN";
export const SET_SELECTED_CITY = "SET_SELECTED_CITY";
export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_CITIES = "SET_CITIES";
export const SET_ACCOMMODATIONS = "SET_ACCOMMODATIONS";
export const SET_FEEDBACKS = "SET_FEEDBACKS";
//action creators

export const logedIn = () => {
  return {
    type: LOGED_IN
  };
};
export const logedOut = () => {
  return {
    type: LOGED_OUT
  };
};
export const isAdmin = () => {
  return {
    type: IS_ADMIN
  };
};
export const setSelectedCity = city => {
  return {
    type: SET_SELECTED_CITY,
    cityName: city
  };
};

export const setUserName = userName => {
  return {
    type: SET_USER_NAME,
    userName: userName
  };
};

export const setCities = cities => {
  return {
    type: SET_CITIES,
    cities: cities
  };
};

export const setAccommodations = accommodations => {
  return {
    type: SET_ACCOMMODATIONS,
    accommodations: accommodations
  };
};
export const setFeedbacks = feedbacks => {
  return {
    type: SET_FEEDBACKS,
    feedbacks: feedbacks
  };
};

//auth token
const token = localStorage.getItem("token");

// asinc action creators
export const getAllCities = () => {
  return async dispatch => {
    const res = await axios({
      method: "get",
      url: "https://js1plus1-api.herokuapp.com/cities",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    dispatch(setCities(res.data));
  };
};

export const getAllaccommodations = () => {
  return async dispatch => {
    const res = await axios({
      method: "get",
      url: "https://js1plus1-api.herokuapp.com/accommodations",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    dispatch(setAccommodations(res.data));
  };
};
export const getAllfeedbacks = () => {
  return async dispatch => {
    const res = await axios({
      method: "get",
      url: "https://js1plus1-api.herokuapp.com/feedbacks",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    dispatch(setFeedbacks(res.data));
  };
};
