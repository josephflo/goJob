import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import LandingPage from "./components/landingPage/landingPage";
import FormContact from "./containers/Form/FormContact";
// import LandingPage from "./components/landingPage/landingPage";
import Navbar from "./components/navbarPortada/NavBar";
import Professionals from "./components/Profesional/Professionals";
import DetailCard from "./components/DetailCard/detailCard";
import Private from "./components/auth0/Private";

// Containers
import Register from "./containers/register/Register";
import Login from "./containers/login/Login";
import AddJob from "./containers/addJob/AddJob";

import axios from "axios";
import Users from "./components/Users/Users";
import Services from "./components/services/Services";
import FormCreateUser from "./components/FormCreateUser/FormCreateUser";
import Jobs from "./components/jobs/Jobs";
import Job from "./components/CardJobs/Job";
import FormCreateService from "./components/FormCreateService/FormCreateService";

axios.defaults.baseURL = "http://localhost:3005/";
axios.defaults.headers.common["Authorization"] =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiQXoiLCJsYXN0TmFtZSI6IkFtZWZnY2EiLCJlbWFpbCI6ImZkYWZmc2ZwQGVtYWlsLmNvbSIsInVzZXIiOiJjYXAyMzMyIiwiY2l0eSI6IkR1YmFpIiwicGhvbmUiOjM0ODczNTM1LCJhZGRyZXNzIjoiQXYuIFRyb3lhIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjc3MDA5ODY5LCJleHAiOjE2Nzk2MDE4Njl9.Y8goayh2w8lbZt1qqZDq9hYwkxIIAKnw9dFo74sakUA";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Components */}
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/contact" element={<FormContact />} />
          <Route exact path="/service" element={<Professionals />} />
          <Route exact path="/user" element={<Users />} />
          <Route exact path="/service" element={<Services />} />
          <Route path="/user/profile" element={<Private />} />
          <Route path="/contact" element={<FormContact />} />
          <Route exact path="/user" element={<Users />} />
          <Route path="/service" element={<Professionals />} />
          <Route path="/job" element={<Job />} />
          <Route path="/createService" element={<FormCreateService />} />

          <Route
            path="/detail/:id"
            render={({ match }) => <DetailCard id={match.params.id} />}
          />

          {/* ADMIN */}
          <Route exact path="/admin/service" element={<Services />} />
          <Route exact path="/admin/job" element={<AddJob />} />

          {/* Containers */}
          <Route exact path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/job" element={<AddJob />} />
          <Route path="/user/login" element={Login} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
