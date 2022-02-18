import { createAction } from "@reduxjs/toolkit";

import types from "../actionTypes";

const setAuthState = createAction(types.SET_AUTH);

const setUserName = createAction(types.SET_USER_NAME);

export { setAuthState, setUserName };
