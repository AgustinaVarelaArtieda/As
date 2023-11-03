import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {cache} from "../NavBar/NavBar"
const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogOut = () =>{
    logout({returnTo: window.location.origin})
    cache.remove("usuario")
  }
  return (
    <button onClick={()=> handleLogOut()}>
      Log Out
    </button>
  );
};

export default LogoutButton;