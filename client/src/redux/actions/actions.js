import axios from "axios";
import { ActionTypes } from "../constants/actions-types";

//** ACTIONS JOB **********************************/

export const addJob = (input) => {
  return async (dispatch) => {
    const json = JSON.stringify(input);
    const customConfig = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const result = await axios.post("job", json, customConfig);
    return dispatch({
      type: ActionTypes.ADD_JOB,
      payload: result.data,
    });
  };
};

export const getJobs = () => {
  return async (dispatch) => {
    const result = await axios.get("/job");
    // console.log(result);
    return dispatch({
      type: ActionTypes.GET_JOBS,
      payload: result.data.result,
    });
  };
};

export const getJobById = (id) => {
  return async (dispatch) => {
    const result = await axios.get(`/job/${id}`);
    return dispatch({
      type: ActionTypes.GET_JOB_BY_ID,
      payload: result.data.result,
    });
  };
};

export const updateJob = (id, input) => {
  return async () => {
    const json = JSON.stringify(input);
    const customConfig = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const result = await axios.put(`/job/${id}`, json, customConfig);
    return result;
  };
};

export const deleteJob = (id) => {
  return async () => {
    const result = await axios.delete(`/job/${id}`);
    return result;
  };
};

//** ACTIONS USERS **********************************/

export const createUser = (input) => {
  return async (dispatch) => {
    const json = JSON.stringify(input);
    const customConfig = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const result = await axios.post("user/register", json, customConfig);
    return dispatch({
      type: ActionTypes.CREATE_USER,
      payload: result.data,
    });
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    const result = await axios.get("/user");
    return dispatch({
      type: ActionTypes.GET_USERS,
      payload: result.data.result,
    });
  };
};

export const userLogin = (input) => {
  return async (dispatch) => {
    const json = JSON.stringify(input);
    const customConfig = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const result = await axios.post("user/login", json, customConfig);
    return dispatch({
      type: ActionTypes.USER_LOGIN,
      payload: result.data,
    });
  };
};

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
// export const getServices = () => {
//   return async (dispatch) => {
//     const result = await axios.get("/user/services");
//     return dispatch({
//       type: ActionTypes.GET_SERVICES,
//       payload: result.data,
//     });
//   };
// };

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

// get ( http://localhost:3005/service?page=1&page_size=5 )

export const serviceFilter = (input) => {
  return async (dispatch) => {
    let result;
    if (input === "default_2") {
      result = await axios.get(`/service`);
    } else {
      result = await axios.get(`/service?page=1&page_size=10&job=${input}`);
    }
    return dispatch({
      type: "SERVICE_FILTER",
      payload: result.data.result,
    });
  };
};

//**FILTER*********************************** */
export const filterByJobs = (payload) => {
  return {
    type: ActionTypes.FILTER_BY_JOBS,
    payload,
  };
};

export function orderByName(payload) {
  return {
    type: ActionTypes.ORDER_BY_NAME,
    payload,
  };
}
