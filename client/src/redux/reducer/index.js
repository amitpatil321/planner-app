import { combineReducers } from "redux";

import plansReducer from "./plansReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  plans: plansReducer,
  categories: categoryReducer,
});
