export default function FilterServiceCard({ filter }) {
  const {
 
    tittle,
   
    description,
    
    presupuesto,
  
    Jobs,
    userId,
  } = filter;
  return (
    <>
      <div className=" sticky m-5">
        <div className="grid grid-cols-3 box-border p-3 w-70 top-96 bg-dimBlue border-solid-gray-300 rounded-2xl">
          <div className="col-span-2 w-72">
            <h1 className=" w-38 h-7 left-96 top-9 font-sans text-xl not-italic text-black">
              {tittle}
              {/* <i className="fa-regular fa-square-check text-green-700"></i> */}
            </h1>

            <p className="font-sans not-italic font-normal text-base text-black">
              Descripción del trabajo:
              {description}
            </p>
            <hr className="border border-black mt-2 mb-2"></hr>
            <h1>Perfil del trabajador: </h1>
            {Jobs.map((job) => (
              <>
                <h1>{job.name}</h1>
              </>
            ))}
            <hr className="border border-black mt-2 mb-2"></hr>
            <h1>Usuario que pide: </h1>
            <p>
              {" "}
              {userId.firstName} {userId.lastName} - user: {userId.user}
            </p>
          </div>
          <div className=" col-span-1 ">
            {/* <p className="  h-9 left-2/3 top-9 font-sans not-italic font-normal text-2xl text-black">
            <i className="fa-solid fa-star text-yellow-400"></i>
            {ratings}4.5
          </p> */}

            <p className="h-9 left-2/3 top-9 text-right font-sans not-italic font-normal text-2xl text-black">
              ${presupuesto}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
