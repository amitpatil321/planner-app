import { FETCH_PLANS } from "../actionTypes";

const plansReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PLANS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default plansReducer;
