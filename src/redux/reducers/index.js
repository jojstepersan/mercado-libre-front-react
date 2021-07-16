import { combineReducers } from "redux";

import setCategoryIdReducer from "./setCategoryId.js";

export default combineReducers({
  setCategoryId : setCategoryIdReducer
});
