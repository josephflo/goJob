import { reviews } from "../../constants/review";

const Reviews = () => {
  return (
    <>
      <h1 className="text-4xl text-center p-6 font-semibold">Nosotros</h1>
      <ul className="grid lg:grid-cols-7 gap-2 p-2 sm:grid-cols-2">
        <li className="col-span-1"></li>
        {reviews.map((rev, index) => (
          <li className=" ">
            <a href={rev.github} alt="" target="_blank">
              <img
                src={rev.image}
                className=" mx-auto rounded-full w-[50%] hover:scale-105 ease-in duration-200"
                alt=""
              />
            </a>
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
