let convertObjToQuery = (objeto) => {
  let queryString = "";
  for (let clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      if (queryString.length > 0) {
        queryString += "&";
      }
      queryString +=
        encodeURIComponent(clave) + "=" + encodeURIComponent(objeto[clave]);
    }
  }
  return `&${queryString}`;
};

export default convertObjToQuery;
