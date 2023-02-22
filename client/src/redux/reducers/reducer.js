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
        users2: action.payload,
      };

    case "SERVICE_FILTER":
      // const alljobs = state.users2;
      // const filterJobs = action.payload === "default_2" ? alljobs : alljobs;
      // : alljobs.filter((job) => console.log(job));
      // alljobs.filter(
      //     (j) =>
      //       // j.jobs.some((j) => j.city === action.payload)
      //       // j.Jobs.name === action.payload
      //       j.Jobs.id == action.payload
      //   );
      return {
        ...state,
        users2: action.payload,
      };
    case ActionTypes.ORDER_BY_NAME:
      let users_ = state.service.slice();
      const sort =
        action.payload === "A-Z" || action.payload === "default"
          ? users_.sort(function (a, b) {
              if (a.tittle > b.tittle) {
                return 1;
              }
              if (b.tittle > a.tittle) {
                return -1;
              }
              return 0;
            })
          : users_.sort(function (a, b) {
              if (a.tittle > b.tittle) {
                return -1;
              }
              if (b.tittle > a.tittle) {
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
