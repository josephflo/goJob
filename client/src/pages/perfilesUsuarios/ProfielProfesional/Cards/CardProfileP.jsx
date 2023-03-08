import React from "react";


export default function CardProfileP({
  id,
  provincia,
  ciudad,
  direccion,
  firstName,
  lastName,
  email,
  role,
  rating_promedio,
}) {
  return (
   
        <div key={id} className="flex flex-col justify-center items-center h-[100vh]">
            <div className="relative flex flex-col items-center  w-[700px] max-w-[95%] mx-auto bg-gray-200 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div className="mt-2 mb-8 w-full">
                    <h4 className="px-2 text-xl font-bold text-white dark:text-white h-30 overflow-hidden border-solid-gray-300  p-4 bg-blue-500 ">
                    Información General
                    </h4>
                    <p className="text-base h-20 font-medium text-navy-700 dark:text-white ">
                    Usuario {role}
                    </p>
                </div> 
                <div className="grid grid-cols-2 gap-4 px-2 w-full">
                    <div className="flex flex-col items-start h-20 justify-center  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Nombre</p>
                    {  lastName === 'sin apellido' ?
                    (<p className="text-base h-20 font-medium text-navy-700 dark:text-white">
                         {firstName}  
                    </p>)
                    : (<p className="text-base h-20 font-medium text-navy-700 dark:text-white">{firstName} {lastName}</p>)
                     }
                    </div>

                    <div className="flex flex-col justify-center h-20  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Lugar de residencia</p>
                    { provincia || ciudad || direccion ?
                    (<p className="text-base font-medium text-navy-700 dark:text-white">
                        {provincia}, {ciudad}, {direccion}
                        </p>)
                    : (<p className="text-base font-medium text-navy-700 dark:text-white">Sin datos</p>)
                     }
                    </div>

                    <div className="flex flex-col items-start justify-center  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                        {email}
                    </p>
                    </div>

                    <div className="flex flex-col justify-center  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Rating</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                       {rating_promedio}
                    </p>
                    </div>
                    
                </div>
            </div>  
            
        </div>
          
    
   
  );
}
