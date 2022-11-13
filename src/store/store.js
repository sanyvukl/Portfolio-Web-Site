import { compose, createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";

import thunk from "redux-thunk";
import logger from "redux-logger";

// Persistance
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};
const persisitedReducer = persistReducer(persistConfig, rootReducer);
// #Persistance

const middleWares = [process.env.NODE_ENV !== "production" && logger,thunk].filter(
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
export const persistor = persistStore(store);
