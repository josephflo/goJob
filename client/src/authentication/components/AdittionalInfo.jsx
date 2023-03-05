import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form} from "formik";
import TextField from "./TextField";

const AdittionalInfo = () => {
  return (
    <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
      city: "",
    }}>
      {(formik) => (
        <div>
          <h1>Registrate</h1>
          <Form>
            <TextField/>
          </Form>
        </div>
      )}
    </Formik>

    // <div>
    //   <Link to="/">Inicio</Link>
    // </div>
  );
};

export default AdittionalInfo;
