import { createReducer } from "@reduxjs/toolkit";

import { setUserName, setAuthState } from "../../Actions/UserActions";

const UserState = {
  Auth: true,
  name: "Vasya",
};

const user = createReducer(UserState, {
  [setAuthState]: (state, action) => {
    state.Auth = action.payload;
  },
  [setUserName]: (state, action) => {
    state.user = action.payload;
  },
});

export default user;
