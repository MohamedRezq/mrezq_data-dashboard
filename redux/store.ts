import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
//import storage from "redux-persist/lib/storage";

import saasReducer from "./features/saas/saasSlice";
import userReducer from "./features/user/userSlice";
import loadingReducer from "./features/loading/loadingSlice";
import dashboardPeriodReducer from "./features/dashboardPeriod/dashboardPeriodSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  saas: saasReducer,
  user: userReducer,
  loading: loadingReducer,
  dashboardPeriod: dashboardPeriodReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
