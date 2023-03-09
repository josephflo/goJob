import * as Yup from "yup";

import { provincias } from "../../../../constants/ciudadesObject";
import { convertirProvinciasAObjeto } from "../../../../helpers/convertProvinciasToObj";

const prov = convertirProvinciasAObjeto(provincias)["Buenos Aires"];

export const FormUpdateUserSchema = Yup.object({
  firstName: Yup.string().min(2).max(70).required("Please enter a name"),
  lastName: Yup.string().min(2).max(70).required("Please enter a last name"),
  direccion: Yup.string().required("Please enter an address"),
  provincia: Yup.string()
    .required()
    .oneOf(["Buenos Aires"])
    .required("Please select one"),
  ciudad: Yup.string().required().oneOf(prov).required("Please select one"),
});
