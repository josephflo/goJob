import JobCard from "./JobCard";
import styles from "./job.modules.css";

export default function Jobs({ jobs, handleJob }) {
  return (
    // <div>
    //   <h1 className=" text-5xl text-black mx-auto pt-20 text-center">
    //     Qué desempeñas
    //   </h1>
    //   <div className="py-24 flex flex-wrap items-center justify-center ">
    //     {jobs?.length > 0 ? (
    //       jobs?.map((e) => {
    //         return (
    //           <JobCard
    //             id={e.id}
    //             key={e.id}
    //             name={e.name}
    //             description={e.description}
    //             handleJob={handleJob}
    //           />
    //         );
    //       })
    //     ) : (
    //       <p>ups! no hay oficios</p>
    //     )}
    //   </div>
    // </div>
    <>
      <div className="py-24 items-center justify-center ">
        <h1 className="pb-5 text-5xl text-black mx-auto pt-20 text-center">
          {" "}
          Qué desempeñas{" "}
        </h1>
        <div className="p-10">
          {jobs.map((job) => (
            <label key={job.name}>
              {job.name}
              <input
                type="checkbox"
                name="jobs"
                value={job.id}
                onChange={handleJob}
              ></input>
              <span></span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
