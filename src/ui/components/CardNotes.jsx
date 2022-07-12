import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveNote } from "../../index";
export const CardNotes = ({ title = "", body, date, imagenUrls = [] }) => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.journal);
  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);
  const onActiveTask = () => {
    const note = { title, body, date, imagenUrls };
    dispatch(setActiveNote(note));
  };
  return (
    <ListItem>
      <ListItemButton onClick={onActiveTask}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
