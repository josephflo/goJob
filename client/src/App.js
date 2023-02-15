
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import NavBarHome from "./components/navbarHome/navBarHome";
import NavbarInicioSecion from "./components/navbarInicioSesion/NavbarInicioSecion";
import Navbar from "./components/navbarPortada/NavBar";
import Home from "./components/Home/Home";

import FormContact from "./components/Form/FormContact";


function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    <div className="App">
      <Switch>
         <Route exact path='/' component= {Home} />
         <Route exact path='/contact' component= {FormContact} />

    </Switch>
  </div>
  </BrowserRouter>

  );
}

export default App;
