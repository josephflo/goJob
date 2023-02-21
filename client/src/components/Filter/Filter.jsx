import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobs, filterByJobs, orderByName, getUsers } from "../../redux/actions/actions";

function Filter() {
  const jobs = useSelector((state) => state.jobs);
  const users= useSelector((state) => state.users)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
     dispatch(getUsers());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault(e);
    dispatch(getJobs()) ;
         dispatch(getUsers());

  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value))
  }
  function handleFilterJobs(e){
        dispatch(filterByJobs(e.target.value))
    }

  return (
    <div className="grid grid-cols-3">
      <div className="flex col-span-1  ">
        
        <select className="absolute w-56 h-14 left-20 top-56 bg-white rounded-3xl text-center" onClick={e => handleFilterJobs(e)}>
          <option disabled selected value="default">
            Areas de trabajos
          </option>

          {jobs?.map((j) => {
            return( 
            <option key={j.id} value='all'>{j.name}</option>);
           
          })}
        </select>
      </div>
      <div className="flex col-span-1 ">
        <select className="absolute w-56 h-14 left-96 top-56 bg-white rounded-3xl text-center">
          <option disabled selected value="default">  
            Ciudad
          </option>
        </select>
      </div>
      <div className="flex col-span-1 ">
        <select className="absolute w-56 h-14 left-2/4 top-56 bg-white rounded-3xl text-center" onChange={e => handleSort(e)}>
          <option >  
           Alfabetico
          </option>
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
        </select>
      </div>
      
      <div className="flex col-span-1 ">
        <button
          
          className=" absolute w-56 h-14 left-3/4 top-56 bg-white rounded-3xl "
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Resetear filtros
        </button>
      </div>
    </div>
  );
}

export default Filter;
