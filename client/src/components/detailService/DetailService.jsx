import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { detail } from "../../constants/detailCard";
import { getServiceById } from "../../redux/actions/serviceActions";
import DescriptionService from "./components/DescriptionService";
import HeaderService from "./components/HeaderService";
import Postularse from "./components/Postularse";
import Suggestions from "./components/Suggestions";
// import Navbar from "../navbarPortada/NavBar";

import Loading from "../loading/Loading";
import { suggestionServices } from "../../redux/actions/services/getServices";

export default function DetailService() {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();

  // get detail service
  const detail = useSelector((state) => state.serviceDetail);

  // userLogin
  const user = useSelector((state) => state.userLogin);

  // suggestion
  const totalPages = useSelector((state) => state.totalPagesSuggestion);

  // config suggestion service
  const configService = useSelector(
    (state) => state.configFilterServicesSuggestion
  );

  const [hasFetchedServiceById, setHasFetchedServiceById] = useState(false);

  useEffect(() => {
    if (!hasFetchedServiceById) {
      // primero se ejecuta el get service by id
      dispatch(getServiceById(id));
      setHasFetchedServiceById(true);
    } else {
      // luego se ejecuta el suggestion service
      dispatch(
        suggestionServices({
          ...configService,
          job: detail.Jobs?.map((job) => job.id)[0],
        })
      );
      // setHasFetchedServiceById(!hasFetchedServiceById);
    }
  }, [id, detail, hasFetchedServiceById]);

  // useEffect(() => {
  //   dispatch(getServiceById(id));
  // }, [id]);

  // useEffect(() => {
  //   dispatch(
  //     suggestionServices({
  //       ...configService,
  //       job: detail.Jobs?.map((job) => job.id)[0],
  //     })
  //   );
  // }, [detail]);

  return (
    <>
      <div className="grid grid-cols-4 gap-1 bg-gray-200">
        <div className="col-span-1 ">
          <div className="border-2 rounded-xl m-2 p-4 bg-white ">
            <Suggestions
              detail={detail}
              totalPages={totalPages}
              job={detail.Jobs?.map((job) => job.id)[0]}
            />
          </div>
        </div>
        <div className="col-span-2">
          {Object.keys(detail).length !== 0 ? (
            <div>
              <div className="border-2 rounded-xl flex m-2 p-4 bg-white">
                <HeaderService
                  firstName={detail.userId?.firstName}
                  lastName={detail.userId?.lastName}
                  imageurl={detail.imageServiceUrl}
                  imagePerfil={detail.userId?.imagePerfil}
                  direccion={detail?.direccion}
                  provincia={detail?.provincia}
                  ciudad={detail?.ciudad}
                  presupuesto={detail.presupuesto}
                />
              </div>
              <div className="border-2 rounded-xl  m-3 p-4 bg-white">
                <DescriptionService detail={detail} />
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center m-5">
                <Loading />
              </div>
            </>
          )}
        </div>
        <div className="col-span-1">
          <Postularse
            firstName={user?.firstName}
            lastName={user?.lastName}
            imageurl={user?.imagePerfil}
            id={detail.id}
          />
        </div>
      </div>
    </>
  );
}
