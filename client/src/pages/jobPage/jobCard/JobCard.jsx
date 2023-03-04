import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterModel } from "../../../redux/actions/serviceActions";
import { configFilterUserPut } from "../../../redux/actions/users/profesionales";

// import { filterByJobs } from "../../redux/actions/actions";

function JobCard({ id, name }) {
  const dispatch = useDispatch();

  const handleJob = () => {
    dispatch(filterModel(1, 10, id));
  };

  let configFilterUser = useSelector((state) => state.configFilterUser);
  let modifyStateFilter = (idProfesion) => {
    dispatch(
      configFilterUserPut({
        ...configFilterUser,
        job: idProfesion,
        name: "",
        provincia: "Buenos Aires",
        ciudad: false,
        dias: false,
        horario: "mañana",
        role: "professional",
      })
    );
  };

  return (
    <div className="p-4">
      <Link onClick={() => modifyStateFilter(id)} to={"/professional"}>
        <button
          className="relative w-36 h-36 bg-blue-50 rounded-full flex justify-center items-center text-center p-5 shadow-xl transform 
          transition duration-500 hover:bg-blue-100 hover:scale-105"
          onClick={handleJob}
        >
          <div className="justify-center">
            <div>{name}</div>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default JobCard;
