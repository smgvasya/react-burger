import {
  postRegister,
  postLogin,
  postLogout,
  getUser,
  patchUser,
  postPasswordReset,
  postPasswordChange,
  postRefreshToken,
} from "../../utils/api";

import { setCookie, deleteCookie, getCookie } from "../../utils/cookie";
import { UserTypes } from "../types/types";
import { AppDispatch, AppThunk } from "../types/index";

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


export type RegistrationRequestType = {
  readonly type: typeof REGISTRATION_REQUEST;
};

export type RegistrationSuccessType  = {
  readonly type: typeof REGISTRATION_SUCCESS;
  readonly user: UserTypes
};

export type RegistrationFailedType = {
  readonly type: typeof REGISTRATION_FAILED;
};

export type LoginRequestType = {
  readonly type: typeof LOGIN_REQUEST;
};

export type LoginSuccessType = {
  readonly type: typeof LOGIN_SUCCESS;
  readonly user: UserTypes
};

export type LoginFailedType = {
  readonly type: typeof LOGIN_FAILED;
};

export type LogoutRequestType = {
  readonly type: typeof LOGOUT_REQUEST;
};

export type LogoutSuccessType = {
  readonly type: typeof LOGOUT_SUCCESS;
};

export type LogoutFailedType = {
  readonly type: typeof LOGOUT_FAILED;
};

export type GetUserRequestType = {
  readonly type: typeof GET_USER_REQUEST;
};

export type GetUserSuccessType = {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: UserTypes
}

export type GetUserFailedType = {
  readonly type: typeof GET_USER_FAILED;
};

export type UpdateUserRequestType = {
  readonly type: typeof UPDATE_USER_REQUEST;
};

export type UpdateUserSuccessType = {
  readonly type: typeof UPDATE_USER_SUCCESS;
  readonly user: UserTypes
};

export type UpdateUserFailedType = {
  readonly type: typeof UPDATE_USER_FAILED;
};

export type UpdatePwdRequestType = {
  readonly type: typeof UPDATE_PWD_REQUEST;
};

export type UpdatePwdSuccessType = {
  readonly type: typeof UPDATE_PWD_SUCCESS;
};

export type UpdatePwdFailedType = {
  readonly type: typeof UPDATE_PWD_FAILED;
};

export type SubmitPwdRequestType = {
  readonly type: typeof SUBMIT_PWD_REQUEST;
};

export type SubmitPwdSuccessType = {
  readonly type: typeof SUBMIT_PWD_SUCCESS;
};

export type SubmitPwdFailedType = {
  readonly type: typeof SUBMIT_PWD_FAILED;
};

export type UpdateTokenRequestType = {
  readonly type: typeof UPDATE_TOKEN_REQUEST;
};

export type UpdateTokenSuccessType = {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
};

export type UpdateTokenFailedType = {
  readonly type: typeof UPDATE_TOKEN_FAILED;
};

export type UserActions =
| RegistrationRequestType
| RegistrationSuccessType
| RegistrationFailedType
| LoginRequestType
| LoginSuccessType
| LoginFailedType
| LogoutRequestType
| LogoutSuccessType
| LogoutFailedType
| GetUserRequestType
| GetUserSuccessType
| GetUserFailedType
| UpdateUserRequestType
| UpdateUserSuccessType
| UpdateUserFailedType
| UpdatePwdRequestType
| UpdatePwdSuccessType
| UpdatePwdFailedType
| SubmitPwdRequestType
| SubmitPwdSuccessType
| SubmitPwdFailedType
| UpdateTokenRequestType
| UpdateTokenSuccessType
| UpdateTokenFailedType;

export const registrationUser: AppThunk = ( name: string, email: string, password: string ) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REGISTRATION_REQUEST,
    });
    postRegister(name, email, password)
      .then((res) => {
        if (res && res.success) {
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);
          dispatch({
            type: REGISTRATION_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch((res) => {
        dispatch({
          type: REGISTRATION_FAILED,
        });
        console.log(`Ошибка регистрации: ${res}`);
      });
  };
};

export const loginUser: AppThunk = ( email: string, password: string ) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    postLogin(email, password)
      .then((res) => {
        if (res.success) {
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);
          dispatch({
            type: LOGIN_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch((res) => {
        dispatch({
          type: LOGIN_FAILED,
        });
        console.log(`Email или пароль введены не верно: ${res}`);
      });
  };
};

export const logoutUser = (refreshToken: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    postLogout(refreshToken)
      .then((res) => {
        if (res.success) {
          deleteCookie("refreshToken");
          deleteCookie("accessToken");
          dispatch({
            type: LOGOUT_SUCCESS,
          });
        }
      })
      .catch((res) => {
        dispatch({
          type: LOGOUT_FAILED,
        });
        console.log(`Ошибка выхода: ${res}`);
      });
  };
};

export const getUserInfo = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    getUser()
      .then((res) => {
        if (res.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch((res) => {
        dispatch({
          type: GET_USER_FAILED,
        });
        console.log(`Ошибка авторизации: ${res}`);
      });
  };
};

export const updateUserInfo: AppThunk = (name: string, email: string, password: string ) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
    patchUser({ name, email, password })
      .then((res) => {
        if (res.success) {
          dispatch({
            type: UPDATE_USER_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch((res) => {
        dispatch({
          type: UPDATE_USER_FAILED,
        });
        console.log(`Ошибка: ${res}`);
      });
  };
};

export const updatePassword: AppThunk = ( email: string ) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_PWD_REQUEST,
    });
    postPasswordReset({ email })
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: UPDATE_PWD_SUCCESS,
          });
        }
      })
      .catch((res) => {
        dispatch({
          type: UPDATE_PWD_FAILED,
        });
        console.log(`Ошибка при отправке пароля: ${res}`);
      });
  };
};

export const submitPassword: AppThunk = ( password: string, token: string ) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: SUBMIT_PWD_REQUEST,
    });
    postPasswordChange({ password, token })
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: SUBMIT_PWD_SUCCESS,
          });
        }
      })
      .catch((res) => {
        dispatch({
          type: SUBMIT_PWD_FAILED,
        });
        console.log(`Ошибка обновления пароля: ${res}`);
      });
  };
};

export const updateToken = (dispatch: AppDispatch) => {
  dispatch({
    type: UPDATE_TOKEN_REQUEST
  });
    const refreshToken = getCookie("refreshToken");
    postRefreshToken(refreshToken)
      .then(res => {
        if (res && res.success) {
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);
          dispatch({
            type: UPDATE_TOKEN_SUCCESS,
          });

        }
      })
    .catch(res => {
      dispatch({
        type: UPDATE_TOKEN_FAILED
      });
      console.log(`Ошибка обновления токена: ${res}`);
    });
  };

