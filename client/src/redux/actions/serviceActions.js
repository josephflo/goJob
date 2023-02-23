//** Dependencies */
import axios from "axios";
//** Constants */
import { ActionTypes } from "../constants/actions-types";

//** Helpers */
import convertObjToQuery from "../../helpers/convertObjToQuery";

//** SERVICES ********************************* */

export const getService = () => {
  return async (dispatch) => {
    const result = await axios.get(`/service`);
    return dispatch({
      type: ActionTypes.GET_SERVICE,
      payload: result.data.result,
    });
  };
};

export const createService = (input) => {
  return async (dispatch) => {
    const json = JSON.stringify(input);
    const customConfig = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    console.log(input);
    const result = await axios.post("/user/service", json, customConfig);
    return dispatch({
      type: ActionTypes.CREATE_SERVICE,
      payload: result.data,
    });
  };
};

export const filterModel = (
  page,
  page_size,
  state,
  name,
  job,
  provincias,
  localidades
) => {
  let queries = {};
  if (state) queries.state = state;
  if (name) queries.name = name;
  if (job) queries.job = job;
  if (provincias) queries.provincias = provincias;
  if (localidades) queries.localidades = localidades;

  const concatQuery = convertObjToQuery(queries);

  return async (dispatch) => {
    const result = await axios.get(
      `/service?page=${page}&page_size=${page_size}${concatQuery}`
    );

    return dispatch({
      type: ActionTypes.FILTER_MODEL,
      payload: {
        state,
        job,
        provincias,
        localidades,
        result: result.data.result,
      },
    });
  };
};
// export const serviceFilter = (input) => {
//   return async (dispatch) => {
//     let result;
//     if (input === "default_2") {
//       result = await axios.get(`/service`);
//     } else {
//       result = await axios.get(`/service?page=1&page_size=10&job=${input}`);
//     }
//     return dispatch({
//       type: "SERVICE_FILTER",
//       payload: result.data.result,
//     });
//   };
// };

//**FILTER*********************************** */
// export const filterByJobs = (payload) => {
//   return {
//     type: ActionTypes.FILTER_BY_JOBS,
//     payload,
//   };
// };

// export const serviceFilter = (input, page, size) => {
//   return async (dispatch) => {
//     const result = await axios.get(
//       `/service?page=${page}&page_size=${size}&job=${input}`
//     );
//     return dispatch({
//       type: ActionTypes.FILTER_BY_JOBS,
//       payload: result.data.result,
//     });
//   };
// };
