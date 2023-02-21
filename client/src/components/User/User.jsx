import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Card from "../Card/Card";

export default function Users({ users }) {
  return (
    <>
      {users.map((e) => (
        <Card
          id={e.id}
          key={e.id}
          firstName={e.firstName}
          lastName={e.lastName}
          imageurl={e.imageurl}
          job={e.job}
          contrat={e.contrat}
          numberJobs={e.numberJobs}
          reviews={e.reviews}
          description={e.description}
          ratings={e.ratings}
          /* tarif_min={tarif_min} */
        />
      ))}
    </>
  );
}
