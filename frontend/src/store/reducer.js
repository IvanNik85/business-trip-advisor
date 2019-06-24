import * as actionTypes from "../store/actions/actions";

const initialState = {
  isLogedIn: false,
  isAdmin: false,
  selectedCity: "",
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

    default:
      return state;
  }
  return state;
};
export default reducer;
