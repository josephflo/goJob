En la ruta de services encontraras la conexion a cloudinary

en la funcion cloudinary.config se configura la conexion donde sea que lo uses debes importarla
para usar las funciones que nos manda la api.

debes crearte una cuenta y en el area de dashboard vas a encontrar los datos para llenarla

![Ejemplo de donde obtener la ruta](/api/uploads/Screenshot_115.png)

de ahi obtienes el api para subir directo a cloudinary

en el mismo archivo viene la funcion para uploadImage si quieres subir una imagen directo cambia el filepath por la direccion del archivo de la imagen que quieres y despues debes correrla en node el nombre del archivo y se subira la imagen ahora para obtener la direccion donde se guardo usa el console log comentado y asi ver la url y poder usarla


