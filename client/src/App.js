import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Switch, Route, useHistory } from "react-router-dom";

import Layout from "./layouts/Layout";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import MainContainer from "./containers/MainContainer";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#85577B",
    },
    secondary: {
      main: "#8D7C95",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route path="/login">
              <SignIn />
            </Route>
            <Route path="/register">
              <SignUp />
            </Route>
            <Route path="/">
              <MainContainer />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
