import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../redux/actions/actions";
import Navbar from "../navbarPortada/NavBar";
import CardJobs from "./CardJobs";

function Job() {
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);
  
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=" flex-wrap w-[30%] mx-auto " >
        {jobs?.length > 0 ? (
          jobs?.map((e) => {
            return (
              <CardJobs
                id={e.id}
                key={e.id}
                name={e.name}
                description={e.description}
              />
            );
          })
        ) : (
          <p>ups! no hay oficios</p>
        )}
      </div>
    </div>
  );
}

export default Job;
