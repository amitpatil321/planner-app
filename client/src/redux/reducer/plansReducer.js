import { SET_APP_DATA } from "../actionTypes";

const plansReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_APP_DATA:
      return { ...state, ...action.payload.plans };
    default:
      return state;
  }
};

export default plansReducer;
