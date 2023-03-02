'use strict';
const nodemailer = require('nodemailer');
const fs = require('fs');
const { gmailBienvenida } = require('./models/Bienvenida_Go_Job');


require('dotenv').config();
const {
  MAILUSER,
  MAILPSSWD
} = process.env

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
        html: gmailBienvenida(nombre, apellido)
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
    html: gmailBienvenida()
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

const notifyContactar = (user1, emailUser1, nameEmailcontactado, Emailcontactado, mensaje )=>{

    console.log("*******************************");
    console.log(user1, Emailcontactado );
  
    let config = {
      service: 'gmail',
      auth: {
          user: MAILUSER,
          pass: MAILPSSWD
      }
  
  }
  
    let message = {
      from: MAILUSER,
      to: Emailcontactado,
      html: gmailBienvenida()
    }
  
  
    let transporter = nodemailer.createTransport(config)
    const response =  transporter.sendMail(message, (error, info)=>{
      if (error) {
        console.log("Nose pudo enviar la notificacion");
    } else {
        console.log('Notificacion de contactar enviada correctamente: ' + info.response);
    }
    })
}

const notifyTeContrataron  = ()=>{

}

const notifyPagoFinalizado = ()=>{

}

const notifyTeVolvisteProfesional = ()=>{
  
}



module.exports = {
  bienvenidaMail,
  notifyPostulacionMyTrabajo,
  notifyContactar
}

