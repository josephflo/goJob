import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButtons from "./LogoutButtons";

const Private = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div class=" w-120 p-10 bg-white rounded-lg mx-auto flex flex-col items-center my-12">
        <img
          class="w-1/8 rounded-full h-auto"
          src={user.picture}
          alt={user.name}
        />
        <h1 class="text-lg font-bold">{user.name}</h1>
        <p>{user.nickname}</p>
        <p>{user.email}</p>
        <p class="text-xs mt-4">{user.updated_at}</p>
        <div class= "mt-3">
          <LogoutButtons />
        </div>
      </div>
    )
  );
};

// email
// : 
// "joneba01@gmail.com"
// email_verified
// : 
// true
// family_name
// : 
// "Flores"
// given_name
// : 
// "Jose"
// locale
// : 
// "es"
// name
// : 
// "Jose Flores"
// nickname
// : 
// "joneba01"
// picture
// : 
// "https://lh3.googleusercontent.com/a/AEdFTp78M1awwNhz3kmjj_pQJ3E_2MqtGw6ZbCZhpItDvg=s96-c"
// sub
// : 
// "google-oauth2|111794552723027916599"
// updated_at
// : 
// "2023-02-21T12:59:57.955Z"
export default Private;
