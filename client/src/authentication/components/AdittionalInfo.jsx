import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";

const AdittionalInfo = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(10, "Puede tener 10 caracters o menos")
      .required("Campo obligatorio"),
    lastName: Yup.string()
      .max(10, "Puede tener 10 caracters o menos")
      .required("Campo obligatorio"),
    email: Yup.string().email("Email invalido").required("Email obligatorio"),
    city: Yup.string()
      .max(10, "Puede tener 10 caracters o menos")
      .required("La ciudad es obligatoria"),
  });

  const categoriesOption = [
    { key: "react", value: "react", text: "React" },
    { key: "next", value: "next", text: "Next" },
  ];

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        city: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="flex justify-center items-center h-screen">
          <div className="block max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="text-center lg:text-left">
              <img
                src="https://res.cloudinary.com/gojobs/image/upload/v1676767462/WhatsApp_Image_2023-02-18_at_18.32.16_ck4398.jpg"
                class="h-16 w-auto m-auto lg:m-0 item"
                alt=""
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Registrate
              </h2>
            </div>
            {/* {console.log(formik.values)} */}
            <div className="mt-6">
              <Form className="space-y-1">
                <TextField label="Nombre" name="firstName" type="text " />
                <TextField label="Apellido" name="lastName" type="text" />
                <TextField label="Email" name="email" type="text" />
                <TextField label="Ciudad" name="city" type="text" />
                {/* <Form.Dropdown
                placer
                /> */}
                <div>
                  <button
                    className="mt-4 w-full py-3 bg-sky-700 text-white"
                    type="submit"
                  >
                    Registrarse
                  </button>
                </div>
                {/* <button type="reset">Reiniciar</button> */}
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>

    // <div>
    //   <Link to="/">Inicio</Link>
    // </div>
  );
};

export default AdittionalInfo;
