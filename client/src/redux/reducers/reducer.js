//** Constants */
import { ActionTypes } from "../constants/actions-types";

const initialState = {
  users: [],
  allUsers:[],
  jobs: [],
  allJobs:[],
  jobById: {},
  service: [],
  filterService: [],
  userDetail: {},
  state: "",
  job: "",
  provincias: "",
  localidades: "  ",

  //config para filtros
  configFilterServices: {
    page: 1,
    page_size: 20,
    state: "pendiente",
    tittle: "",
    orderFecha: "DESC",
    provincia: false,
    ciudad: false,

    job: false
  }
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

    case ActionTypes.USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      };

    case ActionTypes.CLEAN_USER_DETAIL:
      return {
        ...state,
        userDetail: {},
      };

    case ActionTypes.FILTER_MODEL:
      return {
        ...state,
        filterService: action.payload.result,
        state: action.payload.state,
        job: action.payload.job,
        provincias: action.payload.provincias,
        localidades: action.payload.localidades,
      };

    /**************************************** */
    //FILTROS
    case ActionTypes.CONFIG_FILTER_SERVICES:
      return{
        ...state,
        configFilterServices: action.payload
      }

    default:
      return state;
  }
}

