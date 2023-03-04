import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Jobs from "./jobs/Jobs";
import ModalJob from "./modalJob/ModalJob";
import {
  addJob,
  cleanJobById,
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
    dispatch(cleanJobById(job.id));
    dispatch(getJobById(job.id));
  };

  const handleCancel = () => {
    setUpdateState(!updateState);
    setInput({
      name: "",
      description: "",
    });
  };

  return (
    <>
      {/* <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"> */}
      <div className="  gap-10  flex-1 flex flex-col lg:p-5">
        <div className="p-8 bg-white rounded-xl flex flex-col  gap-4 drop-shadow-2xl">
          <h1 className=" text-xl  font-extrabold text-blue-900 lg:text-3xl">
            List of Jobs
            <hr></hr>
          </h1>

          <div className="gap-4 bg-blue-100 rounded-xl p-4">
            <table
              id="users"
              class="w-full mt-4 text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead class="text-xs lg:text-sm text-center text-white bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
                <tr className="">
                  <th
                    data-priority="1"
                    className="w-2/5 text-xs lg:text-base p-2"
                  >
                    Name
                  </th>
                  <th data-priority="2" className="w-3/5 text-xs lg:text-base">
                    Accion
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
          </div>
        </div>
      </div>

      <div className="  gap-10  flex-1 flex flex-col lg:p-5">
        {/* <hr></hr> */}
        <div className="p-8 bg-white rounded-xl flex flex-col  gap-4 drop-shadow-2xl">
          <h1 className="text-xl font-extrabold text-blue-900 lg:text-3xl">
            Job Section
            <hr></hr>
          </h1>
          <form onSubmit={handleSubmit} className="space-y-1">
            <div className="gap-4 bg-blue-100 rounded-xl p-4 mb-8">
              <label
                htmlFor="firstName"
                className="block text-xs font-bold mt-2 lg:mt-0 text-gray-700 lg:text-sm"
              >
                Job's name:
              </label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={changeInput}
                className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline  text-xs lg:text-sm"
                placeholder="Insert a new Job..."
              />
              {/* </div>
            <div className="gap-4 bg-blue-100 rounded-xl p-4"> */}
              <label
                htmlFor="firstName"
                className="block pt-5 text-xs font-bold mt-2 lg:mt-0 text-gray-700 lg:text-sm"
              >
                Description:
              </label>
              <input
                type="text"
                name="description"
                value={input.description}
                onChange={changeInput}
                className="mt-2 mb-4 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline  text-xs lg:text-sm"
                placeholder="Insert a description..."
              ></input>
              {/* </div> */}
              {/* <div> */}
              {updateState ? (
                <>
                  <button
                    type="submit"
                    name="btn"
                    className="bg-green-500 mt-3 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  text-xs lg:text-sm"
                  >
                    Add
                  </button>
                </>
              ) : (
                <div className="">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded  text-xs lg:text-sm"
                    type="submit"
                    name="btn"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      handleCancel();
                    }}
                    type="button"
                    name="btn"
                    className="bg-red-500 ml-3 hover:bg-red-700 text-white font-bold py-2 px-4 rounded  text-xs lg:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </form>
          <>
            {modal ? (
              <></>
            ) : (
              <>
                <ModalJob job={jobId} setModal={setModal} />
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
}
