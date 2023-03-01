import { reviews } from "../../constants/review";

const Reviews = () => {
  return (
    <>
      <h1 className="text-4xl text-center p-6 font-semibold">
        Opiniones de nuestros usuarios
      </h1>
      <ul className="grid lg:grid-cols-8 gap-2 p-2 sm:grid-cols-2">
        {reviews.map((rev, index) => (
          <li className=" ">
            <img
              src={rev.image}
              className=" mx-auto scale-100 hover:scale-105 ease-in duration-200"
              alt=""
            />
            <div className=" w-40 mx-auto">
              <p className=" text-center pt-2 font-medium">{rev.review}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
