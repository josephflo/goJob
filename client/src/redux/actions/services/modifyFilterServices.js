import { ActionTypes } from "../../constants/actions-types";


export let configFilterService = (newConfig) => {

  //console.log("Nueva config");

  return {
    type: ActionTypes.CONFIG_FILTER_SERVICES,
    payload: newConfig,
  };
};
