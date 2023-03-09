# Get mi Services

## GET mis ofertar de trabajo

get ( /services/MyServices )
```
En esta ruta traemos todo los servicios que cree

query
{
    state: "pendiente",
    tittle: "por tittle"
    fecha_publicacion: "DESC"
}

"fecha_publicaion" es para el orden, "DESC" para mas recientes, "ASC" para mas antiguos
```

## GET mis postulaciones

get ( /services/Postulaciones )
```
En esta ruta traemos todas mis postulaciones, solo apareceran por titulo

query
{
    tittle: "por tittle del service"
    fecha_publicacion: "DESC"

}
"fecha_publicaion" es para el orden, "DESC" para mas recientes, "ASC" para mas antiguos

```

## GET mis postulaciones Mis Trabajos

```
En esta traemos los trabajos en los que estoy, tanto terminados como activos

query
{
    state: "proceso",
    tittle: "por tittle"
    fecha_publicacion: "DESC"

}
"fecha_publicaion" es para el orden, "DESC" para mas recientes, "ASC" para mas antiguos

```