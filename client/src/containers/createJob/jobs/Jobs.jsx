import { useDispatch } from "react-redux";
import { deleteJob } from "../../../redux/actions/jobActions";

export default function Jobs({ jobs, handleUpdate, handleModal }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteJob(id));
    window.location.reload(true);
  };

  return (
    <>
      {jobs.map((job) => {
        return (
          <tr key={job.id}>
            <td scope="col" class="px-6 py-3">
              <button type="submit" onClick={() => handleModal(job)}>
                {job.name}
              </button>
            </td>
            <td scope="col" class="px-6 py-3">
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={() => handleDelete(job.id)}
              >
                Delete
              </button>
              <button
                class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={() => handleUpdate(job)}
              >
                Update
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
