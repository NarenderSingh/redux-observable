import { combineReducers } from "redux";
import pingReducer from "./pingReducer";

export const rootReducer = combineReducers({
  ping: pingReducer,
});
