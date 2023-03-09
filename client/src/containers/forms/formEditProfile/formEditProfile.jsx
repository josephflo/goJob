import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPortada from "../../../components/navBar/navBarPortada/NavBarPortada";
import { createService } from "../../../redux/actions/serviceActions";
import { getJobs } from "../../../redux/actions/jobActions";
import { provincias } from "../../../constants/ciudadesObject";
import { convertirProvinciasAObjeto } from "../../../helpers/convertProvinciasToObj";
import { useFormik } from "formik";

import { FormUpdateUserSchema } from "./components/FormUpdateUserSchema";
import { putUser } from "../../../redux/actions/userActions";
import { Link, useNavigate } from "react-router-dom";
function FormEditProfile() {
  const dispatch = useDispatch();
  const jobs_ = useSelector((state) => state.jobs);

  let provinciasObj = convertirProvinciasAObjeto(provincias);

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  const navigate = useNavigate();

  //estados para barras de menu
  //Estados para menu Jobs
  const {
    values,
    setValues,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      provincia: "Buenos Aires",
      ciudad: provinciasObj["Buenos Aires"][0],
      direccion: "",
    },
    validationSchema: FormUpdateUserSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(putUser(values));
      console.log(values);
      window.alert("Se actualizaron tus datos");
      resetForm();
      navigate("/");
    },
  });

  let handleOptionFilter = (event) => {
    let propiedadFilter =
      event.target.options[event.target.selectedIndex].getAttribute("name");
    console.log(propiedadFilter);
    // .toString();
    let value = event.target.value;

    let newConfig = {};
    if (propiedadFilter == "jobs") {
      newConfig = {
        // ...input_2,
        ...values,
        [propiedadFilter]: [Number(value)],
      };
    } else {
      newConfig = {
        // ...input_2,
        ...values,
        [propiedadFilter]: value,
      };
    }
    setValues(newConfig);
    // setInput_2(newConfig);
  };

  const users = useSelector((state) => state.userLogin);

  useEffect(() => {}, [values]);

  return (
    <div>
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]">
          <div className="mt-2 mb-8 w-full">
            <h4 className="px-2 text-xl font-bold text-white dark:text-white h-30 overflow-hidden border-solid-gray-300  p-4 bg-blue-500 ">
              Completa con tus Datos Personales
            </h4>
          </div>
          <div className="mt-6">
            <form className="space-y-1" onSubmit={handleSubmit}>
              <div className="flex flex-col items-start h-21 justify-center  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <label htmlFor="nombre" className="text-sm text-gray-600">
                  Nombre
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onBlur={handleBlur}
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nombre"
                  onChange={handleChange}
                />
              </div>
              {errors.firstName && touched.firstName ? (
                <p className="text-red-500 text-xs">{errors.firstName}</p>
              ) : null}

              <div className="flex flex-col items-start h-21 justify-center  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <label htmlFor="nombre" className="text-sm text-gray-600">
                  Apellido
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onBlur={handleBlur}
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Apellido"
                  onChange={handleChange}
                />
              </div>
              {errors.lastName && touched.lastName ? (
                <p className="text-red-500 text-xs">{errors.lastName}</p>
              ) : null}

              {/* Barra de eleccion provincia*/}
              <div>
                <label htmlFor="direccion" className="text-sm text-gray-600">
                  Ingrese provincia
                </label>
                <div className="relative w-full">
                  <select
                    name="provincia"
                    defaultValue={Object.keys(provinciasObj)[0]}
                    value={values.provincia}
                    onChange={handleOptionFilter}
                    onBlur={handleBlur}
                    className="z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
                  >
                    {/* <option key={1} value={false} name={"provincia"}>{"All"}</option> */}
                    {provinciasObj &&
                      Object.keys(provinciasObj).length &&
                      Object.keys(provinciasObj).map((prov, ind) => (
                        <option key={prov} value={prov} name={"provincia"}>
                          {prov}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              {errors.provincia && touched.provincia ? (
                <p className="text-red-500 text-xs">{errors.provincia}</p>
              ) : null}
              {/* Barra de eleccion ciudad*/}
              <label htmlFor="direccion" className="text-sm text-gray-600">
                Ingrese ciudad
              </label>
              <div className="relative w-full">
                <select
                  name="ciudad"
                  value={values.ciudad}
                  onChange={handleOptionFilter}
                  onBlur={handleBlur}
                  className="z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
                >
                  {values.provincia != false &&
                    values.provincia &&
                    provinciasObj[values.provincia].map((ciudad, ind) => (
                      <option key={ind} value={ciudad} name={"ciudad"}>
                        {ciudad}
                      </option>
                    ))}
                </select>
              </div>
              {errors.ciudad && touched.ciudad ? (
                <p className="text-red-500 text-xs">{errors.ciudad}</p>
              ) : null}

              <div>
                <label htmlFor="direccion" className="text-sm text-gray-600">
                  Ingrese dirección
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={values.direccion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder={`Por que parte de ${values.ciudad}`}
                  // required="required"
                  // data-error="La Descripción es requerido."
                />
              </div>
              {errors.direccion && touched.direccion ? (
                <p className="text-red-500 text-xs">{errors.direccion}</p>
              ) : null}

              <div></div>
              <div>
                <button
                  className={`mt-3 w-full py-3 ${
                    !isValid ? "bg-blue-500" : "bg-blue-900"
                  } text-white`}
                  style={{ opacity: !isValid ? 0.5 : 1 }}
                  disabled={!isValid}
                >
                  Actualizar datos
                </button>
              </div>
            </form>

            <div>
              <Link
                to={`/${users.role === "comun" ? "profile" : "myprofilep"}/${
                  users.id
                }`}
              >
                <button className="bg-transparent mt-2 w-[80%]  hover:bg-orange-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded">
                  Volver
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormEditProfile;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { putUser, updateUser } from "../../../redux/actions/userActions";
// import { provincias } from "../../../constants/ciudadesObject";
// import SideBarComun from "../../../pages/perfilesUsuarios/ProfileComun/SideBarComun";
// import SideBar from "../../../pages/perfilesUsuarios/ProfielProfesional/SideBar";
// import Swal from "sweetalert2";
// import { convertirProvinciasAObjeto } from "../../../helpers/convertProvinciasToObj";

// export default function FormEditProfile() {
//   const dispatch = useDispatch();

//   const users = useSelector((state) => state.userLogin);

//   const [provState, setProvState] = useState("");
//   const [ciudState, setCiudState] = useState();
//   const navigate = useNavigate();

//   const handleOption = (e) => {
//     const value = e.target.value;
//     setProvState(value);
//     setCiudState(provincias?.find((p) => p.name === value).ciudad);
//   };

//   let provinciasObj = convertirProvinciasAObjeto(provincias);
//   const [input, setInput] = useState({
//     firstName: "",
//     lastName: "",
//     provincia: "Buenos Aires",
//     ciudad: provinciasObj["Buenos Aires"][0],
//     direccion: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault(e);
//     dispatch(putUser(input));
//     setInput({
//       firstName: "",
//       lastName: "",
//       provincia: "",
//       ciudad: "",
//       direccion: "",
//     });
//     Swal.fire({
//       title: "Datos guardados",
//       confirmButtonColor: "green",
//     });
//     // navigate(`/${users.role === "comun" ? 'profile' : 'myprofilep'}/${users.id}`);
//     navigate("/");
//   };

//   const changeInput = (e) => {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });
//     handleOption(e);
//   };

//   let handleOptionFilter = (event) => {
//     let propiedadFilter =
//       event.target.options[event.target.selectedIndex].getAttribute("name");
//     console.log(propiedadFilter);
//     // .toString();
//     let value = event.target.value;

//     let newConfig = {};
//     if (propiedadFilter == "jobs") {
//       newConfig = {
//         // ...input_2,
//         ...input,
//         [propiedadFilter]: [Number(value)],
//       };
//     } else {
//       newConfig = {
//         // ...input_2,
//         ...input,
//         [propiedadFilter]: value,
//       };
//     }
//     setInput(newConfig);
//     // setInput_2(newConfig);
//   };

//   return (
//     <div className="min-h-screen grid grid-gol-1  lg:grid-cols-5">
//       {/* {users?.role === "comun" ? <SideBarComun /> : <SideBar />} */}

//       <div className="col-span-5">
//         <div className=" bg-gray-100 ">
//           <div className="flex flex-col justify-center items-center h-[100vh]">
//             <div className="relative flex flex-col items-center  w-[700px] max-w-[95%] mx-auto bg-gray-200 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
//               <div className="mt-2 mb-8 w-full">
//                 <h4 className="px-2 text-xl font-bold text-white dark:text-white h-30 overflow-hidden border-solid-gray-300  p-4 bg-blue-500 ">
//                   Completa con tus Datos Personales
//                 </h4>
//               </div>

//               <div className="grid grid-cols-2 gap-4 px-2 w-full">
//                 <div className="flex flex-col items-start h-21 justify-center  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
//                   <label htmlFor="nombre" className="text-sm text-gray-600">
//                     Nombre
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={input.firstName}
//                     className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
//                     placeholder="Nombre"
//                     onChange={changeInput}
//                   />
//                 </div>

//                 <div className="flex flex-col items-start h-21 justify-center  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
//                   <label htmlFor="nombre" className="text-sm text-gray-600">
//                     Apellido
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={input.lastName}
//                     className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
//                     placeholder="Apellido"
//                     onChange={changeInput}
//                   />
//                 </div>

//                 <div className="flex flex-col items-start h-21 justify-center  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
//                   <label htmlFor="direccion" className="text-sm text-gray-600">
//                     Ingrese dirección
//                   </label>
//                   <input
//                     type="text"
//                     name="direccion"
//                     className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
//                     placeholder="Dirección"
//                     onChange={changeInput}
//                   />
//                 </div>

//                 <div className="flex flex-col items-start h-21 bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
//                   <form action="#">
//                     <label
//                       htmlFor="direccion"
//                       className="text-sm text-gray-600"
//                     >
//                       Ingrese provincia
//                     </label>
//                     <select
//                       name="provincia"
//                       className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
//                       onChange={handleOptionFilter}
//                     >
//                       <option value="" selected>
//                         Selecciona una provincia
//                       </option>
//                       {provincias?.map((provincia) => (
//                         <option value={provincia.name} key={provincia.id}>
//                           {provincia.name}
//                         </option>
//                       ))}
//                     </select>
//                     <input type="submit" value="" />
//                   </form>
//                 </div>
//                 {provState.length ? (
//                   <div className="flex flex-col items-start h-21  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
//                     <form action="#">
//                       <label
//                         htmlFor="direccion"
//                         className="text-sm text-gray-600"
//                       >
//                         Ingrese ciudad
//                       </label>
//                       <select
//                         name="ciudad"
//                         value={input.ciudad}
//                         onChange={handleOptionFilter}
//                         className="z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
//                       >
//                         {input.provincia != false &&
//                           input.provincia &&
//                           provinciasObj[input.provincia].map((ciudad, ind) => (
//                             <option key={ind} value={ciudad} name={"ciudad"}>
//                               {ciudad}
//                             </option>
//                           ))}
//                       </select>
//                       <input type="submit" value="" />
//                     </form>
//                   </div>
//                 ) : (
//                   <></>
//                 )}
//               </div>

//               <div className="grid grid-cols-2 gap-4 px-2 w-full">
//                 <div>
//                   <Link to={`/profile/${users.id}`}>
//                     <button
//                       className="h-13 py-2  gap-4 bg-blue-500 p-4 text-white  mt-2 w-[80%]  font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded "
//                       onClick={handleSubmit}
//                       typr="submit"
//                     >
//                       Guardar
//                     </button>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link
//                     to={`/${
//                       users.role === "comun" ? "profile" : "myprofilep"
//                     }/${users.id}`}
//                   >
//                     <button className="bg-transparent mt-2 w-[80%]  hover:bg-orange-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded">
//                       Volver
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
