import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  removeStretchFromRoutine,
  getOneRoutine,
} from "../../services/routines";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

export default function RoutineDetail(props) {
  const [routine, setRoutine] = useState(null);
  const [selectedStretch, setSelectedStretch] = useState("");
  const { id } = useParams();
  const { stretches } = props;

  useEffect(() => {
    const fetchRoutine = async () => {
      const routineData = await getOneRoutine(id);
      setRoutine(routineData);
    };
    fetchRoutine();
  }, [id]);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedStretch(value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const routine = await removeStretchFromRoutine(selectedStretch, id);
  //   setRoutine(routine);
  // };

  const handleRemove = async (stretch_id) => {
    const routine = await removeStretchFromRoutine(stretch_id, id);
    setRoutine(routine);
  };

  return (
    <Grid item xs={12}>
      <Paper
        style={{ maxHeight: "80vh", overflow: "auto" }}
        sx={{ padding: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography sx={{ mb: 2 }} variant="h6" component="div">
              {routine?.name}
            </Typography>
            <TextField
              fullWidth
              label="Name a stretch"
              id="fullWidth"
              value={props.input}
              onChange={props.handleSearchStretchChange}
            />
            <List>
              {routine?.stretches.map((stretch) => (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={stretch.picture_url} />
                  </ListItemAvatar>
                  <Link href={`/stretches/${stretch.id}`}>
                    <ListItemText
                      primary={stretch.name}
                      secondary={stretch.muscle_worked}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Link href={`/routines/${routine?.id}/edit`}>
          <Button variant="contained">Edit Routine</Button>
        </Link>
      </Paper>
    </Grid>
  );
}
