import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getService } from "../../redux/actions/actions";

export default function Services() {
  const service = useSelector((state) => state.service);

  const dispatch = useDispatch();

  const handlePrev = () => {
    dispatch(getService(service.service.previousPage, 5));
  };
  const handleNext = () => {
    dispatch(getService(service.service.nextPage, 5));
  };

  return (
    <>
      <h1>Services</h1>

      <button
        onClick={() => {
          handlePrev();
        }}
      >
        prev
      </button>
      <button
        onClick={() => {
          handleNext();
        }}
      >
        next
      </button>

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
