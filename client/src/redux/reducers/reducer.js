//** Constants */
import { Action } from "@remix-run/router";
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
  mypostulaciones: [],

  selected: 1,
  selectedComun: 1,

  // suggestions
  suggestionServices: [],
  stateSuggestionService: "",

  //config para filtros services
  configFilterServicesSuggestion: {
    page: 1,
    page_size: 5,
    job: false,
    state: "pendiente",
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
    horario: false,
    role: "professional",
    orderName: false,
    orderRating: "DESC",
  },

  // config para filtros PERFIL COMUN ofertas
  configFilterPerfilOfferComun: {
    tittle: "",
    state: "",
    fecha_publicacion: "ASC",
  },

  // config para filtros PERFIL PROFESIONAL ofertas
  configFilterPerfilOffer: {
    tittle: "",
    state: "",
    fecha_publicacion: "ASC",
  },

  // config para filtros PERFIL PROFESIONAL trabajos
  configFilterPerfilJobs: {
    tittle: "",
    state: "",
    fecha_publicacion: "ASC",
  },

  // config para filtros PERFIL PROFESIONAL postulaciones
  configFilterPerfilPostulaciones: {
    tittle: "",
    fecha_publicacion: "ASC",
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

    /************* */
    case ActionTypes.STATE_SELECTED:
      return {
        ...state,
        selected: action.payload,
      };
    case ActionTypes.STATE_SELECTED_COMUN:
      return {
        ...state,
        selectedComun: action.payload,
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

    /** SUGESTIONS */
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
          state: "pendiente",
        },
      };
    case ActionTypes.CLEAN_SUGGESTION_SERVICE:
      return {
        ...state,
        suggestionServices: action.payload,
      };
    case ActionTypes.STATE_SUGGESTION_SERVICE:
      return {
        ...state,
        stateSuggestionService: action.payload,
      };
    /************************* */
    case ActionTypes.CLEAN_ALL_SERVICES:
      return {
        ...state,
        service: action.payload,
      };

    //******** CLEAN PROFESSIONAL PROFILE */
    case ActionTypes.CLEAN_OFFER_PERFIL_PROFESSIONAL:
      return {
        ...state,
        myservices: {},
      };
    case ActionTypes.CLEAN_TRABAJOS_PERFIL_PROFESSIONAL:
      return {
        ...state,
        mytrabajos: {},
      };
    case ActionTypes.CLEAN_POSTULACIONES_PERFIL_PROFESSIONAL:
      return {
        ...state,
        mypostulaciones: {},
      };
    //*********************************** */

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

    /************** FILTROS PERFIL PROFESIONAL */
    case ActionTypes.CONFIG_FILTER_PERFIL_OFFER:
      return {
        ...state,
        configFilterPerfilOffer: action.payload,
      };
    case ActionTypes.CONFIG_FILTER_PERFIL_JOBS:
      return {
        ...state,
        configFilterPerfilJobs: action.payload,
      };
    case ActionTypes.CONFIG_FILTER_PERFIL_POSTULACIONES:
      return {
        ...state,
        configFilterPerfilPostulaciones: action.payload,
      };
    /************** */
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
