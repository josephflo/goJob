import { Link } from "react-router-dom";
import { imageUrlNotFound } from "../../../assets";

export default function Contact({ detail, arr2 }) {
  return (
    <>
      <div className="border-2 rounded-xl m-3 bg-white pb-4">
        <div className="flex items-center p-7 mt-2 justify-center grid grid-cols-2 rounded pt-4">
          <div className="col-span-1 flex justify-center">
            {detail.imageurl === "sin foto" ? (
              <img src={imageUrlNotFound} className=" " alt="" />
            ) : (
              <img src={detail.imageurl} alt="" className="p-2" />
            )}
          </div>
          <div className="col-span-1 ">
            <p className="p-2 text-right text-amber-400">
              {" "}
              {detail.firstName} {detail.lastName}{" "}
            </p>
            {/* <p className="text-center text-sm">{detail.specificJob2}</p> */}
          </div>
        </div>
        <div className="flex justify-center p-3">
          {/* <svg
            aria-hidden="true"
            className="w-10 h-10 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg> */}
          {/* <h1 className="text-3xl px-4 ">{arr2[5]} </h1>
          <h1 className="">
            {" "}
            <span className="text-3xl pl-4"> {detail.price}</span> USD
          </h1> */}
        </div>
        {/* <div className="flex justify-center p-2">
          <button className="bg-blue-500 w-[80%] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            <i className="fa-solid fa-bolt"></i> Reserva dia de trabajo
          </button>
        </div> */}
        <div className="flex justify-center p-2">
          <button className="bg-transparent w-[80%] hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <i className="fa-regular fa-envelope"></i> Contactar
          </button>
        </div>
        {/* <div className="flex justify-center p-2 ">
          <button className="bg-transparent w-[80%] hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <i className="fa-regular fa-heart"></i> Guardar en mi lista
          </button>
        </div> */}
        <div className="flex justify-center text-center p-2">
          <Link
            to="/professional"
            className="bg-transparent w-[80%] hover:bg-orange-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            <button>Volver</button>
          </Link>
        </div>
      </div>
    </>
  );
}
