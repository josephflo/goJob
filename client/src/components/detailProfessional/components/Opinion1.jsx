import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetail,
  getUserDetailOpinion1,
} from "../../../redux/actions/userActions";

export default function Opinion1({ detail }) {
  const dipatch = useDispatch();

  const userDetailOpinion1 = useSelector((state) => state.userDetailOpinion1);

  useEffect(() => {
    dipatch(getUserDetailOpinion1(detail.idUser));
  }, []);

  return (
    <>
      <h1 className="text-2xl pb-4 font-semibold">
        Opiniones de nuestros usuarios
      </h1>
      <ul className="">
        <>
          <li className=" flex grid grid-cols-5 p-2">
            <div className="col-span-1">
              <img
                src={userDetailOpinion1.imagePerfil}
                className=" h-30 rounded-full"
                alt=""
              />
            </div>
            <div className="col-span-3">
              <p className="text-2xl font-medium">
                {userDetailOpinion1.firstName}
              </p>
              <p className="text-base font-medium text-gray-500 ">
                {detail.date}
              </p>
              <p className=" pt-2 font-medium">{detail.review}</p>
            </div>
          </li>
        </>
      </ul>
    </>
  );
}
