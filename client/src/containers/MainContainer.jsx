import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Stretches from '../screens/Stretches/Stretches'
import StretchDetail from '../screens/StretchDetail/StretchDetail'
import UserProfile from '../screens/UserProfile/UserProfile'
import EditUserProfile from '../screens/EditUserProfile/EditUserProfile'
import RoutineDetail from '../screens/RoutineDetail/RoutineDetail'
import EditRoutine from '../screens/EditRoutine/EditRoutine'
import LandingPage from "../screens/LandingPage/LandingPage";
import Home from "../screens/Home/Home";

export default function MainContainer() {
  return (
    <Switch>
      <Route path="/stretches">
        <Stretches />
      </Route>
      <Route path="/stretches/:id">
        <StretchDetail />
      </Route>
      <Route path="/users/:id">
        <UserProfile />
      </Route>
      <Route path="/users/:id/edit">
        <EditUserProfile />
      </Route>
      <Route path="/routines/:id">
        <RoutineDetail />
      </Route>
      <Route path="/routines/:id/edit">
        <EditRoutine />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
}
