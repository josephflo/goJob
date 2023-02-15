import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";


function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_64ze0dd",
        "template_jnuene7",
        templateParams,
        "2de5dh3wcuxLsnH3u"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Error:", err);
        }
      );
  }

  return (
    <div class="flex justify-center items-center h-screen bg-white-800">
      <div class="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 class="text-3xl block text-center font-semibold">
          <i class="fa-solid fa-paper-plane"></i> Contacto
        </h1>
        <hr class="mt-3" />

        <form className="form" onSubmit={sendEmail}>
          <div class="mt-3">
            <label class="block text-base mb-2">Nombre:</label>
            <input
              class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              type="text"
              placeholder="Escriba su nombre"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required="required"
              data-error="El nombre es requerido."
            />
          </div>
          <div class="mt-3">
            <label class="block text-base mb-2">Email:</label>
            <input
              class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              type="email"
              placeholder="Escriba su email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required="required"
              data-error="El email es requerido."
            />
          </div>
          <div class="mt-3">
            <label class="block text-base mb-2">
              Mensaje:
            </label>
            <textarea
              class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Escriba su mensaje"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required="required"
              data-error="El mensaje es requerido."
            />
          </div>
          <div class="mt-3">
            <input
              class="border-2 border-green-700 bg-green-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-green-700 font-semibold"
              type="submit"
              value="Enviar"
            />
          </div>
          <div class="mt-3">
            <NavLink to="/">
              <button class="border-2 border-red-700 bg-red-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-red-700 font-semibold">
                Volver
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormContact;
