import React from "react";
import { Link } from "react-router-dom";
// import { filterByJobs } from "../../redux/actions/actions";

function JobCard({ id, name }) {
  const handleJob = () => {
    // dispatch(filterByJobs(id));
  };

  return (
    <div className="p-4">
      <Link to={`/job/${id}`}>
        <button
          class="relative w-36 h-36 bg-blue-50 rounded-full flex justify-center items-center text-center p-5 shadow-xl transform 
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
