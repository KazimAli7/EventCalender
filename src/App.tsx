import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Routes/auth/Login';
import Register from './Routes/auth/Register';
import Calender from './Routes/Calender';

function App() {
  const loggedIn = useSelector((state: any) => state.notify.loggedIn);
  console.log('checking loggedin value', loggedIn);
  return (
    <BrowserRouter>
      <div className="App">
        {
            loggedIn
              ? (
                <div className="p-4">
                  <Switch>
                    <Route path="/" component={Calender} />
                  </Switch>
                </div>
              )
              : (
                <Switch>
                  <Route path="/" component={Login} />
                  <Route path="/register" component={Register} />
                </Switch>
              )
          }
      </div>
    </BrowserRouter>
  );
}

export default App;
