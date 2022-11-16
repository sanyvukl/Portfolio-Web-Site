import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

// export const setCurrentUser = (user) => {
//   return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
// };
// const fetchCurrentUserStart = () => {
//   return createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_START);
// };
// const fetchCurrentUserSuccess = (user) => {
//   return createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_SUCCESS, user);
// };
// const fetchCurrentUserFailed = (error) => {
//   return createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_FAILED, error);
// };
// export const fetchCurrentUserAsync = () => async (dispatch) => {
//   onAuthStateChangedListener(async (user) => {
//     if (user) {
//       fetchCurrentUserStart();
//       try {
//         await createUserDocumentFromAuth(user);
//         fetchCurrentUserSuccess(user);
//         dispatch(setCurrentUser(user));
//       } catch (error) {
//         fetchCurrentUserFailed(error);
//       };
//     };
//   });
// };

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });
export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
export const signUpSuccess = (user, additionalInfo) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalInfo });
export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const userSignOutStart = () => createAction(USER_ACTION_TYPES.SIGN_OUT_START);
export const userSignOutSuccess = () => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
export const userSignOutFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
