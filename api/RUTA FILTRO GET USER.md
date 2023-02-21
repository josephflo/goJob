# GET USER CON FILTROS

## GET

get ( http://localhost:3005/user?page=1&page_size=2 )
```
//En esta ruta traemos todos los user, contiene una paginacion
//Podemos enviar querys para los filtros, si no deseamos filtrar un propiedad no enviamos su query

Ejemplo

//En este filtro filtramos por name y job
//Query
{
    page: 1,
    page_size: 2,
    name: "Cap",
    job: 2 (id del Job),
}

//En este filtro filtramos solo por name
//Query
{
    page: 1,
    page_size: 2,
    name: "Cap"
}

//En este no aplicamos ningun filtro
//Query
{
    page: 1,
    page_size: 2
}
```