import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { applyToService } from "../../../redux/actions/services/applyService.js";
import { cleanServiceById } from "../../../redux/actions/serviceActions.js";
import { cleanSuggestionService } from "../../../redux/actions/services/getServices.js";

export default function Postularse({
  imageurl,
  firstName,
  lastName,
  id,
  myPostulaciones,
}) {
  const users = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleApply = () => {
    dispatch(applyToService(id));

    Swal.fire({
      title: "Te has postulado",
      confirmButtonColor: "green",
    });
    // navigate(`/profilep/postulaciones/${users.id}`);
    navigate(`/service`);
  };

  const handleCleanDetailService = () => {
    dispatch(cleanServiceById());
    dispatch(cleanSuggestionService());
  };

  let id_myPostulaciones = myPostulaciones?.map((myPost) => myPost.id);

  return (
    <>
      <div className="border-2 rounded-xl m-2 bg-white pb-4">
        <div className="w-[80%] mx-auto">
          <div className="grid grid-cols-3 from-indigo-500 rounded pt-4">
            <div className="col-span-1">
              <img src={imageurl} alt="" className=" scale-75" />
            </div>
            <div className="col-span-2">
              <p className="p-2">
                {firstName} {lastName}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-2">
          <button
            onClick={handleApply}
            disabled={id_myPostulaciones?.includes(id)}
            className={
              id_myPostulaciones?.includes(id)
                ? "bg-green-700 w-[80%] hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded"
                : "bg-blue-500 w-[80%] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            }
          >
            {id_myPostulaciones?.includes(id) ? <>Postulado</> : <>Postular</>}
          </button>
        </div>

        {/* <div className="flex justify-center p-2 ">
          <button className="bg-transparent w-[80%] hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <i className="fa-regular fa-heart"></i> Guardar en mi lista
          </button>
        </div> */}
        <div className="flex justify-center text-center p-2">
          <Link
            to="/service"
            onClick={handleCleanDetailService}
            className="bg-transparent w-[80%] hover:bg-orange-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            <button>Volver</button>
          </Link>
        </div>
      </div>
    </>
  );
}
