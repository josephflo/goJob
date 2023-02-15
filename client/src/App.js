import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";

import Navbar from "./components/navbarPortada/NavBar";
import FormContact from "./components/Form/FormContact";

// import styles from "./style";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={LandingPage} />
        <Route path="/contact" component={FormContact} />
        <Route exact={HOME} component={<Home />} />
        <Route exact={LOGIN} component={<Login />} />
        <Route exact={PRIVATE} component={<Private />} />
        <Route exact={LOGOUT} component={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
