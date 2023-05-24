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
} from '../actions/user';

const initialState = {
  user: null,
  password: null,
  request: false,
  error: false,
  pwdResetRequested: false,
  pwdSubmitSuccess: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST: {
      return {
        ...state,
        request: true
      }
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        user: action.user
      }
    }
    case REGISTRATION_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
      }
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        request: true
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        user: action.user
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
      }
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        request: true
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        user: null
      }
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
      }
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        request: true
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        user: action.user
      }
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
      }
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        request: true
      }
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        user: action.user
      }
    }
    case UPDATE_USER_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
      }
    }
    case UPDATE_PWD_REQUEST: {
      return {
        ...state,
        request: true,
        pwdResetRequested: true
      }
    }
    case UPDATE_PWD_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
      }
    }
    case UPDATE_PWD_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
      }
    }
    case SUBMIT_PWD_REQUEST: {
      return {
        ...state,
        request: true,
        pwdSubmitSuccess: false
      }
    }
    case SUBMIT_PWD_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        pwdSubmitSuccess: true,
      }
    }
    case SUBMIT_PWD_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
        pwdSubmitSuccess: false
      }
    }
    case UPDATE_TOKEN_REQUEST: {
      return {
        ...state,
        request: true
      }
    }
    case UPDATE_TOKEN_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false
      }
    }
    case UPDATE_TOKEN_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
      }
    }

    default: {
      return state;
    }
  }
};