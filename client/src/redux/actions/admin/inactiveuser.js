import axios from "axios";
import { ActionTypes } from "../../constants/actions-types";

export const updateUser = (updatedData) => async (dispatch) => {
    try {
      const result = await axios.put("/admin/user/update", updatedData);
      return dispatch({
        type: ActionTypes.UPDATE_USER_ADMIN,
        payload: result.data.user
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
  

