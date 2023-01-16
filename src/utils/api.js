const getApi = async (baseUrl) => {
  const res = await fetch(baseUrl);
  return await (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
};

export default getApi;
