import { ErrorMessage, useField } from "formik";
import React from "react";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <div>
        <label 
        className="block text-sm font-medium text-gray-700"
        htmlForm={field.name}>{label}</label>
        <input
          className={`mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline${
            meta.touched && meta.error && "is-invalid"
          }`}
          {...field}
          {...props}
          autoComplete="off"
        />
      </div>
      <ErrorMessage
        component="div"
        name={field.name}
        className="text-xs text-red-600"
      />
    </div>
  );
};

export default TextField;