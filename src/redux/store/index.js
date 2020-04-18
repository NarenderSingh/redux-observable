import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { compose } from "redux";
import { rootReducer } from "../reducers/rootReducers";
import { rootEpic } from "../epics/rootEpics";

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
