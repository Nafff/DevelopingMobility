import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addStretchToRoutine, getOneRoutine } from '../../services/routines';

export default function RoutineDetail(props) {
  const [routine, setRoutine] = useState(null);
  const [selectedStretch, setSelectedStretch] = useState('');
  const { id } = useParams();
  const { stretches } = props;

  useEffect(() => {
    const fetchRoutine = async () => {
      const routineData = await getOneRoutine(id);
      setRoutine(routineData);
    };
    fetchRoutine();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedStretch(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stretch = await addStretchToRoutine(selectedStretch, id);
    setRoutine(stretch);
  };
  
  // add remove stretch functionality, can't add stretches unless on the edit page

  return (
    <div>
      <h3>{routine?.name}</h3>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} defaultValue='default'>
          <option disabled value='default'>
            -- Select a Stretch --
          </option>
          {stretches.map((stretch) => (
            <option value={stretch.id}>{stretch.name}</option>
          ))}
        </select>
        <button>Add</button>
      </form>
    </div>
  )
}
