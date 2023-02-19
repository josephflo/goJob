import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import Navbar from "./components/navbarPortada/NavBar";
import FormContact from "./components/FormContact/FormContact";
import Professionals from "./components/Profesional/Professionals";
import DetailCard from "./components/DetailCard/detailCard";
import Admin from "./components/Dashboard/Admi";


// import styles from "./style";

function App() {
  return (
    <>
      {/* <div className="w-[80%] p-4 rounded-[20px] bg-color1">
        <h1 className="text-dimBlue">Hola Mundo</h1>
      </div>
      <h2 className={styles.boxWidth}>Prueba</h2> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/contact" component={FormContact} />
          <Route path='/service' component={Professionals} />
          <Route path='/admin' component={Admin} />

          <Route
            path="/detail/:id"
            render={({ match }) => <DetailCard id={match.params.id} />}
          />
        </Switch>
      </BrowserRouter>
      {/* <LandingPage /> */}
    </>
  );
}

export default App;
