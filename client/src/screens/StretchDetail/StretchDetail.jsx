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
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

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
    await addStretchToRoutine(selectedRoutine, id);
  };

  return (
    <>
      <Stack spacing={2} direction="column">
        <Paper elevation={3} sx={{ padding: 3 }}>
          <h3>{stretch?.name}</h3>
          <ReactPlayer url={stretch?.video_url} />
        </Paper>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <div>
            <Stack spacing={2} direction="column">
              <Avatar
                alt="Stretch Picture"
                src={stretch?.picture_url}
                sx={{ width: 200, height: 200 }}
              />
              <h4>{stretch?.muscle_worked}</h4>
            </Stack>
            <p>{stretch?.description}</p>
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Add to Routine
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={selectedRoutine}
                  label="Add to Routine"
                  onChange={handleChange}
                >
                  {routines?.map((routine) => (
                    <MenuItem value={routine.id}>{routine.name}</MenuItem>
                  ))}
                </Select>
                <Button type="submit" variant="contained">
                  Add
                </Button>
              </FormControl>
            </form>
          </div>
        </Paper>
      </Stack>
    </>
  );
}
