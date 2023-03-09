import { ActionTypes } from "../constants/actions-types";

export const orderAplhabetical = (payload) => {
	return {
		type: ActionTypes.ORDER_BY_NAME,
		payload,
	};
};
export const orderByRole = (payload) => {
	return {
		type: ActionTypes.ORDER_BY_ROLE,
		payload,
	};
};
export const orderByState = (payload) => {
	return {
		type: ActionTypes.ORDER_BY_STATE,
		payload,
	};
};
export const orderAplhabeticalJobs = (payload) => {
	return {
		type: ActionTypes.ORDER_BY_NAME_JOB,
		payload,
	};
};
export const orderByStateJobs = (payload) => {
	return {
		type: ActionTypes.ORDER_BY_STATE_JOB,
		payload,
	};
};