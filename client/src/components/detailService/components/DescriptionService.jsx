export default function DescriptionService({ detail }) {
    return (
      <>
        <h2 className="font-medium pb-3">Acerca del Servicio</h2>
        {!detail.description ? (
          <h1 className="text-sm">No hay descripción</h1>
        ) : (
          <h1 className="text-sm">{detail.description}</h1>
        )}
        <br/>
        <h2 className="font-medium pb-3">Presupuesto:</h2>
        <h1>${detail.presupuesto}</h1>
      </>
    );
  }
  