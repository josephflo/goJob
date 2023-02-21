import React from "react";

function CardJobs({ id, name, description }) {
  return (
    <div> 
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div >
          <h2 class="text-gray-800 text-3xl font-semibold">{name}</h2>
          <p class="mt-2 text-gray-600">{description}</p>
        </div>
      <div class="flex justify-end mt-4">
        <a href="/" class="text-xl font-medium text-indigo-500">
          Go-Job
        </a>
      </div>
    </div>
    </div>
  );
}

export default CardJobs;
