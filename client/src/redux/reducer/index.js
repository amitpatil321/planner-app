import { combineReducers } from "redux";

import wishesReducer from "./wishesReducer";
import formsReducer from "./formsReducer";

export default combineReducers({
  wishes: wishesReducer,
  formsReducer: formsReducer,
});
