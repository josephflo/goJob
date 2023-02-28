import { NavLink } from "react-router-dom";

function ProfessionalCard({
  id,
  firstName,
  lastName,
  imageurl,
  contrat,
  description,
}) {
  return (
    <div className="bg-gray-100 p-4">
      <div className="box-border grid grid-cols-3 bg-white border-solid-gray-300 rounded-sm p-4">
        <div className="col-span-2 w-72">
          <p className="font-sans pt-1 not-italic font-medium text-gray-700">
            Datos del profesional
          </p>
          <p className="text-sm">
            Name: {firstName} {lastName}
          </p>
          <p className="font-sans pt-1 not-italic font-medium text-gray-700">
            Descripción
          </p>
          {!description ? (
            <h1 className="text-sm">No hay descripción</h1>
          ) : (
            <h1 className="text-sm">{description}</h1>
          )}
        </div>
        <div className="col-span-1 gap-2 flex flex-col justify-center items-end">
          <p>
            <NavLink to={`/professional/detail/${id}`}>
              <button className=" w-20 h-10 rounded-lg bg-gray-300">
                Perfil
              </button>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalCard;
