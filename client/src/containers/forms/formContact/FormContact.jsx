import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "flowbite";

import { FormContactSchema } from "./components/FormContactSchema";

import { Formik, Form, Field } from "formik";

function FormContact() {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // send email using emailjs
    emailjs
      .send("service_64ze0dd", "template_jnuene7", values, "2de5dh3wcuxLsnH3u")
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          resetForm();
        },
        (err) => {
          console.log("Error:", err);
        }
      )
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <svg
        width="118"
        height="53"
        viewBox="0 0 118 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="50" fill="#06159B" />
        <path
          d="M24.5952 20.0895C24.348 19.3139 24.0156 18.6193 23.598 18.0057C23.1889 17.3835 22.6989 16.8551 22.1278 16.4205C21.5568 15.9773 20.9048 15.6406 20.1719 15.4105C19.4474 15.1804 18.6506 15.0653 17.7812 15.0653C16.3068 15.0653 14.9773 15.4446 13.7926 16.2031C12.608 16.9616 11.6705 18.0739 10.9801 19.5398C10.2983 20.9972 9.95739 22.7827 9.95739 24.8963C9.95739 27.0185 10.3026 28.8125 10.9929 30.2784C11.6832 31.7443 12.6293 32.8565 13.831 33.6151C15.0327 34.3736 16.4006 34.7528 17.9347 34.7528C19.358 34.7528 20.598 34.4631 21.6548 33.8835C22.7202 33.304 23.5426 32.4858 24.1222 31.429C24.7102 30.3636 25.0043 29.1108 25.0043 27.6705L26.027 27.8622H18.5355V24.6023H28.8267V27.581C28.8267 29.7798 28.358 31.6889 27.4205 33.3082C26.4915 34.919 25.2045 36.1634 23.5597 37.0412C21.9233 37.919 20.0483 38.358 17.9347 38.358C15.5653 38.358 13.4858 37.8125 11.696 36.7216C9.91477 35.6307 8.52557 34.0838 7.52841 32.081C6.53125 30.0696 6.03267 27.6832 6.03267 24.9219C6.03267 22.8338 6.32244 20.9588 6.90199 19.2969C7.48153 17.6349 8.29545 16.2244 9.34375 15.0653C10.4006 13.8977 11.6406 13.0071 13.0639 12.3935C14.4957 11.7713 16.0597 11.4602 17.7557 11.4602C19.1705 11.4602 20.4872 11.669 21.706 12.0866C22.9332 12.5043 24.0241 13.0966 24.9787 13.8636C25.9418 14.6307 26.7386 15.5426 27.3693 16.5994C28 17.6477 28.4261 18.8111 28.6477 20.0895H24.5952ZM41.8058 38.3963C39.9648 38.3963 38.3583 37.9744 36.9862 37.1307C35.614 36.2869 34.5487 35.1065 33.7901 33.5895C33.0316 32.0724 32.6523 30.2997 32.6523 28.2713C32.6523 26.2344 33.0316 24.4531 33.7901 22.9276C34.5487 21.402 35.614 20.2173 36.9862 19.3736C38.3583 18.5298 39.9648 18.108 41.8058 18.108C43.6467 18.108 45.2532 18.5298 46.6254 19.3736C47.9975 20.2173 49.0629 21.402 49.8214 22.9276C50.5799 24.4531 50.9592 26.2344 50.9592 28.2713C50.9592 30.2997 50.5799 32.0724 49.8214 33.5895C49.0629 35.1065 47.9975 36.2869 46.6254 37.1307C45.2532 37.9744 43.6467 38.3963 41.8058 38.3963ZM41.8185 35.1875C43.0117 35.1875 44.0004 34.8722 44.7844 34.2415C45.5685 33.6108 46.1481 32.7713 46.5231 31.723C46.9066 30.6747 47.0984 29.5199 47.0984 28.2585C47.0984 27.0057 46.9066 25.8551 46.5231 24.8068C46.1481 23.75 45.5685 22.902 44.7844 22.2628C44.0004 21.6236 43.0117 21.304 41.8185 21.304C40.6168 21.304 39.6197 21.6236 38.8271 22.2628C38.043 22.902 37.4592 23.75 37.0756 24.8068C36.7006 25.8551 36.5131 27.0057 36.5131 28.2585C36.5131 29.5199 36.7006 30.6747 37.0756 31.723C37.4592 32.7713 38.043 33.6108 38.8271 34.2415C39.6197 34.8722 40.6168 35.1875 41.8185 35.1875Z"
          fill="#FBFBFE"
        />
        <path
          d="M68.0526 11.8182H71.9901V30.3807C71.9901 32.0597 71.6577 33.4957 70.9929 34.6889C70.3366 35.8821 69.4119 36.794 68.2188 37.4247C67.0256 38.0469 65.6278 38.358 64.0256 38.358C62.5511 38.358 61.2259 38.0895 60.0497 37.5526C58.8821 37.0156 57.9574 36.2358 57.2756 35.2131C56.6023 34.1818 56.2656 32.929 56.2656 31.4545H60.1903C60.1903 32.179 60.3565 32.8054 60.6889 33.3338C61.0298 33.8622 61.4943 34.2756 62.0824 34.5739C62.679 34.8636 63.3608 35.0085 64.1278 35.0085C64.9631 35.0085 65.6705 34.8338 66.25 34.4844C66.8381 34.1264 67.2855 33.6023 67.5923 32.9119C67.8991 32.2216 68.0526 31.3778 68.0526 30.3807V11.8182ZM85.7042 38.3963C83.8633 38.3963 82.2567 37.9744 80.8846 37.1307C79.5124 36.2869 78.4471 35.1065 77.6886 33.5895C76.93 32.0724 76.5508 30.2997 76.5508 28.2713C76.5508 26.2344 76.93 24.4531 77.6886 22.9276C78.4471 21.402 79.5124 20.2173 80.8846 19.3736C82.2567 18.5298 83.8633 18.108 85.7042 18.108C87.5451 18.108 89.1516 18.5298 90.5238 19.3736C91.896 20.2173 92.9613 21.402 93.7198 22.9276C94.4783 24.4531 94.8576 26.2344 94.8576 28.2713C94.8576 30.2997 94.4783 32.0724 93.7198 33.5895C92.9613 35.1065 91.896 36.2869 90.5238 37.1307C89.1516 37.9744 87.5451 38.3963 85.7042 38.3963ZM85.717 35.1875C86.9102 35.1875 87.8988 34.8722 88.6829 34.2415C89.467 33.6108 90.0465 32.7713 90.4215 31.723C90.805 30.6747 90.9968 29.5199 90.9968 28.2585C90.9968 27.0057 90.805 25.8551 90.4215 24.8068C90.0465 23.75 89.467 22.902 88.6829 22.2628C87.8988 21.6236 86.9102 21.304 85.717 21.304C84.5153 21.304 83.5181 21.6236 82.7255 22.2628C81.9414 22.902 81.3576 23.75 80.9741 24.8068C80.5991 25.8551 80.4116 27.0057 80.4116 28.2585C80.4116 29.5199 80.5991 30.6747 80.9741 31.723C81.3576 32.7713 81.9414 33.6108 82.7255 34.2415C83.5181 34.8722 84.5153 35.1875 85.717 35.1875ZM99.4311 38V11.8182H103.254V21.5469H103.484C103.705 21.1378 104.025 20.6648 104.442 20.1278C104.86 19.5909 105.44 19.1222 106.181 18.7216C106.923 18.3125 107.903 18.108 109.121 18.108C110.707 18.108 112.121 18.5085 113.366 19.3097C114.61 20.1108 115.586 21.2656 116.293 22.7741C117.009 24.2827 117.367 26.098 117.367 28.2202C117.367 30.3423 117.013 32.1619 116.306 33.679C115.599 35.1875 114.627 36.3509 113.391 37.169C112.156 37.9787 110.745 38.3835 109.16 38.3835C107.967 38.3835 106.991 38.1832 106.232 37.7827C105.482 37.3821 104.894 36.9134 104.468 36.3764C104.042 35.8395 103.714 35.3622 103.484 34.9446H103.164V38H99.4311ZM103.177 28.1818C103.177 29.5625 103.377 30.7727 103.778 31.8125C104.178 32.8523 104.758 33.6662 105.516 34.2543C106.275 34.8338 107.204 35.1236 108.303 35.1236C109.445 35.1236 110.4 34.821 111.167 34.2159C111.934 33.6023 112.513 32.7713 112.906 31.723C113.306 30.6747 113.506 29.4943 113.506 28.1818C113.506 26.8864 113.31 25.723 112.918 24.6918C112.535 23.6605 111.955 22.8466 111.18 22.25C110.413 21.6534 109.454 21.3551 108.303 21.3551C107.195 21.3551 106.258 21.6406 105.491 22.2116C104.732 22.7827 104.157 23.5795 103.765 24.6023C103.373 25.625 103.177 26.8182 103.177 28.1818Z"
          fill="#06159B"
        />
      </svg>
      <div className="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]">
        <div className="text-center lg:text-left">
          <h1 className="mt-6 text-3xl font-extrabold text-blue-900">
            <i className="fa-solid fa-paper-plane"></i> Contacto
          </h1>
          <hr className="mt-3" />
          <div className="mt-6">
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={FormContactSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, errors, touched }) => (
                <Form>
                  <div className="mt-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                    >
                      Nombre:
                    </label>

                    <Field
                      name="name"
                      className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Escriba su nombre"
                      onChange={handleChange}
                      value={values.name}
                      // required="required"
                      // data-error="El nombre es requerido."
                    />
                    {errors.name && touched.name ? (
                      <p className="text-red-500 text-xs">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                    >
                      Email:
                    </label>
                    <Field
                      name="email"
                      className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Escriba su email"
                      onChange={handleChange}
                      value={values.email}
                      // required="required"
                      // data-error="El email es requerido."
                    />
                    {errors.email && touched.email ? (
                      <p className="text-red-500 text-xs">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                    >
                      Mensaje:
                    </label>
                    <Field
                      name="message"
                      component="textarea"
                      className="mt-2 h-20 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Escriba su mensaje"
                      onChange={handleChange}
                      value={values.message}
                      // required="required"
                      // data-error="El mensaje es requerido."
                    />
                    {errors.message && touched.message ? (
                      <p className="text-red-500 text-xs">{errors.message}</p>
                    ) : null}
                  </div>
                  <div className="mt-3">
                    <button
                      className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-3 px-4 border border-blue-700 rounded"
                      type="submit"
                      // value="Enviar"
                    >
                      Enviar
                    </button>
                  </div>
                  <div className="mt-3">
                    <NavLink to="/">
                      <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-3 px-4 border border-blue-700 rounded">
                        Volver
                      </button>
                    </NavLink>
                  </div>
                </Form>
              )}
            </Formik>
            {/* <form className="space-y-1" onSubmit={sendEmail}></form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormContact;
