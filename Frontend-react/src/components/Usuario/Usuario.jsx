import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogOut/Logout";
import MisCompras from "../Compras/MisCompras";
import Avatar from "@mui/material/Avatar";
import { Divider, Grid, Typography } from "@mui/material";
import Admin from "../Admin/Admin";

const Usuario = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
        <Grid container direction="column" spacing={2} sx={{ mb: ".5rem", pl: "2.5rem", pr: "2rem", pt: ".5rem"}} >
            <Grid item xs container spacing={2} sx={{mb:"1rem"}}>
              <Grid item>
                <Avatar src={user.picture} alt={user.name} sx={{ width: '5rem', height: '5rem' }} variant="rounded"/>
              </Grid>

              <Grid item xs container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h3" color= "primary">{user.name}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">{user.email}</Typography>
                </Grid>
              </Grid>

              <Grid item>
                <LogoutButton/>
              </Grid>
            </Grid>
            
            <Divider/>

            <Grid item xs>
              {user.email==="agusvarela5@gmail.com"||user.email==="andresinfernoxii@gmail.com"?
                <Admin/>
                :                
                <MisCompras idAuth={user.sub}/>
                }                  
            </Grid>
        </Grid>
    )
  );
};

export default Usuario;