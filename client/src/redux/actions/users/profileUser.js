import { ActionTypes } from "../../constants/actions-types";

export const cleanOfferPerfilProfessional = () => {
  return async (dispatch) => {
    return dispatch({
      type: ActionTypes.CLEAN_OFFER_PERFIL_PROFESSIONAL,
    });
  };
};
export const cleanTrabajosPerfilProfessional = () => {
  return async (dispatch) => {
    return dispatch({
      type: ActionTypes.CLEAN_TRABAJOS_PERFIL_PROFESSIONAL,
    });
  };
};
export const cleanPostulacionesPerfilProfessional = () => {
  return async (dispatch) => {
    return dispatch({
      type: ActionTypes.CLEAN_POSTULACIONES_PERFIL_PROFESSIONAL,
    });
  };
};
