import { imageUrlNotFound } from "../../../assets";

export default function HeaderService( {imageServiceUrl, firstName, lastName, direccion, provincia, ciudad, tittle }) {
 
  return (
    <>
    <div className='grid grid-cols-3 gap-3'>
      <div className='col-span-1'>
         {imageServiceUrl=== "sin foto" ? (
          <img src={imageUrlNotFound} className="w-[160px]" alt="" />

        ) : ( 
          <img src={imageServiceUrl} alt="" className="p-1" />

         )} 
      </div>
      <div className="flex flex-col items-start  justify-center col-span-2">
        <div>
          <h1 className="text-2xl h-20 font-medium text-navy-700 dark:text-white ">
         {tittle} 
        </h1>
        </div>
        <div>
          <h1 className="text-md h-10  text-navy-700 dark:text-white ">
         {firstName} {lastName} <i className="fa-regular fa-square-check "></i>
        </h1>
        </div>
        <div>
        <h1 className="text-md h-10  text-navy-700 dark:text-white "><i className="fa-sharp fa-solid fa-location-dot"></i> {provincia}, {ciudad}, {direccion} 
        </h1>
        </div>
      </div>
    </div>
    </>
  );
}
