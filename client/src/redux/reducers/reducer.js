import { ActionTypes } from "../constants/actions-types";
const initialState = {
  users: [],
  jobs: [],
  jobById: {},
  service: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case ActionTypes.GET_JOB_BY_ID:
      return {
        ...state,
        jobById: action.payload,
      };
    case ActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ActionTypes.GET_SERVICE:
      return {
        ...state,
        service: action.payload,
      };
    default:
      return state;
  }
}
