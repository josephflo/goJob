'use strict';
const nodemailer = require('nodemailer');
const fs = require('fs');
const { gmailBienvenida } = require('./models/Bienvenida_Go_Job');
const { alguienPostulo } = require('./models/Alguien_Postulo');
const { contactarUser } = require('./models/Contactar_Professional');
const { teContrataron } = require('./models/Te_Contrataron');


require('dotenv').config();
const {
  MAILUSER,
  MAILPSSWD
} = process.env

String.prototype.oneMayuscula = function() {
  return this.toLowerCase().replace(/\b\w/g, function(l) {
    return l.toUpperCase();
  });
}

const bienvenidaMail = (nombre, apellido, correo) =>{
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: MAILUSER,
            pass: MAILPSSWD
        }
    
    });

    let mailOptions = {
        from: MAILPSSWD,
        to: `${correo}`,
        subject: `¡Bienvenido a Go-jobs ${nombre} ${apellido}!`,
        html: gmailBienvenida(nombre.oneMayuscula(), apellido.oneMayuscula())
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Correo se envió con éxito: ' + info.response);
        }
    });
}

const notifyPostulacionMyTrabajo = (user1, correo, postulante, ofertaTrabajo)=>{
  let config = {
    service: 'gmail',
    auth: {
        user: MAILUSER,
        pass: MAILPSSWD
    }

}

  let message = {
    from: MAILUSER,
    to: correo,
    subject: "Postulacion a mi oferta de trabajo",
    html: alguienPostulo(user1.oneMayuscula(), postulante.oneMayuscula(), ofertaTrabajo.oneMayuscula())
  }


  let transporter = nodemailer.createTransport(config)
  const response =  transporter.sendMail(message, (error, info)=>{
    if (error) {
      console.log("Nose pudo enviar la notificacion");
  } else {
      console.log('Notificacion de postulacion enviada correctamente: ' + info.response);
  }
  })

}

const notifyContactar = (user1, emailUser1, mensaje, nameContactado, emailcontactado)=>{

    let config = {
      service: 'gmail',
      auth: {
          user: MAILUSER,
          pass: MAILPSSWD
      }
    }
  
    let message = {
      from: MAILUSER,
      to: emailcontactado,
      subject: "Quieren contactarse contigo",
      html: contactarUser(user1.oneMayuscula(), emailUser1, mensaje, nameContactado.oneMayuscula(), emailcontactado)

    }

    let transporter = nodemailer.createTransport(config)
    const response =  transporter.sendMail(message, (error, info)=>{
      if (error) {
        console.log("Nose pudo enviar la notificacion");
    } else {
        console.log('Notificacion de contactar enviada correctamente: ' + info.response);
    }
    })
    return "jeje"
}

const notifyTeContrataron  = (nameUser, email, tittle, nameContratista, emailContratista)=>{

  let config = {
    service: 'gmail',
    auth: {
        user: MAILUSER,
        pass: MAILPSSWD
    }
  }

  let message = {
    from: MAILUSER,
    to: email,
    subject: `${nameUser} Te contrataron`,
    html: teContrataron(nameUser, tittle, nameContratista, emailContratista) 

  }

  let transporter = nodemailer.createTransport(config)
  const response =  transporter.sendMail(message, (error, info)=>{
    if (error) {
      console.log("Nose pudo enviar la notificacion");
  } else {
      console.log('Notificacion de contratacion enviada correctamente: ' + info.response);
  }
  })
}

const notifyPagoFinalizado = ()=>{
  
  let config = {
    service: 'gmail',
    auth: {
        user: MAILUSER,
        pass: MAILPSSWD
    }
  }

  let message = {
    from: MAILUSER,
    to: email,
    subject: `${nameUser} Te contrataron`,
    html: teContrataron(nameUser, tittle, nameContratista, emailContratista) 

  }

  let transporter = nodemailer.createTransport(config)
  const response =  transporter.sendMail(message, (error, info)=>{
    if (error) {
      console.log("Nose pudo enviar la notificacion");
  } else {
      console.log('Notificacion de contratacion enviada correctamente: ' + info.response);
  }
  })
}

// const notifyTeVolvisteProfesional = ()=>{
  
// }



module.exports = {
  notifyContactar,
  bienvenidaMail,
  notifyPostulacionMyTrabajo,
  notifyTeContrataron,
  notifyPagoFinalizado
  
}

