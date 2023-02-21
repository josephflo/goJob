import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/actions";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import NavBar from "../navbarPortada/NavBar";

function Professionals() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.lenght === 0) {
      dispatch(getUsers());
    }
  }, [dispatch, users.lenght]);

  return (
    <div>
      <div>
        <NavBar  />
      </div>
      <div>
        <h1 className="absolute left-12 top-36 font-sans not-italic font-extrabold text-2xl text-black">
          Soluciones cerca de ti: encuentra un profesional
        </h1>

        <div className="grid grid-cols-4 ">
          {" "}
          <Filter />{" "}
        </div>
        <h1 className="absolute left-12 top-80 font-sans not-italic text-1xl text-black">
          Profesionales que se ajustan a tus necesidades
        </h1>
      </div>
      <div className="flex flex-wrap pt-80 w-[50%] mx-auto " >
        { users?.length > 0 ? ( 
          users?.map((e) => {
            if (e.role === "professional") {
              return (
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
              )
            }
          })
          ) :
          <p> ups! no hay profesionales </p>
        }
        
      </div>
    </div>
  );
}

export default Professionals;
