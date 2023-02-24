//** Constants */
import { ActionTypes } from "../constants/actions-types";

const initialState = {
  users: [],
  allUsers:[],
  jobs: [],
  allJobs:[],
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
        allJobs: action.payload,
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
        allUsers:action.payload,
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
 case ActionTypes.ORDER_BY_NAME:
   const sort =
    action.payload === "A-Z"
      ? state.users.sort(function (a, b) {
           if (a.firstName  > b.firstName ) {
             return 1;
           }          if (b.firstName  > a.firstName) {
             return -1;
           }
           return 0;
         })
       : state.users.sort(function (a, b) {
           if (a.firstName > b.firstName ) {
             return -1;
           }
           if (b.firstName  > a.firstName ) {
             return 1;
           }
           return 0;
         });
            return {
     ...state,
     users: sort,
    
  };
  case ActionTypes.ORDER_BY_NAME_JOB:
   const sortJob =
    action.payload === "A-Z"
      ? state.jobs.sort(function (a, b) {
           if ( a.name > b.name) {
             return 1;
           }          if ( b.name >  a.name) {
             return -1;
           }
           return 0;
         })
       : state.jobs.sort(function (a, b) {
           if ( a.name > b.name) {
             return -1;
           }
           if ( b.name >  a.name) {
             return 1;
           }
           return 0;
         });
            return {
     ...state,
     jobs: sortJob,
    };
  case ActionTypes.ORDER_BY_ROLE:
    const allUsers = [...state.allUsers];
    const sortByRol =
    action.payload === 'all' 
    ? allUsers 
    : allUsers.filter((u) => u.role === action.payload
    );
    return{
      ...state,
      users: sortByRol,
     
    }
    case ActionTypes.ORDER_BY_STATE:
    const allUsers2 = [...state.allUsers];
    const sortByState =
    action.payload === 'all' 
    ? allUsers2 
    : allUsers2.filter((u) => u.state === action.payload
    );
    return{
      ...state,
      users: sortByState,
     
    }
    case ActionTypes.ORDER_BY_STATE_JOB:
    const allJob2 = [...state.allJobs];
    const sortByStateJobs =
    action.payload === 'all' 
    ? allJob2 
    : allJob2.filter((u) => u.state === action.payload
    );
    return{
      ...state,
      jobs: sortByStateJobs,
     
    }
     default:
    return state;
}
}
