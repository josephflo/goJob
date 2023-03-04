import React from "react";
import { detail } from "../../constants/detailCard";
import Navbar from "../navbarPortada/NavBar";

export default function DetailUser({ id }) {
  const array = detail.ratings;
  //* in: array of ratings -> out: arr[0]=1's, arr[1]=2's, ..., arr[5]=average*/
  // in: [1, 2, 5, 5, 2, 3, 1, 4, 4, 4]
  // out: [2, 2, 1, 3, 2, avg ]
  const arr = [];
  let arr2 = [];

  (() => {
    for (let i = 1; i <= 5; i++) arr.push(array.filter((x) => x === i).length);
    arr2 = arr.map((num) =>
      ((num * 100) / arr.reduce((a, b) => a + b, 0)).toFixed(0)
    );
    const avg = array.reduce((a, b) => a + b, 0) / array.length || 0;
    arr2.push(avg.toFixed(0));
    return;
  })();

  const items1 = Array.from({ length: arr2[5] });
  const items2 = Array.from({ length: 5 - arr2[5] });

  return (
    <>
      <div className="p-3 sticky top-0 z-50 bg-white ">
        <Navbar />
      </div>
      <div className="grid grid-cols-3 gap-3 mx-6 bg-gray-200">
        <div className="col-span-2">
          <div className="border-2 rounded flex m-3 p-4 bg-white">
            <div>
              <img src={detail.image} alt="" className="p-2" />
            </div>
            <div className="flex flex-col justify-between p-5">
              <p className="px-3">
                {" "}
                {detail.firstName} {detail.lastName}{" "}
                <i className="fa-regular fa-square-check"></i>
              </p>
              <p>
                {" "}
                <i className="fa-solid fa-user px-3"></i>
                {detail.job}
              </p>
              <p>
                {" "}
                <i className="fa-solid fa-wrench px-3"></i>
                {detail.specificJob}
              </p>
              <p>
                {" "}
                <i className="fa-solid fa-medal px-3"></i>
                {detail.numberJobs} Trabajos
              </p>
            </div>
          </div>
          <div className="border-2 rounded  m-3 p-4 bg-white">
            <h2 className="font-medium pb-3">Acerca del profesional</h2>
            <p>{detail.description}</p>
          </div>
          <div className="border-2 rounded flex items-center m-3 bg-white">
            <div className="w-[35%] ">
              <p className="text-6xl text-center font-medium text-gray-900 dark:text-white ">
                {arr2[5]}
              </p>

              <div className="flex justify-center m-3 ">
                {items1.map((_, index) => (
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                {items2.map((_, index) => (
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-300 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">
                {detail.ratings.length} valoraciones
              </p>
            </div>
            <div className="w-[65%]  ">
              <div className="flex justify-center mt-4 ">
                <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
                  5 estrellas
                </span>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className={`h-5 bg-yellow-400 rounded `}
                    style={{ width: `${arr2[4]}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
                  ({arr[4]})
                </span>
              </div>
              <div className="flex justify-center mt-4">
                <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
                  4 estrellas
                </span>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className={`h-5 bg-yellow-400 rounded `}
                    style={{ width: `${arr2[3]}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
                  ({arr[3]})
                </span>
              </div>
              <div className="flex justify-center mt-4">
                <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
                  3 estrellas
                </span>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className={`h-5 bg-yellow-400 rounded `}
                    style={{ width: `${arr2[2]}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
                  ({arr[2]})
                </span>
              </div>
              <div className="flex justify-center mt-4">
                <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
                  2 estrellas
                </span>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className={`h-5 bg-yellow-400 rounded `}
                    style={{ width: `${arr2[1]}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
                  ({arr[1]})
                </span>
              </div>
              <div className="flex justify-center mt-4">
                <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
                  1 estrellas
                </span>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className={`h-5 bg-yellow-400 rounded `}
                    style={{ width: `${arr2[0]}%` }}
                  />
                </div>
                <span className="text-sm font-medium pb-4 text-gray-500 dark:text-blue-500">
                  ({arr[0]})
                </span>
              </div>
            </div>
          </div>
          <div className="border-2 rounded m-3 p-4 bg-white">
            <h1 className="text-2xl pb-4 font-semibold">
              Opiniones de nuestros usuarios
            </h1>
            <ul className="">
              {detail.reviews.map((rev, index) => (
                <li className=" flex grid grid-cols-4 p-2">
                  <div className="col-span-1">
                    <img src={rev.image} className=" h-32" alt="" />
                  </div>
                  <div className="col-span-3">
                    <p className="text-2xl font-medium">{rev.name}</p>
                    <p className="text-base font-medium text-gray-500 ">
                      {rev.date}
                    </p>
                    <p className=" pt-2 font-medium">{rev.review}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-1">
          <div className="border-2 rounded-xl m-3 bg-white pb-4">
            <div className="flex grid grid-cols-2 bg-gradient-to-b from-indigo-500 rounded pt-4">
              <img src={detail.image} alt="" className=" rounded-full scale-75" />
              <div className="col-span-1 ">
                <p className="p-2 text-center text-amber-400">
                  {" "}
                  {detail.firstName} {detail.lastName}{" "}
                </p>
                <p className="text-center text-sm">{detail.specificJob2}</p>
              </div>
            </div>
            <div className="flex justify-center p-3">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <h1 className="text-3xl px-4 ">{arr2[5]} </h1>
              <h1 className="">
                {" "}
                <span className="text-3xl pl-4"> {detail.price}</span> USD
              </h1>
            </div>
            <div className="flex justify-center p-2">
              <button className="bg-blue-500 w-[80%] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                <i className="fa-solid fa-bolt"></i> Reserva dia de trabajo
              </button>
            </div>
            <div className="flex justify-center p-2">
              <button className="bg-transparent w-[80%] hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <i className="fa-regular fa-envelope"></i> Enviar mensaje
              </button>
            </div>
            <div className="flex justify-center p-2 ">
              <button className="bg-transparent w-[80%] hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <i className="fa-regular fa-heart"></i> Guardar en mi lista
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
