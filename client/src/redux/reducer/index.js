import { combineReducers } from "redux";

import wishesReducer from "./wishesReducer";

export default combineReducers({
  wishes: wishesReducer
});
