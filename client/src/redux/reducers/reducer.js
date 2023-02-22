import { ActionTypes } from "../constants/actions-types";
const initialState = {
  users: [],
  jobs: [],
  jobById: {},
  service: [],
  users2: [],
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
        users2: action.payload,
      };
    case ActionTypes.GET_SERVICE:
      return {
        ...state,
        service: action.payload,
      };


    case ActionTypes.FILTER_BY_JOBS:
      const alljobs = state.users2;
      console.log(action.payload);
      const filter =
        action.payload === "default_2"
          ? alljobs
          : alljobs.filter(
              (j) =>
                // j.jobs.some((j) => j.city === action.payload)
                j.city === action.payload
            );
      return {
        ...state,
        users2: filter,
      };
    case ActionTypes.ORDER_BY_NAME:
      let users_ = state.users.slice();
      const sort =
        action.payload === "A-Z" || action.payload === "default"
          ? users_.sort(function (a, b) {
              console.log(a.firstName);
              if (a.firstName > b.firstName) {
                return 1;
              }
              if (b.firstName > a.firstName) {
                return -1;
              }
              return 0;
            })
          : users_.sort(function (a, b) {
              console.log(a.firstName);
              if (a.firstName > b.firstName) {
                return -1;
              }
              if (b.firstName > a.firstName) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        users2: sort,
      };

    default:
      return state;
  }
}
