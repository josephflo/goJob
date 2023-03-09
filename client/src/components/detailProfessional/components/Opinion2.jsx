import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetail,
  getUserDetailOpinion2,
} from "../../../redux/actions/userActions";

export default function Opinion2({ detail }) {
  const dipatch = useDispatch();
  const userDetailOpinion2 = useSelector((state) => state.userDetailOpinion2);

  useEffect(() => {
    dipatch(getUserDetailOpinion2(detail.idUser));
  }, []);

  return (
    <>
      <ul className="">
        <>
          <li className=" flex grid grid-cols-5 p-2">
            <div className="col-span-1">
              <img
                src={userDetailOpinion2.imagePerfil}
                className=" h-30 rounded-full"
                alt=""
              />
            </div>
            <div className="col-span-3">
              <p className="text-2xl font-medium">
                {userDetailOpinion2.firstName}
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
