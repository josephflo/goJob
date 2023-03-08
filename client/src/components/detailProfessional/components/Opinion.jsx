import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserDetail } from "../../../redux/actions/userActions";

export default function Opinion({ detail }) {
  // const dipatch = useDispatch();

  // useEffect(() => {
  //   dipatch(getUserDetail(idUser));
  // });

  return (
    <>
      <h1 className="text-2xl pb-4 font-semibold">
        Opiniones de nuestros usuarios
      </h1>
      <ul className="">
        {detail.map((rev, index) => (
          <>
            {rev.firstName ? (
              <>
                <li className=" flex grid grid-cols-5 p-2">
                  <div className="col-span-1">
                    <img
                      src={rev.imagePerfil}
                      className=" h-30 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="col-span-3">
                    <p className="text-2xl font-medium">{rev.firstName}</p>
                    <p className="text-base font-medium text-gray-500 ">
                      {rev.date}
                    </p>
                    <p className=" pt-2 font-medium">{rev.review}</p>
                  </div>
                </li>
              </>
            ) : (
              <></>
            )}
          </>
        ))}
      </ul>
    </>
  );
}
