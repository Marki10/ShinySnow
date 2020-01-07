import { combineReducers } from "redux";
import AppReducer from "./appReducer";
import UserReducer from "./userReducer";

const reducers = combineReducers({
  AppReducer,
  UserReducer
});

export default reducers;
