import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getJobs,
  filterByJobs,
  orderByName,
  getUsers,
  serviceFilter,
} from "../../redux/actions/actions";

function Filter() {
  const jobs = useSelector((state) => state.jobs);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  // const [change, setChange] = useState("default");

  // States
  const [state, setState] = useState({
    check: "default",
  });
  const [state_2, setState_2] = useState({
    check_2: "default_2",
  });
  let { check } = state;
  let { check_2 } = state_2;

  useEffect(() => {
    dispatch(getJobs());
    dispatch(serviceFilter(state_2.check_2));
    dispatch(orderByName(state.check));
    // dispatch(filterByJobs(state_2.check_2));
  }, [state, state_2]);

  // function handleClick(e) {
  //   dispatch(getJobs());
  // }

  // Order
  const handleOrder = (e) => {
    let { name, value } = e.target;
    setState({ [name]: value });
  };

  // Filter
  const handleFilter = async (e) => {
    let { name, value } = e.target;
    console.log(value);
    setState_2({ [name]: value });
  };

  // function handleSort(e) {
  // e.preventDefault(e);
  // setChange(e.target.value);
  // console.log(change);
  // window.location.reload();
  // }
  // function handleFilterJobs(e) {
  //   dispatch(filterByJobs(e.target.value));
  // }

  return (
    <div className="grid grid-cols-4">
      {/* <select
          className=" w-56 h-14 left-20 top-56 bg-white rounded-3xl text-center" 
         onClick={(e) => handleFilterJobs(e)}
         >
        */}
      {/* <option disabled selected value="default">
            Areas de trabajos
          </option> */}
      <div className="col-span-2">
        <label>Filter:</label>
        <hr></hr>
        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="test4"
            type="radio"
            name="check_2"
            value="default_2"
            checked={check_2 === "default_2"}
            onChange={handleFilter}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="test4">Default</label>
        </div>
        <span>By Job</span>
        {jobs?.map((j) => {
          return (
            // // <option key={j.id} value="all">
            // //   {j.name}
            // // </option>
            <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id={j.id}
                type="radio"
                name="check_2"
                value={j.id}
                checked={check_2 == j.id}
                // value={j.name}
                // checked={check_2 === j.name}
                onChange={handleFilter}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="test"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {j.name}
              </label>
            </div>
          );
        })}
      </div>
      {/* </select> */}
      {/* <div className="flex col-span-1 ">
      <select className="absolute w-56 h-14 left-96 top-56 bg-white rounded-3xl text-center">
      <option disabled selected value="default">
      Ciudad
      </option>
      </select>
    </div> */}
      {/* <div className="flex col-span-1 ">
        <select
        className="absolute w-56 h-14 left-2/4 top-56 bg-white rounded-3xl text-center"
        onChange={(e) => handleSort(e)}
        >
          <option disabled selected value="default">
            Alfabetico
            </option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            </select>
          </div> */}
      <div className="col-span-2">
        <label>Order:</label>
        <hr></hr>
        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="test0"
            type="radio"
            name="check"
            value="default"
            checked={check === "default"}
            onChange={handleOrder}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="test0"
            class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Default
          </label>
        </div>
        <span>By Name</span>
        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="test"
            type="radio"
            name="check"
            value="A-Z"
            checked={check === "A-Z"}
            onChange={handleOrder}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="test"
            class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            A - Z
          </label>
        </div>
        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="test1"
            type="radio"
            name="check"
            value="Z-A"
            checked={check === "Z-A"}
            onChange={handleOrder}
          />
          <label
            htmlFor="test1"
            class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Z - A
          </label>
        </div>
        {/* </div> */}
        {/* <div className="flex col-span-1 ">

        <button
        className=" absolute w-56 h-14 left-3/4 top-56 bg-white rounded-3xl "
        onClick={(e) => {
          handleClick(e);
        }}
        >
        Resetear filtros
        </button>
      
      */}
      </div>
    </div>
  );
}

export default Filter;
