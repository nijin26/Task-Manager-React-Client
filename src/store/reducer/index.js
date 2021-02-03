import authReducer from "./auth";
import taskReducer from "./tasks";
import { combineReducers } from "redux";

const Reducer = combineReducers({
  auth: authReducer,
  task: taskReducer,
});

export default Reducer;
