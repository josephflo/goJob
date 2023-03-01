import React from "react";
import Card from "./Card";


export default function Offers({services}) {
    return (
        <>
          {services?.map((e, index) => (
            <Card
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