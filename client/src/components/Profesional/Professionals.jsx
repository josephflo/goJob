import React, { useState } from "react";
import Card from "../Card/Card";
import "./Professionals.css";

function Professionals() {
  const professionals = useState((state) => state.professionals);
  return (
    <div>
      {professionals?.length > 0 ? (
        professionals?.map((e) => {
          if (e.state) {
            return (
              <Card
                id={e.id}
                key={e.id}
                firstName={e.firstName}
                lasName={e.lasName}
                name={e.name}
                description={e.description}
                image={e.image}
                rating={e.rating}
                reviews={e.reviews}
                tarif_min={e.tarif_min}
              />
            );
          }
        })
      ) : (
        <p>ups! no hay profesionales</p>
      )}
    </div>
  );
}

export default Professionals;
