import { UPDATE_WISHES } from "../actionTypes";

const wishesReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_WISHES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default wishesReducer;
