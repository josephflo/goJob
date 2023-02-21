import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteJob, updateJob } from "../../redux/actions/actions";
export default function Jobs({ jobs, handleUpdate, handleModal }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteJob(id));
    window.location.reload(true);
  };

  //   const handleUpdate = (id) => {
  //     // dispatch(updateJob(id));
  //   };

  return (
    <>
      {jobs.map((job) => {
        return (
          
          <tr key={job.id}>
            <th scope="row">{job.id}</th>
            <td>
              <button type="submit" onClick={() => handleModal(job)}>
                {job.name}
              </button>
            </td>
            <td>
              <button type="submit" onClick={() => handleDelete(job.id)}>
                Delete
              </button>
              <button type="submit" onClick={() => handleUpdate(job)}>
                Update
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
