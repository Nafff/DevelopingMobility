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
  const { id } = useParams();
  const { stretches } = props;
  const [isLoaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
  });

  useEffect(() => {
    const fetchRoutine = async () => {
      const routineData = await getOneRoutine(id);
      setRoutine(routineData);
    };
    fetchRoutine();
    setLoaded(true);
  }, [id]);

  useEffect(() => {
    const prefillFormData = () => {
      setFormData({
        name: routine?.name,
      });
    };
    prefillFormData();
  }, [routine]);

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRemove = async (stretch_id) => {
    const routine = await removeStretchFromRoutine(stretch_id, id);
    setRoutine(routine);
  };

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Grid item xs={12}>
      <Paper
        style={{ maxHeight: "80vh", overflow: "auto" }}
        sx={{ padding: 3 }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleRoutineUpdate(id, formData);
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id="filled-required"
                label="Routine Name"
                name="name"
                value={`${formData?.name}`}
                defaultValue={`${formData?.name}`}
                variant="filled"
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Name a muscle"
                id="fullWidth"
                value={props.input}
                onChange={props.handleSearchStretchChange}
              />
              <List>
                {routine?.stretches.map((stretch) => (
                  <ListItem
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleRemove(stretch.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
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
          <Button type="submit" variant="contained">
            Save Routine
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
