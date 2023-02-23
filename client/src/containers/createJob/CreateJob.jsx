import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Jobs from "./jobs/Jobs";
import ModalJob from "./modalJob/ModalJob";
import {
  addJob,
  getJobById,
  getJobs,
  updateJob,
} from "../../redux/actions/jobActions";

export default function CreateJob() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

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

    alert("Job craeted correctly! :D");
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
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <h1 className="mt-6 text-3xl font-extrabold text-blue-900">
          Job Section
        </h1>
        <hr></hr>
        <form onSubmit={handleSubmit} className="space-y-1">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
            >
              Job's name:
            </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={changeInput}
              className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Insert a new Job..."
            />
          </div>
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
            >
              Description:
            </label>
            <input
              type="text"
              name="description"
              value={input.description}
              onChange={changeInput}
              className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Insert a description..."
            ></input>
          </div>
          <div>
            {updateState ? (
              <>
                <button
                  type="submit"
                  name="btn"
                  class="bg-green-500 m-3 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add
                </button>
              </>
            ) : (
              <div className="p-3">
                <button
                  class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  name="btn"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    setModal(false);
                  }}
                  name="btn"
                  class="bg-red-500 ml-3 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </form>
        <hr></hr>
        <h1 className="mt-6 text-3xl font-extrabold text-blue-900">
          List of Jobs
        </h1>

        <table className="w-full text-sm text-left text-black-500 dark:text-gray-400 mb-4">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3">
                Job (click text for more)
              </th>
              <th scope="col" class="px-6 py-3 mx-auto">
                Actions
              </th>
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
            <button class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-grey-700 font-semibold">
              Volver
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
