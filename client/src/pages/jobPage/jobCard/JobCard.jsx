import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterModel } from "../../../redux/actions/serviceActions";
import { configFilterUserPut } from "../../../redux/actions/users/profesionales";

// import { filterByJobs } from "../../redux/actions/actions";

function JobCard({ id, name }) {
  const dispatch = useDispatch();

  let configFilterUser = useSelector((state) => state.configFilterUser);
  let modifyStateFilter = (idProfesion) => {
    dispatch(
      configFilterUserPut({
        ...configFilterUser,
        job: idProfesion,
        name: "",
        page: 1,
        provincia: "Buenos Aires",
        ciudad: false,
        dias: false,
        horario: false,
        role: "professional",
        state: true
      })
    );
  };

  return (
    <div className="p-4 flex items-center justify-center">
        <button
          className="relative w-36 h-36 bg-blue-50 rounded-full flex justify-center items-center text-center p-5 shadow-xl transform 
          transition duration-500 hover:bg-blue-100 hover:scale-105"
        >
          <Link to={"/professional"} onClick={() => modifyStateFilter(id)} className="justify-center p-8">
            <div  >{name}</div>
          </Link>
        </button>
    </div>
  );
}

export default JobCard;
