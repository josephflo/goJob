//eslint-disable react-hooks/rules-of-hooks

// Dependencies
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// Authentication

//import Private from "./authentication/Private";

// Pages
import HomePage from "./pages/homePage/HomePage";
import ServicesPage from "./pages/servicesPage/ServicesPage";

import UsersPage from "./pages/usersPage/UsersPage";
import Dashboard from "./pages/AdminDashboard/dashboard";

// Components
import DetailProfessional from "./components/detailProfessional/DetailProfessional";
import DetailComun from "./components/detailComun/DetailComun";
import ModalUser from "./pages/usersPage/modalUser/ModalUser";

// Containers
import FormContact from "./containers/forms/formContact/FormContact";
import FormCreateService from "./containers/forms/formCreateService/FormCreateService";
import CreateJob from "./containers/createJob/CreateJob";
import FormCreateUser from "./containers/forms/formCreateUser/FormCreateUser";
import UsersAdmin from "./components/DashboardPrueba/UsersAdmin.jsx";
import FilterService from "./containers/filters/FilterService";

// Actions
import { getJobs } from "./redux/actions/jobActions";
import { createAndLogin, getUsers } from "./redux/actions/userActions";
import JobAdmin from "./components/DashboardPrueba/JobAdmin";
import FormCreateProfessional from "./containers/forms/formCreateUser/formCreateProfessional/FormCreateProfessional";

import { DashboardContent } from "./pages/AdminDashboard/dashboardContent";
import ModifyUser from "./pages/AdminDashboard/usermodify";
import { JobCreate } from "./pages/AdminDashboard/JobCreate";
import { JobList } from "./pages/AdminDashboard/jobslist";
import ProfesionalPage from "./pages/propfesionalPage/ProfesionalPage";
import UserProfile from "./authentication/ProfileScreen/UserProfile";
import DetailService from "./components/detailService/DetailService";

import { useAuth0 } from "@auth0/auth0-react";
import ServicesDashboard from "./pages/AdminDashboard/servicesDashboard";
import Prueba from "./pages/AdminDashboard/filterprueba";

//token

// Default axios
//axios.defaults.baseURL = "https://deploy-pi-production-4388.up.railway.app/";
axios.defaults.baseURL = "http://localhost:3005/";

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const dispatch = useDispatch();

  const createUser = () => {
    const { given_name, nickname, family_name, email, picture } = user;
    let newUser = {
      firstName: given_name || "sin nombre",
      lastName: family_name || "sin apellido",
      email: email,
      user: nickname,
      imagePerfil: picture || "sin foto",
    };
    dispatch(createAndLogin(newUser));
  };

  if (isAuthenticated) {
    createUser();
  }

  let token = useSelector((state) => state.token);
  axios.defaults.headers.common["Authorization"] = token;

  // const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
    dispatch(getUsers());
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage isLoading={isLoading} />} />
          {/* Admin **********************************************************/}
          <Route exact path="/dashboard/user/detail" element={<ModifyUser />} />
          <Route exact path="/dashboard/users" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<DashboardContent />} />
          <Route exact path="/dashboard/jobs/create" element={<JobCreate />} />
          <Route exact path="/dashboard/jobs" element={<JobList />} />
          <Route exact path="/dashboard/services" element={<ServicesDashboard/>} />

          <Route exact path="/prueba" element={<Prueba/>} />

          {/* Components */}
          <Route exact path="/service" element={<ServicesPage />} />
          <Route exact path="/user/profile" element={<UserProfile />} />

          {/* Containers */}
          <Route exact path="/contact" element={<FormContact />} />
          <Route exact path="/create/service" element={<FormCreateService />} />
          <Route exact path="/user/register" element={<FormCreateUser />} />

          {/* Pruebas- testeos ***********************************************/}
          <Route path="/job/:id" element={<FilterService />} />
          <Route
            path="/professional/detail/:id"
            element={<DetailProfessional />}
          />
          <Route path="/service/detail/:id" element={<DetailService />} />
          <Route path="/formsss" element={<FormCreateProfessional />} />

          <Route path="/professional" element={<ProfesionalPage />} />

          {/*Profesionales */}
          {/* <Route path="/profesionales" element={<ProfesionalPage/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
