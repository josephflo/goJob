import React from "react";
import { Link } from "react-router-dom";

export function Carduser({
  firstName,
  lastName,
  role,
  provincia,
  ciudad,
  imageurl,
  direccion,
  jobs,
  id,
  rating,
  phone
}) {




  return (
    <Link
      to={`dashboard/user/detail/${id}`}
      className="bg-white rounded-3xl mb-4 p-8 flex gap-8 w-full shadow-lg hover:border-blue-400 border-2 transition-all"
    >
      <div className="w-[10%] flex items-center justify-center">
        {/* imagen */}
        <img src={imageurl} className="rounded-full" />
      </div>
      {/* datos */}
      <div className="w-[70%] ">
        <h1 className="text-xl flex items-center gap-4 mb-2">
          {firstName + " " + lastName}
          <span className="text-xs py-1 px-2 bg-blue-200 font-bold text-blue-600">
            {role}
          </span>
            {jobs.map((job, index) => (
             <span key={index} className="text-xs py-1 px-2 bg-green-200 font-bold text-green-600">
              {job}
             </span>
            ))}  
        </h1>
        <p className="text-gray-500 text-md">
          {provincia + " " + ciudad + " " + direccion}
        </p>
      </div>
      <div className="w-[20%] flex flex-col items-end">
        {/* servicios y fecha */}
        <div>
          <h3 className="text-xl text-gray-500 mb-2">{"Rating"+" "+rating }</h3>
          <p className="text-gray-500">{phone}</p>
        </div>
      </div>
    </Link>
  );
}
