# User

## Como usar el token en las peticiones
```
axios.get('https://ejemplo.com/api/data', {
  headers: {
    'Authorization': 'Aqui va el token'
  }
})
```

## Post
post( http://localhost:3005/user/register )
```
//Ruta para crear Users

//Body

//En la propiedad "jobs" agregamos los id de los Jobs, si no queremos agregar Jobs lo dejamos vacio, pero es obligatorio enviarlo
{
  "user": {  
    "firstName": "Cap",
    "lastName": "America",
    "email": "Cap@gmail.com",
    "user": "cap22",
    "password": "123456",
    "city": "Dubai",
    "phone": 9871256,
    "address": "Av. Troya",
    "role": "admin"
  },
  "jobs": []
}
```

post( http://localhost:3005/user/login )
```
//En esta ruta nos logeamos
//Cuando nos logeamos nos devuelven algunos datos del usuario y tambien el token

//Body
{
    user: "thor22",
    password: "123456",
}
```


## Get
get ( http://localhost:3005/user?page=1&page_size=2 )
```
//En esta ruta traemos todos los user, contiene una paginacion
//Si no enviamos los query adquieren valores por defecto

//Query
{
    page: (numero de la pagina tipo "Number"),
    page_size: (numero de elementos por pagina tipo "Number")
}
```

get ( http://localhost:3005/user?page=1&page_size=2&name=Cap )
```
//En esta ruta traemos todos los user que coincidan con el "name"
//Es obligatorio enviar el query name para traer por nombres

//Query
{
    page: 1,
    page_size: 2,
    name: "Cap"
}
```

get ( http://localhost:3005/user/get/"id" )
```
//En esta ruta traemos todos los detalles de un Usuario
//El parametro "id" se envia por el params (ruta)

```

## Put

put ( http://localhost:3005/user/update )
```
//Ruta para actualizar Users logeado
//Requiere del token

//Body

//En la propiedad "jobs" agregamos los todos los id de los Jobs
{
	user:{
		    firstName: "Cap MODIFY",
            lastName: "America",
            email: "Cap@gmail.com",
            user: "cap22",
            password: "123456",
            city: "Dubai",
            phone: 9871256,
            address: "Av. Troya",
            role: "admin"
	},
	jobs: []  
}
```

"**********************************************************************"

# Rutas para crear, actualizar y eliminar servicios del usuario
"**********************************************************************"

## get service
get ( http://localhost:3005/user/services )
```
//En esta ruta extraemos los services del user con el nos logueamos
//Esta ruta requiere del token


```

## post service
post ( http://localhost:3005/user/service )
```
//En esta creamos un service para el usuario con el que nos logeamos
//Esta requiere del token para funcionar

//Body
{
	tittle: "reparacion carro",
	description: "techo construccion",
	location: "Paris",
	presupuesto: "200",
	jobs: []
}
//en "jobs" enviamos los id de los Jobs
```
## put service
put ( http://localhost:3005/user/service/"idService" )
```
//En esta ruta actualizamos un service del usuario con el que nos logueamos
//requiere del token
//El "id" del service se envia por el params (ruta)

//Body
{
	service: {
        tittle: "construccion techo MODIFY3",
        description: "techo construccion MODIFY",
        location: "Paris",
        presupuesto: "200"
	},
	jobs: [2]
}
//En "service" enviamos los nuevos datos
//En job enviamos los id de los "Job", importante enviar todos los id ya que se elimina todo y se vuelve a crear

```


## Delete service
delete ( http://localhost:3005/user/service/"idService" )
```
//En esta ruta eliminamos un service del usuario que se logeo
//requiere del token

//el "id" del service se envia por el params (ruta)
```
