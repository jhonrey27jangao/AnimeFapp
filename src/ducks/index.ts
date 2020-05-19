import { createStore, combineReducers, applyMiddleware } from "redux";
import { feedReducer } from "./profile/reducers";
import createSagaMiddleware from "redux-saga";
import { newsFeedReducer } from "./newsfeed/reducers";
import { loginReducer } from "./login/reducers";
import { getDbReducer } from "./db/reducers";
import { sagas } from "./db/sagas";

const allReducers = combineReducers({
  profile: feedReducer,
  newsFeed: newsFeedReducer,
  login: loginReducer,
  dbReducer: getDbReducer,
});

export const sagaMiddleWare = createSagaMiddleware();
export const store = createStore(allReducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(sagas);
