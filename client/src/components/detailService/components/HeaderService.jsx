import { imageUrlNotFound, userFormBackground } from "../../../assets";

export default function HeaderService({
  imageurl,
  firstName,
  lastName,
  direccion,
  provincia,
  ciudad,
  presupuesto,
  imagePerfil,
}) {
  return (
    <>
      <div className="grid grid-cols-5 from-indigo-500 rounded pt-4">
        <div className="col-span-1">
          <img src={imagePerfil} alt="" className="" />
        </div>
        <div className="col-span-4">
          <div className="flex flex-col justify-between p-2">
            <h1 className="px-3">
              {firstName} {lastName}
              {/* <i className="fa-regular fa-square-check "></i> */}
            </h1>
            <h2 className="px-3">
              <i className="fa-sharp fa-solid fa-location-dot"></i> {provincia},{" "}
              {ciudad}, {direccion}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
