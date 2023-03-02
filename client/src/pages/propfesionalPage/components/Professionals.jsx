import ProfessionalCard from "./ProfessionalCard";

function Professionals({ usersProfesionales }) {
  return (
    <>
      {usersProfesionales.map((e, index) => (
        <ProfessionalCard
          id={e.id}
          key={index}
          firstName={e.firstName}
          lastName={e.lastName}
          imageurl={e.imageurl}
          imagePerfil={e.imagePerfil}
          contrat={e.contrat}
          description={e.description}
          jobs={e.Jobs}
        />
      ))}
    </>
  );
}

export default Professionals;
