import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import clientReducer from "./clientSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["clients"], // only clients will persist
};

const rootReducer = combineReducers({
  clients: clientReducer,
  products: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const appStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(appStore);
export default appStore;
