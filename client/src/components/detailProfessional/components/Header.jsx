import { imageUrlNotFound } from "../../../assets";

export default function Header({ detail }) {
  return (
    <>
      <div>
        {detail.imagePerfil === "sin foto" ? (
          <img
            src={imageUrlNotFound}
            className="w-[80px] lg:w-[160px]"
            alt=""
          />
        ) : (
          <img src={detail.imagePerfil} alt="" className="p-2" />
        )}
      </div>
      <div className="flex flex-col justify-between p-5">
        <p className="px-3">
          {" "}
          {detail.firstName} {detail.lastName}{" "}
          <i className="fa-regular fa-square-check"></i>
        </p>
        <p>
          {" "}
          {/* <i className="fa-solid fa-user px-3"></i>
          {detail.job} */}
        </p>
        <p>
          {" "}
          {/* <i className="fa-solid fa-wrench px-3"></i>
          {detail.specificJob} */}
        </p>
        <p>
          {" "}
          {/* <i className="fa-solid fa-medal px-3"></i>
          {detail.numberJobs} Trabajos */}
        </p>
      </div>
    </>
  );
}
