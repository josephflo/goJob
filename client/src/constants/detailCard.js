import {
  detailProfile,
  people01,
  people02,
  people03,
  people04,
} from "../assets";

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
  reviews: [
    {
      userId: 1,
      rating: 3,
      name: "User 1",
      date: "jaunary 11, 2023",
      image: people01,
      review:
        "Lo contrate para un  servicio y trabaja muy bien, la eparacion fue en el tiempo acordado, mi escritorio quedo como si fuera nuevo.",
    },
    {
      userId: 4,
      rating: 5,
      name: "User 4",
      date: "december 11, 2022",
      image: people02,
      review:
        "Muy buen servicio por parte de el carpintero, hizo unos diseños de mesas justo como  se lo pedí para mi restaurante.",
    },
    {
      userId: 22,
      rating: 1,
      name: "",
      date: "",
      image: "",
      review: "",
    },
    {
      userId: 2,
      rating: 1,
      name: "",
      date: "",
      image: "",
      review: "",
    },
    {
      userId: 12,
      rating: 4,
      name: "",
      date: "",
      image: "",
      review: "",
    },
    {
      userId: 22,
      rating: 1,
      name: "",
      date: "",
      image: "",
      review: "",
    },
    {
      userId: 8,
      rating: 2,
      name: "User 8",
      date: "july 10, 2022",
      image: people03,
      review:
        "Muy buen servicio por parte de el carpintero, hizo unos diseños de mesas justo como  se lo pedí para mi restaurante.",
    },
    {
      userId: 22,
      rating: 3,
      name: "User 22",
      date: "jaunary 30, 2023",
      image: people04,
      review:
        "Muy buen servicio por parte de el carpintero, hizo unos diseños de mesas justo como  se lo pedí para mi restaurante.",
    },
  ],
  // reviews: [
  //   {
  //     id: 1,
  //     name: "Rodolfo",
  //     date: "jaunary 11, 2023",
  //     image: people01,
  //     review:
  //       "Lo contrate para un  servicio y trabaja muy bien, la eparacion fue en el tiempo acordado, mi escritorio quedo como si fuera nuevo.",
  //   },
  //   {
  //     id: 2,
  //     name: "Victor",
  //     date: "december 11, 2022",
  //     image: people02,
  //     review:
  //       "Muy buen servicio por parte de el carpintero, hizo unos diseños de mesas justo como  se lo pedí para mi restaurante.",
  //   },
  //  ],
};
