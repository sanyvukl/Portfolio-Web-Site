import { compose, createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

import thunk from "redux-thunk";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";


// Persistance
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};
const persisitedReducer = persistReducer(persistConfig, rootReducer);
// #Persistance
// Middleware
const sagaMiddleware = createSagaMiddleware()

const middleWares = [process.env.NODE_ENV !== "production" && logger,sagaMiddleware,thunk].filter(
  Boolean
);
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(
  persisitedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
