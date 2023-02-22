import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import LandingPage from "./components/landingPage/landingPage";
import FormContact from "./containers/Form/FormContact";
import LandingPage from "./components/landingPage/landingPage";
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
import { useDispatch, useSelector } from "react-redux";
import Services from "./components/services/Services";
import FormCreateUser from "./components/FormCreateUser/FormCreateUser";
import Jobs from "./components/jobs/Jobs";
import Job from "./components/CardJobs/Job";
import FormCreateService from "./components/FormCreateService/FormCreateService";


axios.defaults.baseURL = "http://localhost:3005/";

function App() {
  const dispatch = useDispatch();
  let users = useSelector((state) => state.users);
  useEffect(() => {
    // dispatch(getUsers()); // Cambiar cuando está posisionado en admin
    // dispatch(getService(1, 5)); // Cambiar cuando se presiona onClick() en boton Services (NavBar)
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
          <Route exact path="/" element={LandingPage} />
          <Route path="/contact" element={FormContact} />
          <Route exact path="/user" element={Users} />
          <Route path="/service" element={Professionals} />
          <Route path="/job" element={Job} />
  <Route path="/createService" element={FormCreateService} /> 

          {/* <Route path="/createPablo" element={FormCreateUser} /> */}
          <Route
            path="/detail/:id"
            render={({ match }) => <DetailCard id={match.params.id} />}
          />
          
          {/* ADMIN */}
          <Route exact path="/admin" element={Admin} />
          <Route exact path="/admin/service" element={Services} />
          <Route exact path="/admin/job" element={AddJob} />
          
          {/* Containers */}
          <Route exact path="/user/register" element={<Register/>} />
          <Route path="/user/login" element={<Login/>} />
          <Route path="/job" element={<AddJob/>} />
          <Route exact path="/user/register" component={Register} />
          <Route path="/user/login" element={Login} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
