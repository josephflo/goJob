# Job
Es necesario agregar Jobs para poder trabajar con los Users Y Services

## Post
post (  http://localhost:3001/job/create )
```
//Esta ruta es para crear Jobs

body
{
  "name": "Albañil",
  "description": "Construye casas"
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



