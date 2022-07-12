import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { ImagenGallery, useForms } from "../../index";

export const NoteView = () => {
  const { active } = useSelector((state) => state.journal);
  const { onInputChague, onResetFrom, formState, body, date, title } =
    useForms(active);

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          08 de julio 2022
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Gurdar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Título"
          value={title}
          name="title"
          onChange={onInputChague}
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          value={body}
          name="body"
          onChange={onInputChague}
          placeholder="Que sucedío en el dia de hoy"
          minRows={5}
        />
      </Grid>
      <ImagenGallery />
    </Grid>
  );
};
