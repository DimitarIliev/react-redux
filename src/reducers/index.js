import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

//combine all reducers into one main reducer

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
