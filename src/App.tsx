import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter,
} from 'react-router-dom';
import { LOGIN_CHECK, SET_AUTH } from './redux/reducers/NotifierReducer';

import AuthRoute from './Routes/AuthRoute';
import DashboardRoute from './Routes/DashboardRoute';

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state: any) => state.notify.loggedIn);
  useEffect(() => {
    dispatch(LOGIN_CHECK());
    const result = sessionStorage.getItem('authToken');
    if (result !== null) {
      dispatch(SET_AUTH(result));
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
