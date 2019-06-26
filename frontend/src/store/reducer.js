import * as actionTypes from "../store/actions/actions";

const initialState = {
  isLogedIn: false,
  isAdmin: false,
  selectedCity: "",
  userName: "",
  cities: [],
  accommodations: [],
  feedbacks: [],
  modalShow: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGED_IN:
      return {
        ...state,
        isLogedIn: true
      };
    case actionTypes.LOGED_OUT:
      return {
        ...state,
        isLogedIn: false
      };
    case actionTypes.IS_ADMIN:
      return {
        ...state,
        isAdmin: true
      };
    case actionTypes.SET_SELECTED_CITY:
      return {
        ...state,
        selectedCity: action.cityName //payload name
      };
    case actionTypes.MODAL_OPEN:
      return {
        ...state,
        modalShow: true
      };
    case actionTypes.MODAL_CLOSE:
      return {
        ...state,
        modalShow: false
      };
    case actionTypes.SET_USER_NAME:
      return {
        ...state,
        userName: action.userName
      };
    case actionTypes.SET_CITIES:
      return {
        ...state,
        cities: state.cities.concat(action.cities)
      };
    case actionTypes.SET_ACCOMMODATIONS:
      return {
        ...state,
        accommodations: state.accommodations.concat(action.accommodations)
      };
    case actionTypes.SET_FEEDBACKS:
      return {
        ...state,
        feedbacks: state.feedbacks.concat(action.feedbacks)
      };

    default:
      return state;
  }
  return state;
};
export default reducer;
