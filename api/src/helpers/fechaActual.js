function fechaActual() {
    const fechaActual = new Date();
    const anio = fechaActual.getFullYear();
    const mes = ('0' + (fechaActual.getMonth() + 1)).slice(-2);
    const dia = ('0' + fechaActual.getDate()).slice(-2);
  
    return `${anio}-${mes}-${dia}`;
}

module.exports = {
    fechaActual
}