# Job
Es necesario agregar Jobs para poder trabajar con los Users Y Services

## Creacion de varios Jobs para pruebas

post ( http://localhost:3005/job/hardcore )
```
En esta creamos varios job para pruebas de desarrollo
No requiere enviar nada mas
```

## Post
post (  http://localhost:3001/job )
```
//Esta ruta es para crear Jobs

body
{
    name: "Albañil",
    description: "Construye casas"
}

```

## Put
put ( http://localhost:3005/job/"idJob" )
```
//Esta ruta es para actualizar Jobs

recibe solo el idJob en el params (ruta)
```

## Delete
delete ( http://localhost:3005/job/"idJob" )
```
//Esta ruta es para elimnar Jobs

recibe solo el idJob en el params (ruta)
```



