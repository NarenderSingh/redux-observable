import { combineEpics } from "redux-observable";
import { pingEpic } from "./index";

export const rootEpic = combineEpics(pingEpic);
