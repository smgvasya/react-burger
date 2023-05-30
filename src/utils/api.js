import { getCookie, setCookie } from "./cookie";

const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
  authUrl: "https://norma.nomoreparties.space/api/auth",
};

const testRes = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredientsList = async () => {
  const res = await fetch(`${config.baseUrl}/ingredients`, {
    headers: {
      "Content-Type": "application/json",
      authorization: "",
    },
  });
  return testRes(res);
};

export const postOrder = (arrayId) => {
  return fetchWithRefresh(`${config.baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify({
      ingredients: arrayId,
    }),
  });
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

export const getUser = () => {
  return fetchWithRefresh(`${config.authUrl}/user`, {
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
  });
};
export const patchUser = ({ name, email, password }) => {
  return fetchWithRefresh(`${config.authUrl}/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify({ name, email, password }),
  });
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

export const postRefreshToken = async () => {
  const res = await fetch(`${config.authUrl}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  });
  return testRes(res);
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await testRes(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await postRefreshToken();
      setCookie("refreshToken", refreshData.refreshToken);
      setCookie("accessToken", refreshData.accessToken.split("Bearer ")[1]);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await testRes(res);
    } else {
      return Promise.reject(err);
    }
  }
};
