//** Constants */
import { ActionTypes } from "../constants/actions-types";

const initialState = {
  token: "",
  userLogin: {},
  imagePerfil: "",
  users: [],
  userId: {},
  allUsers: [],
  usersProfesionales: {},
  jobs: [],
  allJobs: [],
  jobById: {},
  service: {},
  totalPages: 1,
  totalPagesSuggestion: 1,
  servicesDashboard: [],
  filterService: [],
  userDetail: {},
  professionalDetail: {},
  serviceDetail: {},
  dashboardAdmin: {},
  mytrabajos: {},
  myservices: {},
  mypostulaciones: {},

  // suggestions
  suggestionServices: [],

  //config para filtros services
  configFilterServicesSuggestion: {
    page: 1,
    page_size: 5,
    job: false,
  },

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

  //config para filtros services
  configFilterUser: {
    page: 1,
    page_size: 15,
    state: true,
    name: "",
    job: false,
    provincia: "Buenos Aires",
    ciudad: false,
    dias: false,
    horario: "mañana",
    role: "professional",
    orderName: false,
    orderRating: "DESC",
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //** Jobs */
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
    case ActionTypes.CLEAN_JOB_BY_ID:
      return {
        ...state,
        jobById: {},
      };

    /********************* */
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
    case ActionTypes.GET_USER_AUTH0_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case ActionTypes.GET_SERVICE:
      return {
        ...state,
        service: action.payload,
        totalPages: action.payload.totalPages,
      };
    case ActionTypes.SUGGESTION_SERVICES:
      return {
        ...state,
        suggestionServices: action.payload.respuesta,
        totalPagesSuggestion: action.payload.respuesta.totalPages,
        configFilterServicesSuggestion: {
          page: action.payload.queries.page,
          // page: 1,
          page_size: 5,
          job: false,
        },
      };
    case ActionTypes.CLEAN_SUGGESTION_SERVICE:
      return {
        ...state,
        suggestionServices: action.payload,
      };
    case ActionTypes.CLEAN_ALL_SERVICES:
      return {
        ...state,
        service: action.payload,
      };

    case ActionTypes.GET_SERVICES_DASBOARD:
      return {
        ...state,
        servicesDashboard: action.payload,
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

    // case ActionTypes.FILTER_MODEL:
    //   return {
    //     ...state,
    //     filterService: action.payload.result,
    //     state: action.payload.state,
    //     job: action.payload.job,
    //     provincias: action.payload.provincias,
    //     localidades: action.payload.localidades,
    //   };

    case ActionTypes.GET_ALL_USERS_FILTRADO:
      return {
        ...state,
        usersProfesionales: action.payload,
      };

    /**************************************** */
    //PROFESSIONAL BY ID

    case ActionTypes.PROFESSIONAL_DETAIL:
      return {
        ...state,
        professionalDetail: action.payload,
      };
    case ActionTypes.MY_TRABAJOS:
      return {
        ...state,
        mytrabajos: action.payload,
      };
    case ActionTypes.MY_SERVICES:
      return {
        ...state,
        myservices: action.payload,
      };
    case ActionTypes.MY_POSTULACIONES:
      return {
        ...state,
        mypostulaciones: action.payload,
      };

    /**************************************** */
    //SERVICE BY ID
    case ActionTypes.SERVICE_DETAIL:
      return {
        ...state,
        serviceDetail: action.payload,
      };

    //
    case ActionTypes.CLEAN_SERVICE_DETAIL:
      return {
        ...state,
        serviceDetail: action.payload,
      };

    //Login y Create user
    case ActionTypes.REGISTER_USER_AND_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        userLogin: action.payload.result,
        imagePerfil: action.payload.imagePerfil,
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
    /*****************************************/
    //Addmin dashboard Content
    case ActionTypes.GET_DASHBOARD_CONTENT:
      return {
        ...state,
        dashboardAdmin: action.payload,
      };
    default:
      return state;
  }
}
