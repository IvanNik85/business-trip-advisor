export const LOGED_IN = "LOGED_IN";
export const LOGED_OUT = "LOGED_OUT";
export const IS_ADMIN = "IS_ADMIN";
export const SET_SELECTED_CITY = "SET_SELECTED_CITY";
export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";

//action creators

export const logedIn = () => {
  return {
    type: LOGED_IN
  };
};

export const setSelectedCity = city => {
  return {
    type: SET_SELECTED_CITY,
    cityName: city
  };
};
