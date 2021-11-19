import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addStretchToRoutine } from "../../services/routines";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "@mui/material/Link";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Stretches(props) {
  const [selectedRoutine, setSelectedRoutine] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedRoutine(value);
  };

  const handleSubmit = async (e, stretch_id) => {
    e.preventDefault();
    await addStretchToRoutine(selectedRoutine, stretch_id);
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
              Stretches
            </Typography>
            <TextField
              fullWidth
              label="Name a muscle"
              id="fullWidth"
              value={props.input}
              onChange={props.handleSearchStretchChange}
            />
            <List>
              {props.fitleredStretches?.map((stretch) => (
                <ListItem
                  secondaryAction={
                    <form onSubmit={() => handleSubmit(stretch.id)}>
                      <FormControl sx={{ minWidth: 120 }}>
                        <Stack spacing={2} direction="row">
                          <InputLabel id="demo-simple-select-label" sx={{ paddingLeft: 3 }}>
                            Routine
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={selectedRoutine}
                            label="Routine"
                            onChange={handleChange}
                            sx={{ minWidth: 120 }}
                          >
                            {props.routines?.map((routine) => (
                              <MenuItem value={routine.id}>
                                {routine.name}
                              </MenuItem>
                            ))}
                          </Select>
                          <Button type="submit" variant="contained">
                            Add
                          </Button>
                        </Stack>
                      </FormControl>
                    </form>
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
      </Paper>
    </Grid>
  );
}
