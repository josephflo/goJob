import axios from "axios";
import { ActionTypes } from "../../constants/actions-types";

export const inactiveService = (id) => async (dispatch) => {
  try {
    const result = await axios.delete("admin/service/delete",{
       id: id
    });
    return dispatch({
      type: ActionTypes.INACTIVE_SERVICE,
      payload: result.data,
    });
  } catch (error) {
    throw Error(error.message);
  }
};

export const activateService = (id) => async (dispatch) => {
  try {
    const result = await axios.put("admin/service/active", {
        id:id
    });
    return dispatch({
      type: ActionTypes.ACTIVATE_SERVICE,
      payload: result.data,
    });
  } catch (error) {
    throw Error(error.message);
  }
};
