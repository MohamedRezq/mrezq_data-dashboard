import { configureStore, combineReducers } from "@reduxjs/toolkit";
//-----> Persist <-----------------------------------------//
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
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
//-----> Slices <-----------------------------------------//
import {
  saasSlice,
  userSlice,
  dashboardPeriodSlice,
  loadingSlice,
} from "./slices";
//--------------------------------------------------------//
//-----> END OF IMPORTS <---------------------------------//

//-----> Redux Persist Config <---------------------------//
const persistConfig = {
  key: "root",
  version: 1,
  storage: sessionStorage,
};
//-----> Root Reducer Combiner <-------------------------//
const rootReducer = combineReducers({
  saas: saasSlice,
  user: userSlice,
  loading: loadingSlice,
  dashboardPeriod: dashboardPeriodSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
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
// Export persistorStore
export const persistor = persistStore(store);
