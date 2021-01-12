import { useSelector } from 'react-redux';
import {
  BrowserRouter,
} from 'react-router-dom';

import AuthRoute from './Routes/AuthRoute';
import DashboardRoute from './Routes/DashboardRoute';

function App() {
  const loggedIn = useSelector((state: any) => state.notify.loggedIn);
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
