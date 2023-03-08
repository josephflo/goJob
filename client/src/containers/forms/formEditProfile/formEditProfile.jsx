import React, { useState } from "react"; 
import { useDispatch, useSelector } from "react-redux"; 
import { Link } from "react-router-dom"; 
import { updateUser } from "../../../redux/actions/userActions"; 
import { provincias } from "../../../constants/ciudadesObject"; 
import SideBarComun from "../../../pages/perfilesUsuarios/ProfileComun/SideBarComun";
import SideBar from "../../../pages/perfilesUsuarios/ProfielProfesional/SideBar";
 
 
export default function FormEditProfile() { 
 const dispatch = useDispatch(); 

  const users = useSelector((state) => state.userLogin); 

  const [provState, setProvState] = useState(""); 
  const [ciudState, setCiudState] = useState(); 
 
  const handleOption = (e) => { 
    const value = e.target.value; 
    setProvState(value); 
    setCiudState(provincias.find((p) => p.name === value).ciudad); 
  } 
 
  const [input, setInput] = useState({ 
    firstName: '', 
    lastName: '', 
    provincia: '', 
    ciudad: '',  
    direccion: '', 
  }); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(e); 
    dispatch(updateUser(input)); 
    setInput({ 
    firstName: '', 
    lastName: '', 
    provincia: '', 
    ciudad: '', 
    direccion: '', 
    }) 
  } 
 
  const changeInput = (e) => { 
   setInput({ 
    ...input, 
    [e.target.name] : e.target.value  
   }) 
   handleOption(e);
  }; 
 
 
  return ( 
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6"> 
    { users?.role === 'comun' ? (<SideBarComun /> ) : (<SideBar /> ) }
      
      <div className="col-span-5"> 
      <div className=" bg-gray-100 ">
      <div  className="flex flex-col justify-center items-center h-[100vh]"> 
        <div className="relative flex flex-col items-center  w-[700px] max-w-[95%] mx-auto bg-gray-200 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3"> 
          <div className="mt-2 mb-8 w-full"> 
            <h4 className="px-2 text-xl font-bold text-white dark:text-white h-30 overflow-hidden border-solid-gray-300  p-4 bg-blue-500 "> 
              Modificar Datos Personales 
            </h4> 
          </div> 
 
          <div className="grid grid-cols-2 gap-4 px-2 w-full"> 

            <div className="flex flex-col items-start h-21 justify-center  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"> 
              <label 
                  htmlFor="nombre" 
                  className="text-sm text-gray-600" 
                >Nombre</label> 
                <input 
                  type="text" 
                  name="firstName" 
                  value={input.firstName} 
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline" 
                  placeholder="Nombre" 
                  onChange={changeInput} 
                /> 
            </div> 

            <div className="flex flex-col items-start h-21 justify-center  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"> 
              <label 
                  htmlFor="nombre" 
                  className="text-sm text-gray-600" 
                >Apellido</label> 
                <input 
                  type="text" 
                  name="lastName" 
                  value={input.lastName} 
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline" 
                  placeholder="Apellido" 
                  onChange={changeInput} 
                /> 
            </div> 
 
            <div className="flex flex-col items-start h-21 justify-center  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <label
                  htmlFor="direccion"
                  className="text-sm text-gray-600" 
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
            
       
            <div className="flex flex-col items-start h-21 bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <form action="#">
                  <label
                    htmlFor="direccion"
                    className="text-sm text-gray-600" 
                  >Ingrese Provincia
                  </label>
                  <select
                    name="provincia"
                    className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={changeInput}
                  >
                    <option value="" selected>
                      Selecciona una provincia
                    </option>
                    {provincias?.map((provincia) => (
                      <option value={provincia.name} key={provincia.id}>
                        {provincia.name}
                      </option>
                    ))}
                  </select>
                  <input type="submit" value="" />
                </form>
              </div>
              {provState.length ? (
           <div className="flex flex-col items-start h-21  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <form action="#">
                    <label
                      htmlFor="direccion"
                      className="text-sm text-gray-600" 
                    >Ingrese Ciudad
                    </label>
                    <select
                      name="ciudad"
                      className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={changeInput}
                    >
                      <option value="" selected>
                        Selecciona una ciudad
                      </option>
                      {ciudState?.map((provincia) => (
                        <option value={provincia.name} key={provincia.id}>
                          {provincia.name}
                        </option>
                      ))}
                    </select>
                    <input type="submit" value="" />
                  </form>
                </div>
                ) : (
                <></>
              )}
                </div> 
               

 
            <div className="grid grid-cols-2 gap-4 px-2 w-full" > 
            <div>
              <Link to={`/profile/${users.id}`}> 
                <button className="h-13 py-2  gap-4 bg-blue-500 p-4 text-white  mt-2 w-[80%]  font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded " 
                onClick={handleSubmit} 
                typr='submit'> 
                  Guardar 
                </button> 
              </Link> 
            </div> 
            <div> 
              <Link  to={`/${users.role === "comun" ? 'profile' : 'myprofilep'}/${users.id}` }> 
                <button className="bg-transparent mt-2 w-[80%]  hover:bg-orange-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded"> 
                  Volver 
                </button> 
              </Link> 
              </div>
            </div>
          </div> 
          </div> 
        </div> 
      </div> 
      </div> 
    
  ); 
}