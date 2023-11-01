import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogOut/Logout";
import MisCompras from "../Compras/MisCompras";

const Usuario = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <MisCompras idAuth={user.sub}/>
        <LogoutButton/>
      </div>
    )
  );
};

export default Usuario;