import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { removeStretchFromRoutine, getOneRoutine } from '../../services/routines';

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
    const routine = await removeStretchFromRoutine(selectedStretch, id);
    setRoutine(routine);
  };
  
  // add remove stretch works on back end, stretch isn't removed from option on front end. maybe once changed to list it will work

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
        <button>Remove</button>
      </form>
    </div>
  )
}
