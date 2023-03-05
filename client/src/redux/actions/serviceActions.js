//** Dependencies */
import axios from "axios";
//** Constants */
import { ActionTypes } from "../constants/actions-types";

//** Helpers */
import convertObjToQuery from "../../helpers/convertObjToQuery";

//** SERVICES ********************************* */

export const getService = () => {
  console.log("GET servicesDashboard");

  return async (dispatch) => {
    try {
      const result = await axios.get(`/service`);
      return dispatch({
        type: ActionTypes.GET_SERVICES_DASBOARD,
        payload: result.data.result,
      });
    } catch (error) {
      console.log(error.message);
      alert(error.message);
      return dispatch({
        type: ActionTypes.GET_SERVICES_DASBOARD,
        payload: [],
      });
    }
  };
};

export const createService = (input) => {
  return async (dispatch) => {
    try {
      const customConfig = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const input_ = {
        name: input.name,
        tittle: input.tittle,
        description: input.description,
        provincia: input.provincia,
        ciudad: input.ciudad,
        direccion: input.direccion,
        presupuesto: input.presupuesto,
        jobs: input.jobs,
      };

      const formData = new FormData();
      formData.append("image", input.inputImage);
      // formData.append("id", input.id);

      const result = await axios.post("user/service", input_);
      await axios.put(
        `/user/service/img/${result.data.service.id}`,
        formData,
        customConfig
      );

      return dispatch({
        type: ActionTypes.CREATE_SERVICE,
        payload: result.data,
      });
    } catch (error) {
      alert("Relleno correctamente los formularios");
      // throw new Error("Error en createService");
    }
  };
};

export const getServiceById = (idService) => {
  return async (dispatch) => {
    const result = await axios.get(`/service/${idService}`);
    return dispatch({
      type: ActionTypes.SERVICE_DETAIL,
      payload: result.data.result,
    });
  };
};

export const cleanServiceById = () => {
  return async (dispatch) => {
    return dispatch({
      type: ActionTypes.CLEAN_SERVICE_DETAIL,
      payload: {},
    });
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
