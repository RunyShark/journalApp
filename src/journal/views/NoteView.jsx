import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import {
  ImagenGallery,
  setActiveNote,
  useForms,
  startSaveNote,
} from "../../index";

export const NoteView = () => {
  const { active, messageSaved } = useSelector((state) => state.journal);
  const dispatch = useDispatch();
  const { onInputChague, onResetFrom, formState, body, date, title } =
    useForms(active);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);
  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

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
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }} onClick={onSaveNote}>
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
