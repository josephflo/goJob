import { useSelector } from "react-redux";

export default function ModalJob({ setModal }) {
  const jobById = useSelector((state) => state.jobById);

  return (
    <>
      <h1 className="mt-6 text-3xl font-extrabold text-blue-900">
        Description
      </h1>
      <h1> - {jobById.description}</h1>
      <button
        onClick={() => {
          setModal(true);
        }}
        class="bg-green-500 w-40 m-3 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Return
      </button>
    </>
  );
}
