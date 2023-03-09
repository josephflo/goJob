import { imageUrlNotFound, userFormBackground } from "../../../assets";

export default function HeaderService({
  imageurl,
  tittle,
  firstName,
  lastName,
  direccion,
  provincia,
  ciudad,
  presupuesto,
  imagePerfil,
}) {
  tittle = tittle.toUpperCase();
  return (
    <>
      <div className="grid grid-cols-5 from-indigo-500 rounded pt-2 pb-2">
        {/* <div className="col-span-1">
          <img src={imagePerfil} alt="" className="" />
        </div> */}
        <div className="col-span-1 flex justify-center">
          {imagePerfil === "sin foto" ? (
            <img src={imageUrlNotFound} className=" " alt="" />
          ) : (
            <img src={imagePerfil} alt="" className="p-2" />
          )}
        </div>
        <div className="col-span-4">
          <div className="flex flex-col justify-between p-2">
            <h1 className="px-3 pb-2 text-2xl">{tittle}</h1>
            <h1 className="px-3 pb- text-xl">
              {firstName} {lastName}
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
