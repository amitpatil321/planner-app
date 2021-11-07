import { SET_APP_DATA } from "../actionTypes";

const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_APP_DATA:
      return { ...state, ...action.payload.categories };
    default:
      return state;
  }
};

export default categoryReducer;
