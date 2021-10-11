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

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function RoutineDetail(props) {
  const [routine, setRoutine] = useState(null);
  const [selectedStretch, setSelectedStretch] = useState("");
  const { id } = useParams();
  const { stretches } = props;
  const [stretchesInRoutine, setstretchesInRoutine] = useState(
    new Array(stretches?.length).fill(false)
  );

  useEffect(() => {
    const fetchRoutine = async () => {
      const routineData = await getOneRoutine(id);
      setRoutine(routineData);
    };
    fetchRoutine();
  }, [id]);

  routine?.stretches.map((stretch) => {
    const index = stretches.indexOf(stretch.id);
    stretchesInRoutine[index] = true;
  });

  console.log(stretchesInRoutine)

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

  // add remove stretch works on back end, stretch isn't removed from option on front end. maybe once changed to list it will work

  return (
    <Paper style={{ maxHeight: 500, overflow: "auto" }}>
      <Box sx={{ flexGrow: 1, maxWidth: 1000, minWidth: 500 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              {routine?.name}
            </Typography>
            <Demo>
              {/* <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <TextField
                  fullWidth
                  label="Name a stretch"
                  id="fullWidth"
                  value={props.input}
                  onChange={props.handleSearchStretchChange}
                />
              </Box> */}
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
            </Demo>
          </Grid>
        </Grid>
      </Box>
      {/* <div>
        <form onSubmit={handleSubmit}>
          <select onChange={handleChange} defaultValue="default">
            <option disabled value="default">
              -- Select a Stretch --
            </option>
            {stretches.map((stretch) => (
              <option value={stretch.id}>{stretch.name}</option>
            ))}
          </select>
          <button>Remove</button>
        </form>
      </div> */}
    </Paper>
  );
}
