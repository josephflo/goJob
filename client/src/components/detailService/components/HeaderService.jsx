import { imageUrlNotFound } from "../../../assets";

export default function HeaderService( {imageurl, firstName, lastName, direccion, provincia, ciudad }) {
 
  return (
    <>
      <div>
        {!imageurl ? (
          <img src={imageUrlNotFound} className="w-[160px]" alt="" />
        ) : (
          <img src={imageurl} alt="" className="p-2" />
        )}
      </div>
      <div className="flex flex-col justify-between p-5">
        <h1 className="px-3">
         {firstName} {lastName} <i className="fa-regular fa-square-check "></i>
        </h1>
        <h2 className="px-3"><i class="fa-sharp fa-solid fa-location-dot"></i> {provincia}, {ciudad}, {direccion} 
        </h2>
      </div>
    </>
  );
}
