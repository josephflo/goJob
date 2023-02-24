import React from "react";
import { useSelector } from "react-redux";
import FilterServiceCard from "./FilterServiceCard";

export default function FilterService() {
  const filters = useSelector((state) => state.filter);

  return (
    <>
      {filters.length !== 0 ? (
        <>
          {filters.map((filter) => (
            <FilterServiceCard filter={filter} />
          ))}
        </>
      ) : (
        <>
          <h1>No hay objetos</h1>
        </>
      )}
    </>
  );
}
