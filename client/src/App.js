
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import NavBarHome from "./components/navbarHome/navBarHome";
import NavbarInicioSecion from "./components/navbarInicioSesion/NavbarInicioSecion";
import Navbar from "./components/navbarPortada/NavBar";
import Home from "./components/Home/Home";
import styles from "./style";


function App() {
  return (
   //<>
     // <div className="w-[80%] p-4 rounded-[20px] bg-color1">
       // <h1 className="text-dimBlue">Hola Mundo</h1>
      //</div>
      //<h2 className={styles.boxWidth}>Prueba</h2>
    //</>
    <BrowserRouter>
    <Navbar/>
    <div className="App">
      <Switch>
        <Route exact path='/' component= {Home} />
    </Switch>
  </div>
  </BrowserRouter>

  );
}

export default App;
