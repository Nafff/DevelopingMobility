import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneStretch } from "../../services/stretches";
import { addStretchToRoutine } from "../../services/routines";

import ReactPlayer from "react-player";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function StretchDetail(props) {
  const [stretch, setStretch] = useState(null);
  const [selectedRoutine, setSelectedRoutine] = useState("");
  const { id } = useParams();
  const { routines } = props;

  useEffect(() => {
    const fetchStretch = async () => {
      const stretchData = await getOneStretch(id);
      setStretch(stretchData);
    };
    fetchStretch();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedRoutine(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stretch = await addStretchToRoutine(selectedRoutine, id);
    setStretch(stretch);
  };

  return (
    <>
      <Paper elevation={3}>
        <h3>{stretch?.name}</h3>
        <ReactPlayer url={stretch?.video_url} />
      </Paper>
      <Paper elevation={3}>
        <div>
          <Stack spacing={2} direction="row">
            <Avatar
              alt="Remy Sharp"
              src={stretch?.picture_url}
              sx={{ width: 200, height: 200 }}
            />
            <h4>{stretch?.muscle_worked}</h4>
          </Stack>
          <p>{stretch?.description}</p>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Favorite</Button>
          </Stack>
          <form onSubmit={handleSubmit}>
            <select onChange={handleChange} defaultValue="default">
              <option disabled value="default">
                -- Select a Routine --
              </option>
              {routines.map((routine) => (
                <option value={routine.id}>{routine.name}</option>
              ))}
            </select>
            <button>Add</button>
          </form>
          <Autocomplete
            multiple
            id="tags-filled"
            options={routines?.map((routine) => routine.name)}
            // defaultValue={routines?.filter(routine => routine.stretches.includes(stretch)).map(routine => routine.name)}
            // defaultValue={[top100Films[13].title]}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="freeSolo"
                placeholder="Favorites"
              />
            )}
          />
        </div>
      </Paper>
    </>
  );
}
