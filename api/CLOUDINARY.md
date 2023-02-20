En la ruta de services encontraras la conexion a cloudinary

en la funcion cloudinary.config se configura la conexion donde sea que lo uses debes importarla
para usar las funciones que nos manda la api.

debes crearte una cuenta y en el area de dashboard vas a encontrar los datos para llenarla

![Ejemplo de donde obtener la ruta](/api/uploads/Screenshot_115.png)

de ahi obtienes el api para subir directo a cloudinary

en el mismo archivo viene la funcion para uploadImage si quieres subir una imagen directo cambia el filepath por la direccion del archivo de la imagen que quieres y despues debes correrla en node el nombre del archivo y se subira la imagen ahora para obtener la direccion donde se guardo usa el console log comentado y asi ver la url y poder usarla

he creado rutas las cuales no son necesariamente funcionales para el front del usuario pero si pueden ser utiles en algun
momento para el dashboard del admin, sirven para ver todas las imagenes, imagenes por folder, subir imagenes, o borrarlas
todas las rutas llevan cloudinary antes ejemplo cloudinary/uploadImage

/uploadImage

{
  image:"ruta del archivo que quieres subir"
}

puedes utilizar para esto tambien el multipart/form data para subirlo 
en parametro das image y cargas la imagen para subirla

/deleteImage

{

"publicId":"la public id de la imagen que quieres borrar"

}

/
la ruta directa nos mostrara todas las imagenes en el servidor es una ruta get

/imagefilter/:foldername
es un tipo get y buscara todas las imagenes que hayan en ese folder si no hay nos mostrara 0 

la logica del front se hace atravez de las rutas tanto putuser como create user, asi que estas rutas no se usan para esos
fines solo son para que se pueda manejar mas como admin el api

