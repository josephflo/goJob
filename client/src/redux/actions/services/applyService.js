import axios from "axios";
import { ActionTypes } from "../../constants/actions-types";

export const applyToService = (id) => {
  return (dispatch) => {
    axios.post(`/user/service/postular/${id}`);

    return dispatch({
      type: ActionTypes.APPLY_TO_SERVICE,
      payload: {},
    });
  };
};
