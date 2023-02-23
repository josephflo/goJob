Leer y buscar documentacion para el modularizado del proyecto

- https://blog.webdevsimplified.com/2022-07/react-folder-structure/

<pre>
## src folder

| # Se carga la imagen de HomePage y Reviews
├── assets/
│  └── index.js
│
| # Implementacion de Auth0  
├── authentication/
│  ├── components/
│  └── Private.jsx
│
| # Partes de React UI
├── components/
│  ├── footer/
│  ├── navBar/
│  |  ├── navBarHome/
│  |  ├── navBarInicioSesion/
│  |  └── navBarPortada/
│  └── reviews/
│
| # json en donde están objetos para probar los componentes, cards, ets
├── constants/
│
| # Js scripts que se conectan con Redux
├── containers/
│  ├── createJob/
│  |   ├── jobs/
│  |   ├── modalJob/
│  |   └── CreateJob.jsx
│  ├── filters/
│  |   └── Filter.jsx
│  ├── forms/
│  |   ├── formContact/
│  |   ├── formCreateService/
│  |   ├── formCreateUser/
│  |   └── formHomePage/
│  ├── login/
│  └── register/
│
| # Funciones para la simplificacion de codigo (usar si es necesario)
├── helpers/
│
| # Paginas de la web
├── pages/
│  ├── homePage/
│  ├── jobPage/
│  |   └── jobCard/
│  ├── servicesPage/
│  |   └── serviceCard/
│  |   └── services/
│  └── usersPage/
│      └── userCard/
│
| # Redux
├── redux/
│  ├── actions/
│  ├── constants/
│  ├── reducers/
│  └── store.js
│
├── App.js
└── index.js
<pre>
