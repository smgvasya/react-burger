import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_PWD_REQUEST,
  UPDATE_PWD_SUCCESS,
  UPDATE_PWD_FAILED,
  SUBMIT_PWD_REQUEST,
  SUBMIT_PWD_SUCCESS,
  SUBMIT_PWD_FAILED,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_FAILED,
} from "../types/constants/user";

import { UserTypes } from "../types/types";
import { UserActions } from "../actions/user";

type InitialStateType = {
  user?: UserTypes | null;
  password?: string | null;
  request: boolean;
  error: boolean;
  pwdResetRequested: boolean;
  pwdSubmitSuccess: boolean;
  isLoggedIn: boolean;
};

const initialState: InitialStateType = {
  user: null,
  password: null,
  request: false,
  error: false,
  pwdResetRequested: false,
  pwdSubmitSuccess: false,
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case REGISTRATION_REQUEST: {
      return {
        ...state,
        request: true,
        isLoggedIn: false,
      };
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        user: action.user,
        isLoggedIn: true,
      };
    }
    case REGISTRATION_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
        isLoggedIn: false,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        request: true,
        isLoggedIn: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        user: action.user,
        isLoggedIn: true,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
        isLoggedIn: false,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        request: true,
        isLoggedIn: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        user: null,
        isLoggedIn: false,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
        isLoggedIn: true,
      };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        request: true,
        isLoggedIn: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        user: action.user,
        isLoggedIn: true,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
        isLoggedIn: false,
      };
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        request: true,
        isLoggedIn: true,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        user: action.user,
        isLoggedIn: true,
      };
    }
    case UPDATE_USER_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
        isLoggedIn: true,
      };
    }
    case UPDATE_PWD_REQUEST: {
      return {
        ...state,
        request: true,
        pwdResetRequested: true,
        isLoggedIn: false,
      };
    }
    case UPDATE_PWD_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        isLoggedIn: false,
      };
    }
    case UPDATE_PWD_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
        isLoggedIn: false,
      };
    }
    case SUBMIT_PWD_REQUEST: {
      return {
        ...state,
        request: true,
        pwdSubmitSuccess: false,
        isLoggedIn: false,
      };
    }
    case SUBMIT_PWD_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        pwdSubmitSuccess: true,
        isLoggedIn: false,
      };
    }
    case SUBMIT_PWD_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
        pwdSubmitSuccess: false,
        isLoggedIn: false,
      };
    }
    case UPDATE_TOKEN_REQUEST: {
      return {
        ...state,
        request: true,
      };
    }
    case UPDATE_TOKEN_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
      };
    }
    case UPDATE_TOKEN_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
