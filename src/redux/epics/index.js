import { ofType } from "redux-observable";
import { PING, PONG } from "../actions/index";
import { delay, mapTo } from "rxjs/operators";

export const pingEpic = (action$) =>
  action$.pipe(ofType(PING), delay(1000), mapTo({ type: PONG }));
