//eslint-disable react-hooks/rules-of-hooks

// Dependencies
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
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

import ContentGen, {
  contentGen,
} from "./pages/AdminDashboard/dashboardContentCarp/ContentGen";
import { DashboardContent } from "./pages/AdminDashboard/dashboardContentCarp/DashboardContent";
import ModifyUser from "./pages/AdminDashboard/usermodify";
import { JobCreate } from "./pages/AdminDashboard/JobCreate";
import { JobList } from "./pages/AdminDashboard/jobslist";
import ProfesionalPage from "./pages/propfesionalPage/ProfesionalPage";
import UserProfile from "./authentication/ProfileScreen/UserProfile";
import DetailService from "./components/detailService/DetailService";

// import OffersPage from "./pages/ProfileComun/OffersPage";
import OffersPageP from "./pages/perfilesUsuarios/OffersPageP";
import Jobs from "./pages/perfilesUsuarios/ProfielProfesional/Jobs";
import Postulaciones from "./pages/perfilesUsuarios/ProfielProfesional/Postulaciones";

import { useAuth0 } from "@auth0/auth0-react";
import ServicesDashboard from "./pages/AdminDashboard/serviceDashboard";
import { getService } from "./redux/actions/serviceActions";
import LoadingHomePage from "./components/loading/LoadingHomePage";

import MyProfile from "./pages/perfilesUsuarios/ProfileComun/MyProfile";
import FormUpdateUserAuth from "./containers/forms/formUpdateUserAuth/FormUpdateUserAuth";
import MyProfileP from "./pages/perfilesUsuarios/ProfielProfesional/MyProfileP";
import SuccessPago from "./pages/perfilesUsuarios/ProfielProfesional/pagos/SuccessPago";
import FailPago from "./pages/perfilesUsuarios/ProfielProfesional/pagos/FailPago";
import useUserLogin from "./helpers/customHooks/useUserLogin";
import AditionalInfo from "./authentication/components/AditionalInfo";
import FormEditProfile from "./containers/forms/formEditProfile/formEditProfile";

//token

// Default axios
//axios.defaults.baseURL = "https://deploy-pi-production-4388.up.railway.app/";
axios.defaults.baseURL = "https://gojob2-production.up.railway.app/";

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const dispatch = useDispatch();

  let token = useSelector((state) => state.token);

  const localStorage = window.localStorage.getItem("userStorage");

  axios.defaults.headers.common["Authorization"] = token || localStorage?.token;

  const { userInfo, isLogin } = useUserLogin();

  const createUser = () => {
    const { given_name, nickname, family_name, email, picture } = user;
    let newUser = {
      firstName: given_name || nickname,
      lastName: family_name || "sin apellido",
      email: email,
      user: nickname,
      imagePerfil: picture || "sin foto",
    };
    dispatch(createAndLogin(newUser));
  };

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      createUser();
    }
  }, [isAuthenticated]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} /> &&
          <Route exact path="/service" element={<ServicesPage />} /> &&
          <Route path="/professional" element={<ProfesionalPage />} />
          {!isLogin ? (
            <Route path="*" element={<LoadingHomePage />} />
          ) : (
            <>
              {/* Admin **********************************************************/}

              <Route
                exact
                path="/dashboard/user/detail"
                element={<ModifyUser />}
              />

              <Route exact path="/dashboard/users" element={<Dashboard />} />
              {isLogin && (
                <Route
                  exact
                  path="/dashboard"
                  element={
                    <ContentGen
                      isAuthenticated={isAuthenticated}
                      isLoading={isLoading}
                    />
                  }
                />
              )}
              <Route
                exact
                path="/dashboard/jobs/create"
                element={<JobCreate />}
              />
              <Route exact path="/dashboard/jobs" element={<JobList />} />
              <Route
                exact
                path="/dashboard/services"
                element={<ServicesDashboard />}
              />

              {/* Components */}
              <Route exact path="/service" element={<ServicesPage />} />
              <Route exact path="/user/profile" element={<UserProfile />} />
              {/* Authentication */}
              <Route exact path="/aditionalinfo" element={<AditionalInfo />} />

              {/* Containers */}
              <Route exact path="/contact" element={<FormContact />} />
              <Route
                exact
                path="/create/service"
                element={<FormCreateService />}
              />
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

              {/* ProfileComun***********************************************/}
              {/* <Route exact path="/profilec/:id" element={<OffersPage />} /> */}
              <Route exact path="/profilec/:id" element={<OffersPageP />} />
              <Route exact path="/profile/:id" element={<MyProfile />} />
              <Route
                exact
                path="/profilec/modificar"
                element={<FormUpdateUserAuth />}
              />
              <Route
                exact
                path="/profilec/modificardatos"
                element={<FormEditProfile />}
              />

              {/* ProfileProfessional ***********************************************/}
              <Route exact path="/myprofilep/:id" element={<MyProfileP />} />
              <Route exact path="/profilep/:id" element={<OffersPageP />} />
              <Route exact path="/profilep/jobs/:id" element={<Jobs />} />
              <Route
                exact
                path="/profilep/postulaciones/:id"
                element={<Postulaciones />}
              />

              {/*Profesionales */}
              {/* <Route path="/profesionales" element={<ProfesionalPage/>} /> */}
            </>
          )}
        </Routes>

        {/* Paginas para pago */}
        <Routes>
          <Route
            exact
            path="/stripe/:role/:idUser/success/:idProduct"
            element={<SuccessPago />}
          />
          <Route
            exact
            path="/stripe/:role/:idUser/fail/"
            element={<FailPago />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
