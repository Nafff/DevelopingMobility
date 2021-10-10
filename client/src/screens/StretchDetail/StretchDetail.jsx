import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneStretch } from "../../services/stretches";
import { addStretchToRoutine } from "../../services/routines";

import Paper from "@mui/material/Paper";

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
    <Paper elevation={3}>
      
    </Paper>
    <Paper elevation={3}>
      <div>
        <h3>{stretch?.name}</h3>
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
      </div>
    </Paper>
  );
}
