import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

const handleLogin = async () =>{
    loginWithPopup();
}


  return <Button variant="contained" onClick={() => handleLogin()}>Log In</Button>;
};

export default LoginButton;