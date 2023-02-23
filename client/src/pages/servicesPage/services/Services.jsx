import ServiceCard from "../serviceCard/ServiceCard";

export default function Services({ services }) {
  return (
    <>
      {services.map((e, index) => (
        <ServiceCard
          id={e.id}
          key={index}
          tittle={e.tittle}
          presupuesto={e.presupuesto}
          lastName={e.lastName}
          imageurl={e.imageurl}
          job={e.Jobs}
          contrat={e.contrat}
          numberJobs={e.numberJobs}
          description={e.description}
          userId={e.userId}
        />
      ))}
    </>
  );
}
