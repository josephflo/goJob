export function convertirProvinciasAObjeto(provincias) {
    const resultado = {};
    provincias.forEach((provincia) => {
      const ciudades = provincia.ciudad.map((ciudad) => ciudad.name);
      resultado[provincia.name] = ciudades;
    });
    return resultado;
  }
  