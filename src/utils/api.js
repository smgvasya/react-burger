const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
  headers: {
    "Content-Type": "application/json",
  },
};

const testRes = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getIngredientsList = async () => {
  const res = await fetch(`${config.baseUrl}/ingredients`, {
    headers: config.headers,
  });
  return testRes(res);
};

export const postOrder = async (arrayId) => {
  const res = await fetch(`${config.baseUrl}/orders`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      ingredients: arrayId,
    }),
  });
  return testRes(res);
};
