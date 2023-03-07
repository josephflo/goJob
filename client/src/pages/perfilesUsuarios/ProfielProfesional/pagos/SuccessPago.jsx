import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setReviewTrabajo } from "../../../../redux/actions/services/stripePago";

export default function SuccessPago() {
  let dispatch = useDispatch()
  const { role, idUser, idProduct } = useParams();

  let [enviarButt, setEnviarButt] = useState(false)
  let [review, setForm] = useState("")
  let [score, setScore] = useState(1)
  /****************************** */
  //estados para las 5 estrellas
  let [go, setGo] = useState({
    star1: true,
    star2: false,
    star3: false,
    star4: false,
    star5: false,
  })



  let setReview = ()=>{
    setEnviarButt(true) 

    dispatch(setReviewTrabajo(idProduct, score, review))
    setTimeout(() => {
      window.close();
    }, 2500);

    //dispatch(setReviewTrabajo(idProduct, score, review))
  }

  let onChangeValoracion = (eve)=>{
    let value = eve.target.value
    setForm(value)
  }

  let setRating = (score)=>{

    let newGo = {...go}
    for (let index = 1; index <= 5; index++) {
      if (index <= score) {
        newGo[`star${index}`] = true     
      }else{
        newGo[`star${index}`] = false     
      }
    }

    setGo(newGo)
    setScore(Number(score))
  }

  useEffect(() => {

  }, []);

  let claseEstrella = "mx-auto w-10 h-10 text-yellow-400"
  let claseSinEstrella = "mx-auto w-10 h-10 text-gray-300 dark:text-gray-500"

  return (
    <div class="w-full max-w-xs mx-auto justify-items-center items-center ">
      <div id="centraPlease" class="my-20">
        
        <p class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white text-center py-3"> {"Valora el servicio"}</p>


        {/** */}
        <div class="flex items-center justify-items-center py-4">
            <svg onClick={()=>setRating(1)} aria-hidden="true" class={go.star1?claseEstrella:claseSinEstrella} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>1 star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

            <svg onClick={()=>setRating(2)} aria-hidden="true" class={go.star2?claseEstrella:claseSinEstrella} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>2 stars</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

            <svg onClick={()=>setRating(3)} aria-hidden="true" class={go.star3?claseEstrella:claseSinEstrella} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>3 stars</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

            <svg onClick={()=>setRating(4)} aria-hidden="true" class={go.star4?claseEstrella:claseSinEstrella} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>4 stars</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

            <svg onClick={()=>setRating(5)} aria-hidden="true" class={go.star5?claseEstrella:claseSinEstrella} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>5 stars</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

        </div>
        {/* */}

        <div class="mb-4">
          <label 
            for="message" 
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tu reseña:</label>
          <textarea id="message" rows="4" 
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Como calificas el trabajo del professional..." 
            value={review}
            onChange={onChangeValoracion}>
          </textarea>
        </div>

        <div class="flex justify-center">
          <button onClick={setReview}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            {enviarButt? "procesando..." : "Enviar"} 
          </button>
        </div>
      </div>

    </div>
  );
}