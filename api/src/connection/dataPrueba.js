

let jobs = [
    {name: "Médico", description: "Profesional de la salud que diagnostica y trata enfermedades."},
    {name: "Ingeniero", description: "Profesional que se dedica a la planificación, diseño y construcción de estructuras y sistemas."},
    {name: "Abogado", description: "Profesional que brinda asesoría legal y representa a sus clientes en procesos legales."},
    {name: "Profesor", description: "Profesional que imparte conocimientos y habilidades a estudiantes en diferentes niveles educativos."},
    {name: "Diseñador gráfico", description: "Profesional que crea diseños visuales para comunicar un mensaje o idea."},
    {name: "Programador", description: "Profesional que desarrolla software y programas para diferentes dispositivos y sistemas."},
    {name: "Contador", description: "Profesional que se encarga de la gestión y control de las finanzas de una organización."},
    {name: "Psicólogo", description: "Profesional que se dedica al estudio de la mente y el comportamiento humano."},
    {name: "Chef", description: "Profesional que crea, diseña y prepara platos y menús para diferentes establecimientos gastronómicos."},
    {name: "Periodista", description: "Profesional que investiga, escribe y presenta noticias y otros temas de interés público en diferentes medios de comunicación."}
  ];
  

let users = [
  {
    user: {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      user: "johndoe",
      password: "123456",
      city: "New York",
      phone: 1234567890,
      address: "123 Main St",
      role: "comun"
    },
    jobs: [1, 3, 5]
  },
  {
    user: {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@example.com",
      user: "janedoe",
      password: "123456",
      city: "Los Angeles",
      phone: 1234567891,
      address: "456 Elm St",
      role: "professional"
    },
    jobs: [2, 4]
  },
  {
    user: {
      firstName: "Bob",
      lastName: "Smith",
      email: "bobsmith@example.com",
      user: "bobsmith",
      password: "123456",
      city: "Chicago",
      phone: 1234567892,
      address: "789 Oak St",
      role: "comun"
    },
    jobs: [1, 2]
  },
  {
    user: {
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarahjohnson@example.com",
      user: "sarahjohnson",
      password: "123456",
      city: "Miami",
      phone: 1234567893,
      address: "1010 Pine St",
      role: "professional"
    },
    jobs: [7]
  },
  {
    user: {
      firstName: "Tom",
      lastName: "Wilson",
      email: "tomwilson@example.com",
      user: "tomwilson",
      password: "123456",
      city: "Houston",
      phone: 1234567894,
      address: "1212 Maple St",
      role: "comun"
    },
    jobs: [3, 8, 10]
  },
  {
    user: {
      firstName: "Emily",
      lastName: "Davis",
      email: "emilydavis@example.com",
      user: "emilydavis",
      password: "123456",
      city: "San Francisco",
      phone: 1234567895,
      address: "1313 Cedar St",
      role: "professional"
    },
    jobs: [9]
  },
  {
    user: {
      firstName: "Mike",
      lastName: "Brown",
      email: "mikebrown@example.com",
      user: "mikebrown",
      password: "123456",
      city: "Dallas",
      phone: 1234567896,
      address: "1414 Pine St",
      role: "comun"
    },
    jobs: [6, 10]
  },
  {
    user: {
      firstName: "Amy",
      lastName: "Garcia",
      email: "amygarcia@example.com",
      user: "amygarcia",
      password: "123456",
      city: "Seattle",
      phone: 1234567897,
      address: "1515 Oak St",
      role: "professional"
    },
    jobs: [5, 8]
  }
]
       
  

module.exports = {
  jobs,
  users
}