import { useSelector } from "react-redux";

export default function ModalJob({ job, setModal }) {
  const jobById = useSelector((state) => state.jobById);

  return (
    <>
      <h1>Descripción: {jobById.description}</h1>
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        Cancel
      </button>
    </>
  );
}
