import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButtons = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button
        type="button"
        className="text-white content bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => loginWithRedirect()}
      >
        Ingresar
      </button>
    </div>
  );
};

export default LoginButtons;
