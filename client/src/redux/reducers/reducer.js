//** Constants */
import { ActionTypes } from "../constants/actions-types";

const initialState = {
  users: [],
  jobs: [],
  jobById: {},
  service: [],
  filter: [],
  state: "",
  job: "",
  provincias: "",
  localidades: "  ",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
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
    case ActionTypes.CREATE_USER:
      return {
        ...state,
        user: action.payload,
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

    case ActionTypes.FILTER_MODEL:
      return {
        ...state,
        filter: action.payload.result,
        state: action.payload.state,
        job: action.payload.job,
        provincias: action.payload.provincias,
        localidades: action.payload.localidades,
      };
    default:
      return state;
  }
}
// case ActionTypes.ORDER_BY_NAME:
//   let users_ = state.service.slice();
//   const sort =
//     action.payload === "A-Z" || action.payload === "default"
//       ? users_.sort(function (a, b) {
//           if (a.tittle > b.tittle) {
//             return 1;
//           }
//           if (b.tittle > a.tittle) {
//             return -1;
//           }
//           return 0;
//         })
//       : users_.sort(function (a, b) {
//           if (a.tittle > b.tittle) {
//             return -1;
//           }
//           if (b.tittle > a.tittle) {
//             return 1;
//           }
//           return 0;
//         });
//   return {
//     ...state,
//     users2: sort,
//   };
