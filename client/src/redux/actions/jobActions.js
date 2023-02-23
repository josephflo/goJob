//** Dependencies */
import axios from "axios";
//** Constants */
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
