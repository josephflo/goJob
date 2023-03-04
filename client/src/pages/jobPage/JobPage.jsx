import React from "react";
import { useSelector } from "react-redux";
import JobCard from "./jobCard/JobCard";

export default function JobPage() {
  const jobs = useSelector((state) => state.jobs);

  return (
    <div>
      <h1 className=" text-5xl text-black mx-auto pt-20 text-center">
        ¿Qué es lo que buscas?
      </h1>
      <div className="py-24 flex flex-wrap items-center justify-center ">
        {jobs?.length > 0 ? (
          jobs?.map((e) => {
            return (
              <JobCard
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
