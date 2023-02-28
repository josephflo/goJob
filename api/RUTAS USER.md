# User

## Login Auth 0
post( http://localhost:3005/user/login )

```
Login para auth 0

body
{
  id: "id del usuario"
}
```

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
      "firstName": "Amy",
      "lastName": "Garcia",
      "email": "amygarcia@example.com",
      "user": "amygarcia",
      "password": "123456",
      "phone": 1234567897,
      "role": "professional",

      "provincia": "Buenos Aires",
      "ciudad": "Random",
      "direccion": "789 Oak St",
      "horario": "Tarde"
    },
	"jobs": []  
}

//subir imagen 
post( http://localhost:3005/user/register/img )

//enviamos la imagen por form data

{
  user: mismo nombre que el register
  image: (file)
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

## Delete User

delete( http://localhost:3005/user/delete )
```
//en esta ruta eliminamos un usuario
//requiere del token
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

//En la propiedad "jobs" agregamos los todos los id de los Jobs, no queremos modificar jobs no enviamos ese parametro
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
si queremos eliminar todos los jobs, enviamos array vacio
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
  provincia: "Buenos Aires",
	ciudad: "Rand",
	direccion: "Av. Napoelon"
	jobs: [1]
  
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
  active: false,   //este apartado sirve para ocultar el service

	tittle: "reparacion carro",
	description: "techo construccion",
	location: "Paris",
	presupuesto: "200",
  provincia: "Buenos Aires",
	ciudad: "Rand",
	direccion: "Av. Napoelon"
	jobs: []
}
//Enviamos solo las propiedades que deseamos actualizar
//en el caso de jobs enviamos los "id" de los Jobs
//Si deseamos eliminar todos los jobs enviamos array vacio

```


## Delete service
delete ( http://localhost:3005/user/service/"idService" )
```
//En esta ruta eliminamos un service del usuario que se logeo
//requiere del token

//el "id" del service se envia por el params (ruta)
```


## postular a un servicio

post ( http://localhost:3005/user/service/postular/"idService" )
```
En esta ruta postulamos a un servicio
Requiere del token
Enviar el "id" del servicio en el parametro "idService"

Params
{
  idService: id (id del servicio)
}
```

## Eliminar postulacion a un servicio

delete ( http://localhost:3005/user/service/postular/"idService" )
```
En esta ruta eliminamos la postulacion a un servicio
Requiere del token
Enviar el "id" del servicio en el parametro "idService"

Params
{
  idService: id (id del servicio)
}
```

## Elegir trabajador de un servicio

post ( http://localhost:3005/user/service/elegir/trabajador )
```
En esta ruta elegimos a un trabajador de un servicio
requiere del token
Los datos se envian por el body

Body
{
  trabajador: idUser (id del User quien sera el trabajador),
  service: idService (id del servicio a cual elegiremos un trabajador)
}

```

## Finalizar y calificar servicio

put ( http://localhost:3005/user/service/calificar/"idService" )
```
En esta ruta finalizamos un servicio, y si hay una review lo agregamos
Requiere del token
Enviar el "id" del servicio en el parametro "idService"

Params
{
  idService: id (id del servicio)
}

Body
{
  score: 4,
  review: "Es professional es muy respetuoso y talentoso haciendo su trabajo"
}
```

