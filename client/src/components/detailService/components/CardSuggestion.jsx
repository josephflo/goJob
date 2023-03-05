import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { userFormBackground } from "../../../assets";
import {
  cleanServiceById,
  getServiceById,
} from "../../../redux/actions/serviceActions";

export default function CardSuggestion({ suggestion, id }) {
  const dispatch = useDispatch();

  const handleCleanDetailService = () => {
    dispatch(cleanServiceById());
    dispatch(getServiceById(suggestion.id));
  };

  return (
    <>
      <Link
        to={`/service/detail/${suggestion.id}`}
        onClick={handleCleanDetailService}
      >
        {/* <Link to={`/`}> */}
        {/* <div className="gap-4 bg-blue-100 rounded-xl p-4"> */}
        <div
          className={
            id === suggestion.id
              ? "gap-4 bg-blue-300 rounded-xl p-4"
              : "gap-4 bg-blue-50 rounded-xl p-4"
          }
        >
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2 flex">
              {suggestion.imageServiceUrl === "sin foto" ? (
                <img
                  src={userFormBackground}
                  className="object-cover h-full object-left"
                  alt=""
                />
              ) : (
                <img src={suggestion.imageServiceUrl} alt="" className="p-2 " />
              )}
            </div>
            <div className="col-span-3">
              <h1>{suggestion.tittle}</h1>
              <h1>{suggestion.provincia}</h1>
              <h1>$ {suggestion.presupuesto}</h1>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
