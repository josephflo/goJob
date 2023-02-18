'use strict';
require('dotenv').config();
const nodemailer = require('nodemailer');

const bienvenidaMail = (nombre, apellido, correo) =>{
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    
    });

    let mailOptions = {
        from: 'temgojob@gmail.com',
        to: `${correo}`,
        subject: `¡Bienvenido a Go-jobs ${nombre} ${apellido}!`,
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
            <tr height="200px">  
                <td bgcolor="" width="600px">
                    <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                    <p  style="color: #fff; text-align:center">
                        <span style="color: #e84393"> ¡Muchas gracias por formar parte de nuestra comunidad ${nombre}!</span> 
                    </p>
                </td>
            </tr>
            <tr bgcolor="#fff">
                <td style="text-align:center">
                    <p style="color: #000">Para cualquier incoveniente contacta al equipo de Go-Jobs</p>
                </td>
            </tr>
            </table>
        
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Correo se envió con éxito: ' + info.response);
        }
    });
}

module.exports = bienvenidaMail;

