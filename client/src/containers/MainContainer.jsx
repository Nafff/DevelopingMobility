import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import {
  getAllRoutines,
  postRoutine,
  deleteRoutine,
  putRoutine,
  getOneRoutine,
} from "../services/routines";
import { getAllStretches } from "../services/stretches";

import Layout from "../layouts/Layout";
import Stretches from "../screens/Stretches/Stretches";
import StretchDetail from "../screens/StretchDetail/StretchDetail";
import UserProfile from "../screens/UserProfile/UserProfile";
import EditUserProfile from "../screens/EditUserProfile/EditUserProfile";
import RoutineDetail from "../screens/RoutineDetail/RoutineDetail";
import EditRoutine from "../screens/EditRoutine/EditRoutine";
import Home from "../screens/Home/Home";

export default function MainContainer(props) {
  const [routines, setRoutines] = useState([]);
  const [stretches, setStretches] = useState([]);
  const [input, setInput] = useState([]);
  const [fitleredStretches, setFilteredStretches] = useState(stretches);
  const history = useHistory();

  useEffect(() => {
    const fetchRoutines = async () => {
      const routineList = await getAllRoutines();
      setRoutines(routineList);
    };
    fetchRoutines();
  }, []);

  useEffect(() => {
    const fetchStretches = async () => {
      const stretchList = await getAllStretches();
      setStretches(stretchList);
    };
    fetchStretches();
  }, []);

  const handleRoutineCreate = async (routineData) => {
    const newRoutine = await postRoutine(routineData);
    setRoutines((prevState) => [...prevState, newRoutine]);
    history.push("/routines");
  };

  const handleRoutineDelete = async (id) => {
    await deleteRoutine(id);
    setRoutines((prevState) =>
      prevState.filter((routineItem) => routineItem.id !== id)
    );
  };

  const handleRoutineUpdate = async (id, routineData) => {
    const updatedRoutine = await putRoutine(id, routineData);
    setRoutines((prevState) =>
      prevState.map((routine) => {
        return routine.id === Number(id) ? updatedRoutine : routine;
      })
    );
    history.push("/routines");
  };

  const handleSearchStretchChange = (e) => {
    if (e.target.value !== '') {
      const results = stretches.filter((stretch) => {
        return stretch.name.toLowerCase().startsWith(e.target.value.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFilteredStretches(results);
    } else {
      setFilteredStretches(stretches);
      // If the text field is empty, show all users
    }

    setInput(e.target.value);
  }

  return (
    <div className="mainDiv">
      <Layout currentUser={props.currentUser} handleLogout={props.handleLogout}>
        <Switch>
          <Route path="/stretches/:id">
            <StretchDetail routines={routines} />
          </Route>
          <Route path="/stretches">
            <Stretches fitleredStretches={fitleredStretches} input={input} handleSearchStretchChange={handleSearchStretchChange} />
          </Route>
          <Route path="/users/:id">
            <UserProfile currentUser={props.currentUser} />
          </Route>
          <Route path="/users/:id/edit">
            <EditUserProfile currentUser={props.currentUser} />
          </Route>
          <Route path="/routines/:id">
            <RoutineDetail
              routines={routines}
              handleRoutineUpdate={handleRoutineUpdate}
              stretches={stretches}
              setStretches={setStretches}
            />
          </Route>
          <Route path="/routines/:id/edit">
            <EditRoutine
              routines={routines}
              handleRoutineUpdate={handleRoutineUpdate}
              stretches={stretches}
              setStretches={setStretches}
            />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}
