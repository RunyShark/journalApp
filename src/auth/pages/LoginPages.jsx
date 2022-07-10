import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import {
  AuthLayout,
  useForms,
  chekigAuthentication,
  startGoogleSingIn,
} from "../../index";

export const LoginPages = () => {
  const { auth } = useSelector((state) => state.auth);
  const dispach = useDispatch();
  const { email, password, onInputChague, onResetFrom } = useForms({
    email: "correo@correo",
    password: 1234,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispach(chekigAuthentication());
    onResetFrom();
  };

  const onGoogleSingIn = (event) => {
    event.preventDefault();
    dispach(startGoogleSingIn());
    onResetFrom();
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              name="email"
              value={email}
              onChange={onInputChague}
              placeholder="Escribe tu corre"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              name="password"
              value={password}
              onChange={onInputChague}
              placeholder="Escribe tu contraseña"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit">
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth onClick={onGoogleSingIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
