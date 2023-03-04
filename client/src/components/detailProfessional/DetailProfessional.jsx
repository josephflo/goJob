import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { detail } from "../../constants/detailCard";
import reviwToDetailUser from "../../helpers/reviewToDetailUser";
import { getProfessionalById } from "../../redux/actions/professionalActions";
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

  // detail_ : get detail professional del Back
  const detail_ = useSelector((state) => state.professionalDetail);

  useEffect(() => {
    dispatch(getProfessionalById(id));
  }, []);

  // detail : Solo para el maquetado de /constants/detailCard
  const array = detail.reviews.map((obj) => obj.rating);

  const [arr, arr2] = reviwToDetailUser(array);
  const items1 = Array.from({ length: arr2[5] });
  const items2 = Array.from({ length: 5 - arr2[5] });

  const detailUser = useSelector((state) => state.userDetail);

  return (
    <>


      <div class="sm:grid grid-cols-1 lg:grid grid-cols-3 gap-3 bg-gray-200">
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
            <Opinion detail={detail} />
          </div>
          {/*}
           */}
        </div>
        <div className="col-span-1">
          <Contact detail={detail_} arr2={arr2} />
        </div>
      </div>
    </>
  );
}