import ServiceCard from "./servicecard";

export default function Services({ services, myPostulaciones }) {

  return (
    <>

      
   
      {services.map((e, index) => (
        <ServiceCard
          id={e.id}
          key={index}
          tittle={e.tittle}
          presupuesto={e.presupuesto}
          lastName={e.lastName}
          imageurl={e.imageServiceUrl}
          job={e.Jobs}
          contrat={e.contrat}
          numberJobs={e.numberJobs}
          description={e.description}
          userId={e.userId}
          myPostulaciones={myPostulaciones}
        />
      ))}

  

    </>
  );
}
