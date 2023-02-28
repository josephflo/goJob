import * as Yup from "yup";

import { provincias } from "../../../../constants/ciudadesObject";
import { convertirProvinciasAObjeto } from "../../../../helpers/convertProvinciasToObj";

const prov = convertirProvinciasAObjeto(provincias)["Buenos Aires"];

export const FormCreateServiceSchema = Yup.object({
  tittle: Yup.string().min(2).max(25).required("Please enter a title"),
  description: Yup.string().required("Please enter a description of the job"),
  direccion: Yup.string().required("Please enter an address"),
  presupuesto: Yup.number()
    .nullable(true)
    .max(99999, "Please enter an estimate of up to 5 digits")
    .required("Please enter an estimate"),
  provincia: Yup.string()
    .required()
    .oneOf(["Buenos Aires"])
    .required("Please select one"),
  ciudad: Yup.string().required().oneOf(prov).required("Please select one"),
  jobs: Yup.array().of(Yup.number()),
});
