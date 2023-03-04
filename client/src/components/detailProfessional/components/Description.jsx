export default function Description({ detail }) {
  return (
    <>
      <h2 className="font-medium pb-3">Acerca del profesional</h2>
      {!detail.description ? (
        <h1 className="text-sm">No hay descripción</h1>
      ) : (
        <h1 className="text-sm">{detail.description}</h1>
      )}
    </>
  );
}
