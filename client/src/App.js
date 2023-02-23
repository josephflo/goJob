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

// Components

// Containers
import FormContact from "./containers/forms/formContact/FormContact";
import FormCreateService from "./containers/forms/formCreateService/FormCreateService";
import CreateJob from "./containers/createJob/CreateJob";
import FormCreateUser from "./containers/forms/formCreateUser/FormCreateUser";

// Actions
import { getJobs } from "./redux/actions/jobActions";
import { getUsers } from "./redux/actions/userActions";

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
          {/* Admin **********************************************************/}
          <Route exact path="admin/create/job" element={<CreateJob />} />

          {/* Components */}
          <Route exact path="/service" element={<ServicesPage />} />
          <Route exact path="/user/profile" element={<Private />} />

          {/* Containers */}
          <Route exact path="/contact" element={<FormContact />} />
          <Route exact path="/create/service" element={<FormCreateService />} />
          <Route exact path="/user/register" element={<FormCreateUser />} />

          {/* Pruebas- testeos ***********************************************/}
          <Route exact path="/users" element={<UsersPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
