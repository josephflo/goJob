import axios from "axios";
import { ActionTypes } from "../../constants/actions-types";


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

