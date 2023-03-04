import { useSelector } from "react-redux";
import Loading from "../../../components/loading/Loading";

import { useDispatch } from "react-redux";
import { cleanJobById } from "../../../redux/actions/jobActions";

export default function ModalJob({ setModal }) {
  const jobById = useSelector((state) => state.jobById);
  const dispatch = useDispatch();

  return (
    <>
      {jobById.name ? (
        <>
          <h1 className=" text-xl font-extrabold text-blue-900 lg:text-3xl">
            Description
            <hr></hr>
          </h1>

          <div className="gap-4 bg-blue-100 rounded-xl p-4">
            <h1 className="text-xs lg:text-sm">
              {jobById.name}: {jobById.description}
            </h1>
            <button
              onClick={() => {
                setModal(true);
                dispatch(cleanJobById());
              }}
              class="bg-green-500 w-20 mt-3 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-xs lg:text-sm"
            >
              Return
            </button>
          </div>
        </>
      ) : (
        <>
          <div role="status" className="flex items-center justify-center m-5">
            <Loading />
            {jobById.name}
          </div>
        </>
      )}
    </>
  );
}
