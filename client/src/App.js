// Dependencies
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

// Authentication
import Private from "./authentication/Private";   

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
import UsersAdmin from './components/DashboardPrueba/UsersAdmin.jsx'
import FilterService from "./containers/filters/FilterService";


// Actions
import { getJobs } from "./redux/actions/jobActions";
import { getUsers } from "./redux/actions/userActions";
import JobAdmin from "./components/DashboardPrueba/JobAdmin";
import FormCreateProfessional from "./containers/forms/formCreateUser/formCreateProfessional/FormCreateProfessional";


import { DashboardContent } from "./pages/AdminDashboard/dashboardContent";
import ModifyUser  from "./pages/AdminDashboard/usermodify";
import { JobCreate } from "./pages/AdminDashboard/JobCreate";
import { JobList } from "./pages/AdminDashboard/jobslist";
import ServicesDashboard from "./pages/AdminDashboard/servicesDashboard";
import Prueba from "./pages/AdminDashboard/filterprueba";


// Default axios
axios.defaults.baseURL = "http://localhost:3005/";
axios.defaults.headers.common["Authorization"] =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiQXoiLCJsYXN0TmFtZSI6IkFtZWZnY2EiLCJlbWFpbCI6ImZkYWZmc2ZwQGVtYWlsLmNvbSIsInVzZXIiOiJjYXAyMzMyIiwiY2l0eSI6IkR1YmFpIiwicGhvbmUiOjM0ODczNTM1LCJhZGRyZXNzIjoiQXYuIFRyb3lhIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjc3MDA5ODY5LCJleHAiOjE2Nzk2MDE4Njl9.Y8goayh2w8lbZt1qqZDq9hYwkxIIAKnw9dFo74sakUA";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
    dispatch(getUsers());
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* pruebas */}
          <Route exact path="/prueba" element={<Prueba/>} />


          {/* Admin Dashboard************************************************/}
          <Route exact path="/dashboard/user/detail" element={<ModifyUser/>} />
          <Route exact path="/dashboard/users" element={<Dashboard/>} />
          <Route exact path="/dashboard" element={<DashboardContent />} />
          <Route exact path="/dashboard/jobs/create" element={<JobCreate/>} />
          <Route exact path="/dashboard/jobs" element={<JobList />} />
          <Route exact path="/dashboard/services" element={<ServicesDashboard/>} />

          {/* Components */}
          <Route exact path="/service" element={<ServicesPage />} />
          <Route exact path="/user/profile" element={<Private />} />

          {/* Containers */}
          <Route exact path="/contact" element={<FormContact />} />
          <Route exact path="/create/service" element={<FormCreateService />} />
          <Route exact path="/user/register" element={<FormCreateUser />} />

          {/* Pruebas- testeos ***********************************************/}
          <Route path="/job/:id" element={<FilterService />} />
          <Route
            path="/detail/professional/:id"
            element={<DetailProfessional />}
          />
          <Route path="/formsss" element={<FormCreateProfessional />} />

          <Route path="/professional" element={<UsersPage/>}/>

          {/*Profesionales */}
          {/* <Route path="/profesionales" element={<ProfesionalPage/>} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
