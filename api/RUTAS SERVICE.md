# Service

## Get

get ( http://localhost:3005/service?page=1&page_size=5 )
```
//En esta ruta nos traemos todos los services que existen (de todos los users)
//Contiene una paginacion

//Query
{
    page: 1,
    page_size: 2
}
```

get ( http://localhost:3005/service/"idService" )
```
//En esta ruta nos traemos un service en especifico
//el "id" del Service se envia por el params (ruta)

```

## Filtros para GET

get ( http://localhost:3005/service?page=1&page_size=5 )

```
//En esta ruta nos traemos todos los services que existen (de todos los users)
//Contiene una paginacion

//pueden hacer peticiones con Querys, pueden combiar los filtros a travez de esos querys, si no desean incluir un filtro no envian el query
//Tambien podemos ordenar el resultado de acuerdo al rating

Ejemplo:

//este es un filtro de 4, job, state, tittle, provincia, ciudad
//Query
{
    page: 1,
    page_size: 2,
    job: 1 (id del Job),
    state: "pendiente",
    tittle: "cortinas",
    provincia: "Buenos Aires",
    ciudad: "random",

    orderFecha: "DESC"
}
//El "orderFecha" tiene dos posibles valores:
//  "DESC" : Trae los mas recientes
// "ASC" : Trae los mas antiguos

//este es un filtro doble, state y job
//Query
{
    page: 1,
    page_size: 2,
    state: "pendiente
    job: 1
}

//este es uno sin nigun filtro
//Query
{
    page: 1,
    page_size: 2,

}


```


# Mis servicios

## mis ofertas de trabajo

get ( http://localhost:3005/user/services/MyServices )
```
En esta ruta traemos todas las ofertas del trabajo del usuario logeado
podemos traer por estado y nombre

Query
{
    state: "terminado",
    tittle: "tittle del servicio",
    fecha_publicacion: "orden de fecha de publicasion "DESC" O "ASC"
}
```

get ( http://localhost:3005/user/services/MyTrabajos )
```
En esta traemos los servicios en los que estoy trabajando o trabaje
Podemos filtrar por estado

Query
{
    state: "terminado",
    tittle: "tittle del servicio",
    fecha_publicacion: "orden de fecha de publicasion "DESC" O "ASC"

}

```

get ( http://localhost:3005/user/services/Postulaciones )
```
En esta traemos los servicios a los que postule

Query
{
    tittle: "tittle del servicio",
    fecha_publicacion: "orden de fecha de publicasion "DESC" O "ASC"
}
```
