export const LOGED_IN = "LOGED_IN";
export const LOGED_OUT = "LOGED_OUT";
export const IS_ADMIN = "IS_ADMIN";
export const SET_SELECTED_CITY = "SET_SELECTED_CITY";
export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_CITIES = "SET_CITIES";

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
