//** Constants */
import { ActionTypes } from "../constants/actions-types";

const initialState = {
  users: [],
  allUsers: {},
  usersProfesionales: [],
  jobs: [],
  allJobs: [],
  jobById: {},
  service: {},
  filterService: [],
  userDetail: {},


  //config para filtros services
  configFilterServices: {
    page: 1,
    page_size: 15,
    state: "pendiente",
    tittle: "",
    orderFecha: "DESC",
    provincia: "Buenos Aires",
    ciudad: false,
    job: false,
  },

  //config para filtros usuarios
  configFilterUser: {
    page: 1,
    page_size: 15,
    name: false,
    job: false,
    provincia: false,
    ciudad: false,
    dias: false,
    horario: false,
    role: "professional",
    orderName: "ASC",
    orderRating: "DESC"
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
        allUsers: action.payload,
      };
    case ActionTypes.GET_SERVICE:
      return {
        ...state,
        service: action.payload
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
      return {
        ...state,
        configFilterServices: action.payload,
      };

    case ActionTypes.CONFIG_FILTER_USER:
      return {
        ...state,
        configFilterUser: action.payload,
      };
    default:
      return state;
  }
}
