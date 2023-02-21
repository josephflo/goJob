import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getService,
  getUsers,
  orderByName,
  serviceFilter,
} from "../../redux/actions/actions";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import NavBar from "../navbarPortada/NavBar";

import User from "../User/User";

function Professionals() {
  let users2 = useSelector((state) => state.users2);
  let service = useSelector((state) => state.service);

  let id = useState(null);

  console.log(users2, "users aca");

  const dispatch = useDispatch();

  useEffect(() => {
    // if (users.lenght === 0) {
    dispatch(getUsers());
    console.log(users2);
    dispatch(getService());
  }, []);

  // function handleSort(e) {
  //   // e.preventDefault();
  //   dispatch(orderByName(e.target.value));
  // }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <h1 className=" left-12 top-36 font-sans not-italic font-extrabold text-2xl text-black">
          Soluciones cerca de ti: encuentra un profesional
        </h1>

        <div className=" ">
          {" "}
          <Filter />{" "}
        </div>
        <h1 className=" left-12 top-80 font-sans not-italic text-1xl text-black">
          Profesionales que se ajustan a tus necesidades
        </h1>
      </div>

      <div className="flex flex-wrap pt-80 w-[50%] mx-auto">
        {users2?.length > 0 ? (
          <User users={users2} />
        ) : (
          // users?.map((e) => {
          //   if (e.role === "professional") {
          //     return (
          //       <Card
          //         id={e.id}
          //         key={e.id}
          //         firstName={e.firstName}
          //         lastName={e.lastName}
          //         imageurl={e.imageurl}
          //         job={e.job}
          //         contrat={e.contrat}
          //         numberJobs={e.numberJobs}
          //         reviews={e.reviews}
          //         description={e.description}
          //         ratings={e.ratings}
          //         /* tarif_min={tarif_min} */
          //       />
          //     );
          //   }
          // })

          <p> ups! no hay profesionales </p>
        )}
      </div>
    </div>
  );
}

export default Professionals;
