export function FechaFormateada(modalService) {
  const fecha = new Date(modalService);
  const opciones = { day: "numeric", month: "numeric", year: "numeric" };
  const fechaFormateada = fecha.toLocaleDateString("es-ES", opciones);

  return fechaFormateada;
}
