import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

const fetchCurrentUserStart = () => {
  return createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_START);
};
const fetchCurrentUserSuccess = (user) => {
  return createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_SUCCESS, user);
};
const fetchCurrentUserFailed = (error) => {
  return createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_FAILED, error);
};
export const fetchCurrentUserAsync = () => async (dispatch) => {
  onAuthStateChangedListener(async (user) => {
    if (user) {
      fetchCurrentUserStart();
      try {
        await createUserDocumentFromAuth(user);
        fetchCurrentUserSuccess(user);
        dispatch(setCurrentUser(user));
      } catch (error) {
        fetchCurrentUserFailed(error);
      };
    };
  });
};
