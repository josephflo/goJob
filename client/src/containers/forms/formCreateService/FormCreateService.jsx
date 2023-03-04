import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPortada from "../../../components/navBar/navBarPortada/NavBarPortada";
import { createService } from "../../../redux/actions/serviceActions";
import { getJobs } from "../../../redux/actions/jobActions";
import { provincias } from "../../../constants/ciudadesObject";
import { convertirProvinciasAObjeto } from "../../../helpers/convertProvinciasToObj";
import { useFormik } from "formik";

import { FormCreateServiceSchema } from "./components/FormCreateServiceSchema";

function FormCreateService() {
  const dispatch = useDispatch();
  const jobs_ = useSelector((state) => state.jobs);

  let provinciasObj = convertirProvinciasAObjeto(provincias);

  useEffect(() => {
    dispatch(getJobs());
  }, []);

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
      tittle: "",
      description: "",
      provincia: "Buenos Aires",
      ciudad: provinciasObj["Buenos Aires"][0],
      direccion: "",
      presupuesto: "",
      jobs: [1],
      inputImage: "",
    },
    validationSchema: FormCreateServiceSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(createService(values));
      console.log(values);
      window.alert("Se creó con exito el servicio");
      resetForm();
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

  const changeInputImage = (e) => {
    const value = e.target.files;
    setValues({
      ...values,
      inputImage: value[0],
    });
  };

  useEffect(() => {}, [values]);

  return (
    <div>
      <div className="sticky top-0 z-50 bg-white ">
        <NavBarPortada />
      </div>
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]">
          <div className="text-center lg:text-left">
            <h2 className="mt-6 text-3xl font-extrabold text-blue-900">
              Crea tu servicio
            </h2>
          </div>
          <div className="mt-6">
            <form className="space-y-1" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
                <div>
                  <label
                    htmlFor="nameService"
                    className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                  >
                    Ingrese nombre del Servicio
                  </label>
                  <input
                    type="text"
                    id="tittle"
                    name="tittle"
                    value={values.tittle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Nombre de servicio"
                    // required="required"
                    // data-error="El nombre del Servicio es requerido."
                  />
                </div>
              </div>
              {errors.tittle && touched.tittle ? (
                <p className="text-red-500 text-xs">{errors.tittle}</p>
              ) : null}
              <div>
                <label
                  htmlFor="descriptionService"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  Ingrese descripción del Servicio
                </label>
                <input
                  type="text"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Description del servicio"
                  // required="required"
                  // data-error="La Descripción es requerido."
                />
              </div>
              {errors.description && touched.description ? (
                <p className="text-red-500 text-xs">{errors.description}</p>
              ) : null}
              {/* Barra de eleccion provincia*/}
              <div>
                <p className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700">
                  Por Provincia
                </p>
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
              <p className="block text-sm font-medium  lg:mt-0 text-gray-700">
                Por ciudad
              </p>
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
                <label
                  htmlFor="descriptionService"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  Dirección
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
              <div>
                <label
                  htmlFor="descriptionService"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  Ingrese el prespuesto que tiene
                </label>
                <input
                  type="text"
                  name="presupuesto"
                  id="presupuesto"
                  value={values.presupuesto}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                  // required="required"
                  // data-error="La Descripción es requerido."
                />
              </div>
              {errors.presupuesto && touched.presupuesto ? (
                <p className="text-red-500 text-xs">{errors.presupuesto}</p>
              ) : null}
              <div>
                <label className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700">
                  Jobs:{" "}
                </label>
                <div className="relative w-full mb-15">
                  <select
                    value={values.jobs[0]}
                    onChange={handleOptionFilter}
                    className="z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
                  >
                    {jobs_.length &&
                      jobs_.map((job, ind) => (
                        <option key={ind} value={job.id} name={"jobs"}>
                          {job.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="block text-sm mb-2 font-medium mt-2 lg:mt-0 text-gray-700"
                  for="file_input"
                >
                  Ingrese imagen del servicio (opcional):
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  name="file"
                  onChange={changeInputImage}
                />
              </div>

              <div></div>
              <div>
                <button
                  className={`mt-3 w-full py-3 ${
                    !isValid ? "bg-blue-500" : "bg-blue-900"
                  } text-white`}
                  style={{ opacity: !isValid ? 0.5 : 1 }}
                  disabled={!isValid}
                >
                  Crear servicio
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCreateService;
