import React, { useSelector } from "react";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import NavBar from "../navbarInicioSesion/NavbarInicioSecion"

function Professionals() {
   const service = useSelector((state) => state.service); 
  return (
    <div>
      <div> 
        <NavBar/>
      </div>
      <div>
    <h1 className="absolute w-96 left-12 top-36 font-sans not-italic font-extrabold text-base text-black">Soluciones cerca de ti: encuentra un profesional
    </h1>
  
    <div> <Filter/> </div>
    <h1 className="absolute w-96 left-20 top-80 font-sans not-italic text-base text-black">Profesionales que se ajustan a tus necesidades
    </h1>
    </div>
      {service?.length > 0 ? (
        service.map((e) => {
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
            )
          }
        })
      ) : 
        <p>ups! no hay profesionales</p>
      }
    </div> 
  );
}

export default Professionals;
