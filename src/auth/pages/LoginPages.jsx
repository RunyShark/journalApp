import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
} from "@mui/material";
import {
  AuthLayout,
  useForms,
  chekigAuthentication,
  startGoogleSingIn,
  startLoginWithEmailPassword,
} from "../../index";

const formValidations = {
  email: [(value) => value.includes("@"), "El correo no es valido"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener mas de 6 letras",
  ],
};
const initialForm = {
  email: "",
  password: "",
};

export const LoginPages = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const [formSubmire, setformSubmire] = useState(false);
  const dispach = useDispatch();
  const {
    email,
    password,
    onInputChague,
    onResetFrom,
    isFormValid,
    emailValid,
    passwordValid,
  } = useForms(initialForm, formValidations);
  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmire(true);
    if (!isFormValid) return;
    dispach(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSingIn = (event) => {
    event.preventDefault();
    setformSubmire(true);

    dispach(startGoogleSingIn());
    onResetFrom();
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
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
              error={!!emailValid && formSubmire}
              helperText={formSubmire && emailValid}
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
              error={!!passwordValid && formSubmire}
              helperText={formSubmire && passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={onGoogleSingIn}
                disabled={isAuthenticating}
              >
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
