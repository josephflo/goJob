import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import { putUser } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";



const AdittionalInfo = () => {
  const validate = Yup.object({
    firstName: Yup.string()
    .max(10, "Puede tener 10 caracters o menos")
    .required("Campo obligatorio"),
    lastName: Yup.string()
    .max(10, "Puede tener 10 caracters o menos")
    .required("Campo obligatorio"),
    email: Yup.string().email("Email invalido").required("Email obligatorio"),
    telefono: Yup.string()
    .max(10, "Puede tener 10 caracters o menos")
    .required("La ciudad es obligatoria"),
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        telefono: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        dispatch(putUser(values));
        Swal.fire({
          type: 'success',
          title: 'Datos completos',
          confirmButtonColor: 'green'
        });
        navigate("/")
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
                <TextField label="Telefono" name="telefono" type="text" />
                {/* <Form.Dropdown
                placer
                /> */}
                <div>
                  <button
                    className="mt-4 w-full py-3 bg-sky-700 text-white"
                    type="submit"
                  >
                    Completar datos
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
