import React, { useState } from 'react'


const FormCreateProfessional = ({changeInput,handleSubmit}) => {
  //const { user, isAuthenticated, isLoading } = useAuth0();

  return (
          <form 
          onSubmit={handleSubmit}
          id='professionalForm'
          className="space-y-1">
            <div className="grid grid-cols-1 lg:gap-3">
              
              
              <div>
                <label
                  htmlFor="provincia"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  Ingrese Provincia
                </label>
                <input
                  type="text"
                  name="provincia"
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Provincia"
                  onChange={changeInput}
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  Ingrese Ciudad
                </label>
                <input
                  type="text"
                  name="ciudad"
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ciudad"
                  onChange={changeInput}
                />
              </div>
              <div>
                <label
                  htmlFor="direccion"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  Ingrese Dirección
                </label>
                <input
                  type="text"
                  name="direccion"
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Dirección"
                  onChange={changeInput}
                />
              </div>
              <div>
                <label
                  htmlFor="Phone"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  Ingrese número de telefono
                </label>
                <input
                  type="text"
                  name="phone"
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Telefono - Cel"
                  onChange={changeInput}
                />
              </div>
            </div>
            <div>
              <button
                className="mt-3 w-[80%] py-3 bg-blue-900 text-white"
                type='submit'
                form='professionalForm'
              >
                Crear profesional
              </button>
            </div>
          </form>
  )
}

export default FormCreateProfessional
