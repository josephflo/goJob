import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import './FormContact.css';

function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("llene los campos");
      return;
    }

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
    
    <div className="container">
      <h1 className="title">Contacto</h1>
      <form className="form" onSubmit={sendEmail}>
        <label className="label">Nombre:</label>
        <p>
        <input
          className="input"
          type="text"
          placeholder="Escriba su nombre"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        </p>
        <p>
        <label className="label">Email:</label>
        <input
          className="input"
          type="text"
          placeholder="Escriba su email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        </p>
        <p>
        <label className="label">Mensaje:</label>
        <textarea
          className="textarea"
          placeholder="Escriba su mensaje"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        </p>
        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default FormContact;
