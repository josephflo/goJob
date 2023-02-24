//** Dependencies */
import axios from "axios";
import { combineReducers } from "redux";
//** Constants */
import { ActionTypes } from "../constants/actions-types";

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
      // payload: result.data,
    });
  };
};

export const uploadImage = (input) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("img", input.image);

    const customConfig = {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      },
    };
    const result = await axios.post(
      "/user/register/image",
      formData,
      customConfig
    );
  } catch (error) {
    console.error(error.message);
  }
};

// export const createUserImageV2 = (input) => {
//   return async (dispatch) => {
//     // const json = JSON.stringify(input);
//     const formData = new FormData();

//     formData.append("user", JSON.stringify(input.user));
//     formData.append("jobs", JSON.stringify(input.jobs));
//     formData.append("image", input.image);
//     console.log(formData);
//     const customConfig = {
//       headers: {
//         // Accept: "application/json",
//         // "Content-Type": "application/json",
//         "content-type": "multipart/form-data",
//       },
//     };
//     const result = await axios.post("user/register", formData, customConfig);
//     return dispatch({
//       type: ActionTypes.CREATE_USER,
//       payload: result.data,
//     });
//   };
// };

//ruta modificada de create user para enviar imagens
//

//

export const getUsers = () => {
  return async (dispatch) => {
    const result = await axios.get("/user");
    return dispatch({
      type: ActionTypes.GET_USERS,
      payload: result.data.result,
    });
  };
};
export const getUsersPaginate = () => {
  return async (dispatch) => {
    const result = await axios.get(`/user/page=1&page_size=3`);
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

export const updateUser = (payload) => {
  return async () => {
    try {
      await axios.put(`/users`, payload);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserDetail = (id) => {
  return async (dispatch) => {
    const result = await axios.get(`/user/get/${id}`);
    return dispatch({
      type: ActionTypes.USER_DETAIL,
      payload: result.data.result,
    });
  };
};

export const cleanUserDetail = () => {
  return (dispatch) => {
    return dispatch({
      type: ActionTypes.CLEAN_USER_DETAIL,
    });
  };
};
