import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { detail } from "../../constants/detailCard";
import reviwToDetailUser from "../../helpers/reviewToDetailUser";
import { getProfessionalById } from "../../redux/actions/professionalActions";
import {
  getUserDetail,
  getUserReviewDetails,
} from "../../redux/actions/userActions";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Header from "./components/Header";
import Opinion from "./components/Opinion";
import Rating from "./components/Rating";
// import Navbar from "../navbarPortada/NavBar";

export default function DetailProfessional() {
  const params = useParams();
  const { id } = params;

  const dispatch = useDispatch();

  const user = useSelector((state) => state.userLogin);

  // detail_ : get detail professional del Back
  // const [details_, setDetails_] = useState(detail_);

  let reviewsDetails = useSelector((state) => state.userReviewDetail);
  const detail_ = useSelector((state) => state.professionalDetail);
  const idUser = detail_.rating?.map((obj) => obj.idUser);

  useEffect(() => {
    if (reviewsDetails?.length === 0) {
      dispatch(getUserReviewDetails(idUser));
    }
  }, [dispatch, idUser, reviewsDetails]);

  useEffect(() => {
    dispatch(getProfessionalById(id));
  }, [dispatch, id]);

  console.log(reviewsDetails, detail_.rating);

  const combinedArr = reviewsDetails?.map((obj) => {
    const matchingObj = detail_.rating?.find((o) => o.idUser === obj.id);
    return {
      id: obj.id,
      fecha_register: obj.fecha_register,
      firstName: obj.firstName,
      lastName: obj.lastName,
      imagePerfil: obj.imagePerfil,
      review: matchingObj?.review,
      date: matchingObj?.date,
    };
  });

  console.log(combinedArr);

  // useEffect(() => {
  //   dispatch(getProfessionalById(id));
  // }, []);

  // useEffect(() => {
  //   if (idUser?.length) dispatch(getUserReviewDetails(idUser));
  // }, [dispatch, idUser]);

  // useEffect(() => {
  //   dispatch(getUserDetail());
  // }, []);

  // RATING
  // detail : Solo para el maquetado de /constants/detailCard
  const array = detail_.rating?.map((obj) => obj.rating);

  const [arr, arr2] = reviwToDetailUser(array);
  const items1 = Array.from({ length: arr2[5] });
  const items2 = Array.from({ length: 5 - arr2[5] });

  const detailUser = useSelector((state) => state.userDetail);

  return (
    <>
      <div class="sm:grid grid-cols-1 lg:grid grid-cols-5 gap-3 bg-gray-200">
        <div className="col-span-1"></div>
        <div class="col-span-2">
          <div class="border-2 rounded flex m-3 p-4 bg-white">
            <Header detail={detail_} />
          </div>
          <div className="border-2 rounded  m-3 p-4 bg-white">
            <Description detail={detail_} />
          </div>

          <div className="border-2 rounded flex items-center m-3 bg-white">
            <Rating
              array={array}
              arr2={arr2}
              arr={arr}
              items1={items1}
              items2={items2}
            />
          </div>

          <div className="border-2 rounded m-3 p-4 bg-white">
            <Opinion detail={combinedArr} />
          </div>
          {/*}
           */}
        </div>
        <div className="col-span-1">
          <Contact detail={user} arr2={arr2} />
        </div>
      </div>
    </>
  );
}
