import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import LandingPage from "./components/landingPage/landingPage";
import FormContact from "./containers/Form/FormContact";
import Navbar from "./components/navbarPortada/NavBar";
import Professionals from "./components/Profesional/Professionals";
import DetailCard from "./components/DetailCard/detailCard";
import Admin from "./components/Dashboard/Admi";
import Private from "./components/auth0/Private"


// Containers
import Register from "./containers/register/Register";
import Login from "./containers/login/Login";
import AddJob from "./containers/addJob/AddJob";

import axios from "axios";
import Users from "./components/Users/Users";
import { useEffect } from "react";
import { getService, getUsers } from "./redux/actions/actions";
import { useDispatch } from "react-redux";
import Services from "./components/services/Services";
axios.defaults.baseURL = "http://localhost:3005/";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers()); // Cambiar cuando está posisionado en admin
    dispatch(getService(1, 5)); // Cambiar cuando se presiona onClick() en boton Services (NavBar)
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Components */}
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/contact" element={<FormContact/>} />
          <Route exact path='/service' element={<Professionals/>} />
          <Route exact path="/user" element={<Users/>} />
          <Route exact path="/service" element={<Services/>} />
          <Route path="/user/profile" element={<Private/>} />
          <Route path='/admin' element={Admin} />

          <Route
            path="/detail/:id"
            render={({ match }) => <DetailCard id={match.params.id} />}
          />
          {/* Containers */}
          <Route exact path="/user/register" element={<Register/>} />
          <Route path="/user/login" element={<Login/>} />
          <Route path="/job" element={<AddJob/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
