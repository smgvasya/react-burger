import { getCookie, setCookie } from "./cookie";
import { UserFormTypes, submitPwdTypes, LoginFormTypes, UpdatePwdFormTypes } from "../services/types/types";

const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
  authUrl: "https://norma.nomoreparties.space/api/auth",
};

const testRes = (res: Response) => {
  return res.ok
    ? res.json()
    : res.json().then((err: Response) => Promise.reject(err));
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

export const postOrder = (arrayId: object) => {
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

export const postRegister = async ({
  name,
  email,
  password,
}: UserFormTypes) => {
  const res = await fetch(`${config.authUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  return testRes(res);
};

export const postLogin = async ({email, password}: LoginFormTypes) => {
  const res = await fetch(`${config.authUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return testRes(res);
};

export const postLogout = async (refreshToken: string) => {
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
export const patchUser = ({ name, email, password }: UserFormTypes) => {
  return fetchWithRefresh(`${config.authUrl}/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify({ name, email, password }),
  });
};

export const postPasswordReset = async ({email}: UpdatePwdFormTypes) => {
  const res = await fetch(`${config.baseUrl}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email}),
  });
  return testRes(res);
};

export const postPasswordChange = async ({
  password,
  token,
}: submitPwdTypes) => {
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

export const fetchWithRefresh = async (url: string, options?: RequestInit) => {
  try {
    const res = await fetch(url, options);
    return await testRes(res);
  } catch (err: any) {
    if (err.message === "jwt expired") {
      const refreshData = await postRefreshToken();

      setCookie("refreshToken", refreshData.refreshToken);
      setCookie("accessToken", refreshData.accessToken.split("Bearer ")[1]);

      (options?.headers as Headers).set(
        "Authorization",
        refreshData.accessToken
      );

      const res = await fetch(url, options);
      return await testRes(res);
    } else {
      return Promise.reject(err);
    }
  }
};
