import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(process.env.REACT_APP_AUTH0_DOMAIN, process.env.REACT_APP_AUTH0_CLIENT_ID);
const domain = 'dev-n7ephpskn740wukr.us.auth0.com'
const clientId = 'oGbRakbXxn8Pac6TX0s25wmSgTzxleej'

// const onRedirectCallback = appState => {
//   history.push(
//     appState && appState.targetUrl
//       ? appState.targetUrl
//       : window.location.href = "http://localhost:3000/"
//   );
// };

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Auth0Provider domain='dev-n7ephpskn740wukr.us.auth0.com' clientId='oGbRakbXxn8Pac6TX0s25wmSgTzxleej' authorizationParams={{
        redirect_uri: window.location.origin,
      }} >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
