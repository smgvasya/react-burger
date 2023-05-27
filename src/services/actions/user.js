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

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export const UPDATE_PWD_REQUEST = "UPDATE_PWD_REQUEST";
export const UPDATE_PWD_SUCCESS = "UPDATE_PWD_SUCCESS";
export const UPDATE_PWD_FAILED = "UPDATE_PWD_FAILED";

export const SUBMIT_PWD_REQUEST = "SUBMIT_PWD_REQUEST";
export const SUBMIT_PWD_SUCCESS = "SUBMIT_PWD_SUCCESS";
export const SUBMIT_PWD_FAILED = "SUBMIT_PWD_FAILED";

export const UPDATE_TOKEN_REQUEST = "UPDATE_TOKEN_REQUEST";
export const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";
export const UPDATE_TOKEN_FAILED = "UPDATE_TOKEN_FAILED";

export const registrationUser = ({ name, email, password }) => {
  return function (dispatch) {
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

export const loginUser = ({ email, password }) => {
  return function (dispatch) {
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

export const logoutUser = (refreshToken) => {
  return function (dispatch) {
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
  return function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    getUser()
    // .then((res) => res.json())
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

export const updateUserInfo = ({ name, email, password }) => {
  return function (dispatch) {
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

export const updatePassword = ({ email }) => {
  return function(dispatch) {
    dispatch({
      type: UPDATE_PWD_REQUEST
    });
    postPasswordReset({ email })
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: UPDATE_PWD_SUCCESS,
          });
      }

    })
    .catch(res => {
      dispatch({
        type: UPDATE_PWD_FAILED
      });
      console.log(`Ошибка при отправке пароля: ${res}`);
    });
  };
}

export const submitPassword = ({ password, token }) => {
  return function(dispatch) {
    dispatch({
      type: SUBMIT_PWD_REQUEST
    });
    postPasswordChange({ password, token })
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: SUBMIT_PWD_SUCCESS,
          });
      }
    })
    .catch(res => {
      dispatch({
        type: SUBMIT_PWD_FAILED
      });
      console.log(`Ошибка обновления пароля: ${res}`);
    });
  };
}

export const updateToken = () => {
  return function(dispatch) {
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
}
