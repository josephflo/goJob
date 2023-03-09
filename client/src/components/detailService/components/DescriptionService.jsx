import { userFormBackground } from "../../../assets";
import { FechaFormateada } from "../../../helpers/fechaFormateada";

export default function DescriptionService({ detail }) {
  const fecha = FechaFormateada(detail.fecha_publicacion);
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <h2 className="font-medium text-lg pb-1">Acerca del Servicio</h2>
          {!detail.description ? (
            <h1 className="text-base">No hay descripción</h1>
          ) : (
            <h1 className="text-base">{detail.description}</h1>
          )}
          <h2 className="font-medium text-lg pt-1">Fecha de publicación</h2>
          <h2 className="text-base">{fecha}</h2>
        </div>
        <div className="col-span-1">
          <h2 className="font-medium pb-1 text-lg">Presupuesto:</h2>
          <h2 className="text-base">${detail.presupuesto}</h2>
        </div>
      </div>
      <h2 className="font-medium text-lg pt-3 pb-3">Imágenes del servicio</h2>
      <div className="h-[500px]">
        {detail.imageServiceUrl === "sin foto" ? (
          <img
            src={userFormBackground}
            className="w-full h-full object-center object-cover"
            alt=""
          />
        ) : (
          <img
            src={detail.imageServiceUrl}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        )}
      </div>
      <br />
    </>
  );
}
