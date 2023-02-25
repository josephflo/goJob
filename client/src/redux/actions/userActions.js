//** Dependencies */
import axios from "axios";
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
      payload: result.data,
    });
  };
};

//ruta modificada de create user para enviar imagens
//
export let createUserImg = (input)=> async(dispatch)=> {
  try {
    // Crea un objeto FormData
    const formData = new FormData();

    // Agrega los datos JSON al FormData
    formData.append('user', JSON.stringify(input.user));
    formData.append('jobs', JSON.stringify(input.jobs));

    // Agrega la imagen al FormData, asegúrate de que el nombre del campo sea "image"
    //formData.append('image', fileInput.files[0], fileInput.files[0].name);

    // Envía la solicitud POST usando axios.post() y async/await
    const result = await axios.post('user/register', formData);
    return dispatch({
      type: ActionTypes.CREATE_USER,
      payload: result.data,
    });
  } catch (error) {
    console.error(error.message);
  }
}


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
			await axios.put(`/users`, payload)
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

