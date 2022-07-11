import { Link as RouterLink } from "react-router-dom";
import { AuthLayout, useForms } from "../../index";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
export const RegisterPage = () => {
  const initialForm = {
    displayName: "Dario",
    email: "correo@correo",
    password: "1234567",
  };
  const formValidations = {
    displayName: [
      (value) => value.length >= 1,
      "El debe de contener mas de 1 letra",
    ],
    email: [(value) => value.includes("@"), "El correo debe de tener un @"],
    password: [
      (value) => value.length >= 6,
      "El password debe de tener mas de 6 letras",
    ],
  };

  const {
    formState,
    onInputChague,
    onResetFrom,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForms(initialForm, formValidations);
  const { email, password, displayName } = formState;

  const onSubmit = (event) => {
    event.preventDefault();

    onResetFrom();
  };

  return (
    <AuthLayout title="Crear cuenta">
      <h1>FormValid {isFormValid ? "Valido" : "No valido"}</h1>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Escribe tu nombre"
              fullWidth
              onChange={onInputChague}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              name="email"
              value={email}
              placeholder="Escribe tu corre"
              fullWidth
              onChange={onInputChague}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              name="password"
              value={password}
              placeholder="Escribe tu contraseña"
              fullWidth
              onChange={onInputChague}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit">
                Registro
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              ingrear
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
