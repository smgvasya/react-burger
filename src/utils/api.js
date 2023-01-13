const getApi = (baseUrl) => {
  return fetch(baseUrl)
  .then(res =>{
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  })
}



export default getApi