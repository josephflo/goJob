import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
// import LandingPage from "./components/landingPage/landingPage";
// import FormContact from "./containers/Form/FormContact";
// import DetailCard from "./components/detailCard/DetailCard";
// =======
import LandingPage from "./components/landingPage/landingPage";
import Navbar from "./components/navbarPortada/NavBar";
import FormContact from "./components/FormContact/FormContact";
import Professionals from "./components/Profesional/Professionals";
import DetailCard from "./components/DetailCard/detailCard";
import Admin from "./components/Dashboard/Admi";

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
import FormCreateUser from "./components/FormCreateUser/FormCreateUser";
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
        <Switch>
          {/* Components */}
          <Route exact path="/" component={LandingPage} />
          <Route path="/contact" component={FormContact} />
          <Route exact path="/user" component={Users} />
          <Route exact path="/service" component={Services} />
          <Route path="/profesionals" component={Professionals} />
          <Route path="/admin" component={Admin} />
          {/* <Route path="/createPablo" component={FormCreateUser} /> */}

          <Route
            path="/detail/:id"
            render={({ match }) => <DetailCard id={match.params.id} />}
          />
          {/* Containers */}
          <Route exact path="/user/register" component={Register} />
          <Route path="/user/login" component={Login} />
          <Route path="/job" component={AddJob} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
