import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter, useHistory,
} from 'react-router-dom';

import AuthRoute from './Routes/AuthRoute';
import DashboardRoute from './Routes/DashboardRoute';

function App() {
  const loggedIn = useSelector((state: any) => state.notify.loggedIn);
  const history = useHistory();
  // console.log('checking loggedin value', loggedIn);
  useEffect(() => {
    if (loggedIn) {
      history.push('/register');
    } else {
      // history.push('/login');
    }
  }, [loggedIn]);
  return (
    <BrowserRouter>
      <div className="App">
        {
            loggedIn
              ? (
                <DashboardRoute />
              )
              : (
                <AuthRoute />
              )
          }
      </div>
    </BrowserRouter>
  );
}

export default App;
