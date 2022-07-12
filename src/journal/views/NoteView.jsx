import { useMemo, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import {
  DeleteOutlined,
  SaveOutlined,
  UpcomingOutlined,
} from "@mui/icons-material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import {
  ImagenGallery,
  setActiveNote,
  useForms,
  startSaveNote,
  startUploadingFiles,
  startDeletingNote,
} from "../../index";

export const NoteView = () => {
  const inputRef = useRef();
  const { active, messageSaved, isSaving } = useSelector(
    (state) => state.journal
  );
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

  const onFileInputChange = ({ target }) => {
    const { files } = target;
    if (files === 0) return;
    dispatch(startUploadingFiles(files));
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
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
        <input
          type="file"
          multiple
          onChange={onFileInputChange}
          style={{ display: "none" }}
          ref={inputRef}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => inputRef.current.click()}
        >
          <UpcomingOutlined />
        </IconButton>
        <Button
          color="primary"
          sx={{ padding: 2 }}
          onClick={onSaveNote}
          disabled={isSaving}
        >
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
      <Grid container justifyContent="end">
        <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
          <DeleteOutlined />
          Eliminar
        </Button>
      </Grid>
      <ImagenGallery images={active.imagenUrls} />
    </Grid>
  );
};
