import LandingPage from "./components/landingPage/landingPage";
import FormContact from './components/Form/FormContact.jsx'
import { Route, BrowserRouter, Switch } from "react-router-dom";
// import styles from "./style";

function App() {
  return (
<BrowserRouter>
    <div className="App">
      <Switch>
         <Route exact path='/' component= {LandingPage} />
         <Route exact path='/contact' component= {FormContact} />
    </Switch>
  </div>
  </BrowserRouter>

  );
}

export default App;
