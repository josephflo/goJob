import {GET_NAME} from '../actions/actions'
const initialState = {
  profession: []
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_NAME:
        return {
          ...state,
          profession: action.payload
        }
    default:
        return state;
         } }