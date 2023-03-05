import { imageUrlNotFound, userFormBackground } from "../../../assets";

export default function HeaderService({
  imageurl,
  firstName,
  lastName,
  direccion,
  provincia,
  ciudad,
  presupuesto,
}) {
  return (
    <>
      <div className="flex flex-col justify-between p-5">
        <h1 className="px-3">
          {firstName} {lastName}
          {/* <i className="fa-regular fa-square-check "></i> */}
        </h1>
        <h2 className="px-3">
          <i className="fa-sharp fa-solid fa-location-dot"></i> {provincia},{" "}
          {ciudad}, {direccion}
        </h2>
      </div>
    </>
  );
}
