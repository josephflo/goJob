import * as Yup from "yup";

export const FormContactSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  message: Yup.string().required("Please enter your message"),
});
