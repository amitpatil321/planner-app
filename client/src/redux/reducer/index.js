import { combineReducers } from "redux";

import plansReducer from "./plansReducer";
import formsReducer from "./formsReducer";

export default combineReducers({
  plans: plansReducer,
  formsReducer: formsReducer,
});
