import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Switch, Route, useHistory } from 'react-router-dom';

import Layout from './layouts/Layout';
import SignIn from './screens/SignIn/SignIn'
import SignUp from './screens/SignUp/SignUp'
import MainContainer from './containers/MainContainer'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>
            <SignIn />
          </Route>
          <Route path='/register'>
            <SignUp />
          </Route>
          <Route path='/'>
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
