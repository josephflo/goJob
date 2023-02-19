import axios from "axios";
import { ActionTypes } from "../constants/actions-types";

// export function getName(name) {
//   return async function (dispatch) {
//     try {
//       let res = await axios.get(/* 'http://localhost:3001/' */ +name);
//       return dispatch({
//         type: ActionTypes.GET_NAME,
//         payload: res.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

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

export const getService = (page, page_size) => {
  return async (dispatch) => {
    const result = await axios.get(
      `service?page=${page}&page_size=${page_size}`
    );
    return dispatch({
      type: ActionTypes.GET_SERVICE,
      payload: result.data,
    });
  };
};
