import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setReviewTrabajo } from "../../../redux/actions/services/stripePago";

export default function SuccessPago() {
  let dispatch = useDispatch()
  let [form, setForm] = useState({
    score: 0,
    review: ""
  })
  let [enviarButt, setEnviarButt] = useState(false)
 
  const { role, idUser, idProduct } = useParams();

  let setReview = ()=>{
    setEnviarButt(true) 

    dispatch(setReviewTrabajo(idProduct, form.score, form.review))
    setTimeout(() => {
      window.close();
    }, 2500);

    //dispatch(setReviewTrabajo(idProduct, score, review))
  }

  let onChangeValoracion = (eve)=>{
    let value = eve.target.value
    setForm({
      ...form,
      score: value
    })
  }

  let changeReview = (eve)=>{
    let value = eve.target.value
    setForm({
      ...form,
      review: value
    })
  }

  useEffect(() => {

  }, []);

  return (
    <div className="w-full max-w-xs mx-auto">
      <h2>{idUser}</h2>
      <h2>{idProduct}</h2>
      <h2>{role}</h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="rating"
          >
            Valoracion (0-1 estrellas)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rating"
            type="number"
            min="0"
            max="1"
            value={form.score}
            onChange={onChangeValoracion}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="comment"
          >
            Comentario
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            rows="3"
            value={form.review}
            onChange={changeReview}
          ></textarea>
        </div>
        <div className="flex justify-center">


          <button onClick={setReview}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            {enviarButt? "...procesando" : "Enviar"} 
          </button>


        </div>
    </div>
  );
}
