import { USER_ACTION_TYPES } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SIGN_UP_START:
      return { ...state, isLoading: true };
      case USER_ACTION_TYPES.SIGN_UP_FAILED:
      return { ...state, isLoading: false };

    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
      return { ...state, isLoading: true };
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
      return { ...state, isLoading: true };

    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, isLoading: false, currentUser: payload };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return { ...state, isLoading: false, error: payload };

    case USER_ACTION_TYPES.LOG_OUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};
