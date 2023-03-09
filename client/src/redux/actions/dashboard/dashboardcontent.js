import axios from "axios";
import { ActionTypes } from "../../constants/actions-types";


export let dashboardContentAdmin =  () => async (dispatch)=> {

    
    try {
        let result = await axios.get("admin/dashboard")
        

        return dispatch({
            type: ActionTypes.GET_DASHBOARD_CONTENT,
            payload: result.data,
          });
    } catch (error) {
         alert("fallo")
        
    }

   
  };