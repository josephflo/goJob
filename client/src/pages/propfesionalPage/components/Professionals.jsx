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
          contrat={e.contrat}
          description={e.description}
        />
      ))}
    </>
  );
}

export default Professionals;
