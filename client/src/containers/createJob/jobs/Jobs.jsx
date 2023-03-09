import { useDispatch } from "react-redux";
import { deleteJob } from "../../../redux/actions/jobActions";
import { FaPencilAlt } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { MdOutlineDescription } from "react-icons/md";

export default function Jobs({ jobs, handleUpdate, handleModal }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // Swal.fire({
    //   title: "¿Estas seguro de Eliminar este Job?",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Si, Eliminalo!",
    // }).then((result) => {
    //   console.log(result.value);
    //   if (result.value) {
    //     dispatch(deleteJob(id));
    //     // Swal.fire("Eliminado!", "El producto fue Eliminado.", "success");
    //   }
    // });
    dispatch(deleteJob(id));
    window.location.reload(true);
  };

  return (
    <>
      {jobs.map((job) => {
        return (
          <tr
            key={job.id}
            class="bg-blue-100 border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="col"
              className="px-6 py-3 text-center text-black font-semibold  text-xs lg:text-base"
            >
              {job.name}
            </th>
            <th scope="col" className="py-3 text-center">
              <button
                className="ml-1 mx-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={() => handleDelete(job.id)}
              >
                <FiTrash2 />
              </button>
              <button
                className="ml-1 mx-1 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={() => handleUpdate(job)}
              >
                <FaPencilAlt />
              </button>
              <button
                className="ml-1 mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={() => handleModal(job)}
              >
                <MdOutlineDescription />
              </button>
            </th>
          </tr>
        );
      })}
    </>
  );
}
