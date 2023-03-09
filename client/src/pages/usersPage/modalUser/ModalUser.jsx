import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../../components/loading/Loading";
import { cleanUserDetail } from "../../../redux/actions/userActions";

export default function ModalUser() {
  const detail = useSelector((state) => state.userDetail);
  const dispatch = useDispatch();

  const handleReturn = () => {
    dispatch(cleanUserDetail());
  };

  return (
    <>
      {Object.entries(detail).length === 0 ? (
        <Loading />
      ) : (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto m-20">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Detail of {detail.firstName} {detail.lastName} - id #{detail.id}
              </h3>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-2">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Telefono : {detail.phone}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                email : {detail.email}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Rol : {detail.role}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Direccion : {detail.provincia} / {detail.ciudad} /{" "}
                {detail.direccion}
              </p>
              {/* <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Jobs:
              </p>
              <ul className="list-disc">
              {detail.Jobs.map((job) => (
                <li className="mx-6 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {job.name}
                </li>
                ))}
            </ul> */}
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <Link
                to="/users"
                type="button"
                onClick={handleReturn}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Volver
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
