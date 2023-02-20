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
      case ActionTypes.FILTER_BY_JOBS:
        const alljobs = state.jobs;
        const filter= action.payload === 'all' ? alljobs : alljobs.filter((j) => j.jobs.some(j=> j.name === action.payload));
        return{
          ...state,
          jobs: filter,
        }
        case ActionTypes.ORDER_BY_NAME:
          const sort = action.payload === 'A-Z' ? state.users.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0
          }) : state.users.sort(function (a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0
          })
          return {
            ...state,
            users: sort
          }
    default:
      return state;
  }
}
