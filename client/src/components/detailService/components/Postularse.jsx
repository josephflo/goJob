import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { applyToService } from "../../../redux/actions/services/applyService.js";
import { cleanServiceById } from "../../../redux/actions/serviceActions.js";
import { cleanSuggestionService } from "../../../redux/actions/services/getServices.js";

export default function Postularse({ imageurl, firstName, lastName, id }) {
  const dispatch = useDispatch();
  const handleApply = () => {
    dispatch(applyToService(id));
  };

  const handleCleanDetailService = () => {
    dispatch(cleanServiceById());
    dispatch(cleanSuggestionService());
  };

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
        {/* <div className="flex justify-center p-3">
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div> */}
        <div className="flex justify-center p-2">
          <button
            className="bg-blue-500 w-[80%] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={handleApply}
          >
            Postularme
          </button>
        </div>

        <div className="flex justify-center p-2 ">
          <button className="bg-transparent w-[80%] hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <i className="fa-regular fa-heart"></i> Guardar en mi lista
          </button>
        </div>
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
