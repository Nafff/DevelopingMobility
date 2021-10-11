import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useState, useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";

import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import LandingPage from "./screens/LandingPage/LandingPage";
import MainContainer from "./containers/MainContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

const theme = createTheme({
  palette: {
    background: {
      default: "#F4EEF2",
    },
    primary: {
      main: "#85577B",
    },
    secondary: {
      main: "#8D7C95",
    },
  },
});

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/stretches");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/stretches");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/login">
            <SignIn handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <SignUp handleRegister={handleRegister} />
          </Route>
          <Route exact path="/">
            {currentUser ? (
              <MainContainer
                currentUser={currentUser}
                handleLogout={handleLogout}
              />
            ) : (
              <Redirect to="/welcome" />
            )}
          </Route>
          <Route path="/welcome">
            <LandingPage />
          </Route>
          <Route path="/">
            <MainContainer
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
              handleLogout={handleLogout}
            />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
