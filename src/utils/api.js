import { getCookie } from "./cookie";

const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
  authUrl: "https://norma.nomoreparties.space/api/auth",
};

const testRes = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getIngredientsList = async () => {
  const res = await fetch(`${config.baseUrl}/ingredients`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return testRes(res);
};

export const postOrder = async (arrayId) => {
  const res = await fetch(`${config.baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify({
      ingredients: arrayId,
    }),
  });
  return testRes(res);
};

export const postRegister = async (name, email, password) => {
  const res = await fetch(`${config.authUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  return testRes(res);
};

export const postLogin = async (email, password) => {
  const res = await fetch(`${config.authUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return testRes(res);
};

export const postLogout = async (refreshToken) => {
  const res = await fetch(`${config.authUrl}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: refreshToken }),
  });
  return testRes(res);
};

export const getUser = async () => {
  const res = await fetch(`${config.authUrl}/user`, {
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
  });
  return testRes(res);
};

export const patchUser = async ({ name, email, password }) => {
  const res = await fetch(`${config.authUrl}/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify({ name, email, password }),
  });
  return testRes(res);
};

export const postPasswordReset = async ({ email }) => {
  const res = await fetch(`${config.baseUrl}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  return testRes(res);
};

export const postPasswordChange = async ({ password, token }) => {
  const res = await fetch(`${config.baseUrl}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, token }),
  });
  return testRes(res);
};

export const postRefreshToken = async ({ refreshToken }) => {
  const res = await fetch(`${config.authUrl}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: refreshToken }),
  });
  return testRes(res);
};
