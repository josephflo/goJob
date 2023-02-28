//** Dependencies */
import axios from "axios";
//** Constants */
import { ActionTypes } from "../constants/actions-types";

//* ACTIONS USERS *************/

export const createUser = (input) => {
  return async (dispatch) => {
    // const formData = new FormData();
    try {
      const json = JSON.stringify({
        user: input.user,
        jobs: input.jobs,
      });

      const formData2 = new FormData();

      formData2.append("user", input.user.user);
      formData2.append("image", input.image);
      const customConfig = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const customConfig2 = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      await axios.post("user/register", { user: input.user, jobs: input.jobs });
      setTimeout(() => {}, 30000);
      await axios.post("/user/register/img", formData2, customConfig2);
      return dispatch({
        type: ActionTypes.CREATE_USER,
        // payload: result.data,
      });
    } catch (error) {
      console.log("Hubo errorrrrrrrrrrrrrr");
      console.log(error);
    }
  };
};

export const getUserAuth0Id = (sub) => async (dispatch) => {
  try {
      const existingUser = await axios.get(`/user/get/${sub}`)
      return dispatch({
        type:ActionTypes.GET_USER_AUTH0_ID,
        payload: existingUser.data
      })
  } catch (error) {
    return dispatch({
      type:ActionTypes.GET_USER_AUTH0_ID,
      payload: {status: 'error'}
    })
  }
};

export const createAndLogin = (newUser) =>async(dispatch)=> {

  try {
    let result = await axios.post("/user/register", newUser)

    return dispatch({
      type:ActionTypes.REGISTER_USER_AND_LOGIN,
      payload: result.data
    })

  } catch (error) {
    throw Error(error)
    console.log("No se pudo iniciar");
  }
};

export const putUser = (newUser) =>async(dispatch)=> {

  try {
    let result = axios.put("/user/register", newUser)

    return dispatch({
      type:ActionTypes.REGISTER_USER_AND_LOGIN,
      payload: result.data
    })

  } catch (error) {
    throw Error(error)
    console.log("No se pudo iniciar");
  }
};



export const uploadImage = (input) => async (dispatch) => {
  try {
    console.log(input.user);
    // console.log(result);
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