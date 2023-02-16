import { detailProfile, people01, people02 } from "../assets";

export const detail = {
  id: 1024,
  firstName: "Dario",
  lastName: "Ruiz",
  image: detailProfile,
  job: "Carpintero",
  specificJob: "Especialista en restauración",
  specificJob2: "Trabajos de Carpintería rapido de manera profesional conmigo",
  numberJobs: 87,
  description:
    "Soy Dario Ruiz carpintero con mas de 8 años  de practica. Soy una  persona muy paciente y dedicada con mi trabajo. Cuento con recomendaciones de varias empresas,  asi como trabajos en casas y restaurantes, realizando diversos trabajos de carpinteria.",
  price: 15,
  ratings: [5, 5, 5, 5, 5, 4, 4, 4, 3, 3, 2, 1, 2, 5, 5, 5, 5],
  reviews: [
    {
      id: 1,
      name: "Rodolfo",
      date: "jaunary 11, 2023",
      image: people01,
      review:
        "Lo contrate para un  servicio y trabaja muy bien, la eparacion fue en el tiempo acordado, mi escritorio quedo como si fuera nuevo.",
    },
    {
      id: 2,
      name: "Victor",
      date: "december 11, 2022",
      image: people02,
      review:
        "Muy buen servicio por parte de el carpintero, hizo unos diseños de mesas justo como  se lo pedí para mi restaurante.",
    },
  ],
};
