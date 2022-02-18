import { configureStore, combineReducers } from "@reduxjs/toolkit";

import user from "./Redusers/UserReduser";

const reducer = combineReducers({ user });

const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) =>
    typeof action === "function" ? action(dispatch, getState) : next(action);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
