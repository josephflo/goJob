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
    try {
      const json = JSON.stringify(input);
      const customConfig = {
        headers: {
          'Authorization': `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZmlyc3ROYW1lIjoiVG9tIiwibGFzdE5hbWUiOiJXaWxzb24iLCJlbWFpbCI6InRvbXdpbHNvbkBleGFtcGxlLmNvbSIsInVzZXIiOiJ0b213aWxzb24iLCJwaG9uZSI6IjEyMzQ1Njc4OTQiLCJyb2xlIjoicHJvZmVzc2lvbmFsIiwiaWF0IjoxNjc3MzUwMTM3LCJleHAiOjE2Nzk5NDIxMzd9.w1Qm7ttqP3Kn98T_B_bSZNkQVX0NhWmhQjelzpDaguI`
        }
      }
      
      console.log("Esto llega");
      console.log(input);

      const result = await axios.post("/user/service", input, customConfig);

      return dispatch({
        type: ActionTypes.CREATE_SERVICE,
        payload: result.data,
      });
    } catch (error) {
      alert("Relleno correctamente los formularios")
      throw new Error("Error en createService")
    }

    
  };
};

export const filterModel = (
  page,
  page_size,
  job,
  state,
  tittle,
  provincia,
  ciudad
) => {
  let queries = {};
  if (state) queries.state = state;
  if (tittle) queries.tittle = tittle;
  if (job) queries.job = job;
  if (provincia) queries.provincia = provincia;
  if (ciudad) queries.ciudad = ciudad;

  const concatQuery = convertObjToQuery(queries);

  return async (dispatch) => {
    const result = await axios.get(
      `/service?page=${page}&page_size=${page_size}${concatQuery}`
    );

    return dispatch({
      type: ActionTypes.FILTER_MODEL,
      payload: {
        state,
        tittle,
        job,
        provincia,
        ciudad,
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
