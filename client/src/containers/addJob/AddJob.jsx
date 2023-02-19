import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Jobs from "../../components/jobs/Jobs";
import ModalJob from "../../components/jobs/ModalJob";
import {
  addJob,
  getJobById,
  getJobs,
  updateJob,
} from "../../redux/actions/actions";

export default function AddJob() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const jobById = useSelector((state) => state.jobById);

  const [input, setInput] = useState({
    name: "",
    description: "",
  });
  const [updateState, setUpdateState] = useState(true);
  const [id, setId] = useState(0);
  const [modal, setModal] = useState(true);
  const [jobId, setJobId] = useState({});
  useEffect(() => {
    dispatch(getJobs());
  }, []);

  const changeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(input);
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateState) {
      dispatch(addJob(input));
      setInput({
        name: "",
        description: "",
      });
    } else {
      dispatch(updateJob(id, input));
      setInput({
        name: "",
        description: "",
      });
    }

    // alert("Job craeted correctly! :D");
    setUpdateState(true);
    window.location.reload(true);
  };

  const handleUpdate = (job) => {
    console.log(job);
    setInput({
      name: job.name,
      description: job.description,
    });
    setId(job.id);
    setUpdateState(false);
  };

  const handleModal = (job) => {
    setModal(false);
    dispatch(getJobById(job.id));
  };
  return (
    <>
      <h1>Job Section</h1>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={changeInput}
          />
        </div>
        <div>
          <label>description:</label>
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={changeInput}
          ></input>
        </div>
        <div>
          {updateState ? (
            <>
              <button type="submit" name="btn">
                Add
              </button>
            </>
          ) : (
            <>
              <button type="submit" name="btn">
                Update
              </button>
              <button
                onClick={() => {
                  setModal(false);
                }}
                name="btn"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
      <hr></hr>
      {/* <div>
        <h1>Show Jobs</h1>
        {jobs ? jobs.map((job) => <h1>{job.name}</h1>) : <h1>No Jobs</h1>}
      </div> */}
      <table className="table mb-4">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Job</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          <Jobs
            jobs={jobs}
            handleUpdate={handleUpdate}
            handleModal={handleModal}
          />
        </tbody>
      </table>
      <hr></hr>
      {modal ? (
        <></>
      ) : (
        <>
          <ModalJob job={jobId} setModal={setModal} />
        </>
      )}

      <div class="mt-3">
        <NavLink to="/">
          <button class="border-2 border-red-700 bg-red-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-red-700 font-semibold">
            Volver
          </button>
        </NavLink>
      </div>
    </>
  );
}
