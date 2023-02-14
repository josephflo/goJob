import "./App.css";
import LandingPage from "./components/landingPage/landingPage";
import NavBarHome from "./components/navbarHome/navBarHome";
import NavbarInicioSecion from "./components/navbarInicioSesion/NavbarInicioSecion";
import Navbar from "./components/navbarPortada/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
