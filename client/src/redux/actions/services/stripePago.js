import axios from "axios";
import { ActionTypes } from "../../constants/actions-types";


export let getSessionUrl = async(idService)=>{
  try {
    let newSession = await axios.put("http://localhost:3005/user/service/pagar/review", {
      idProduct: idService
    })

    return newSession.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export let setReviewTrabajo = (idProduct, score, review) => async(dispatch)=>{
  try {
    let result = await axios.put(`/user/service/calificar/${idProduct}`, {
      review: review || "",
      score: score || 0
    })

    return true
  } catch (error) {
    console.log(error);
    alert(error.message)
  }
};

