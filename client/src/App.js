// Dependencies
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

// Authentication
import UserProfile from "./authentication/ProfileScreen/UserProfile";
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
import ProfesionalPage from "./pages/propfesionalPage/ProfesionalPage";


// Default axios
axios.defaults.baseURL = "https://gojob2-production.up.railway.app/";
axios.defaults.headers.common["Authorization"] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiRnJheSIsImxhc3ROYW1lIjoiVGFwaWEiLCJlbWFpbCI6ImZyYXluaWxzb24yMDAzQGdtYWlsLmNvbSIsInVzZXIiOiJmcmF5IiwicGhvbmUiOiI5NTQxMiIsInJvbGUiOiJjb211biIsImlhdCI6MTY3NzQ2NTY5MCwiZXhwIjoxNjgwMDU3NjkwfQ.JV-v5jo_51h_rgmjlp6PrrGTV9NAOu9lzWMJnCXihJ0"
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
          {/* Admin **********************************************************/}
          <Route exact path="admin/jobs/create" element={<CreateJob />} />
          <Route exact path='admin/users' element={<UsersAdmin/>} />
          <Route exact path='admin/jobs' element={<JobAdmin/>} />
          <Route exact path="/dashboard/user/detail" element={<ModifyUser/>} />
                   
          <Route exact path="/dashboard/users" element={<Dashboard/>} />
          <Route exact path="/dashboard" element={<DashboardContent />} />
          <Route exact path="/dashboard/jobs/create" element={<JobCreate/>} />
          <Route exact path="/dashboard/jobs" element={<JobList />} />

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
            path="/detail/professional/:id"
            element={<DetailProfessional />}
          />
          <Route path="/formsss" element={<FormCreateProfessional />} />

          <Route path="/professional" element={<ProfesionalPage/>}/>

          {/*Profesionales */}
          {/* <Route path="/profesionales" element={<ProfesionalPage/>} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
