import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {cache} from "../NavBar/NavBar"
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogOut = () =>{
    logout({returnTo: window.location.origin})
    cache.remove("usuario")
  }
  return (
    <Button variant="text" onClick={()=> handleLogOut()} color="error" startIcon={<LogoutIcon />}>
      Log Out
    </Button>
  );
};

export default LogoutButton;