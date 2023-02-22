import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Card from "../Card/Card";

export default function Users({ users }) {
  return (
    <>
      {users.map((e, index) => (
        <Card
          id={e.id}
          key={index}
          tittle={e.tittle}
          presupuesto={e.presupuesto}
          // firstName={e.firstName}
          lastName={e.lastName}
          imageurl={e.imageurl}
          job={e.Jobs}
          contrat={e.contrat}
          numberJobs={e.numberJobs}
          // reviews={e.reviews}
          description={e.description}
          // ratings={e.ratings}
          userId={e.userId}
          /* tarif_min={tarif_min} */
        />
      ))}
    </>
  );
}
