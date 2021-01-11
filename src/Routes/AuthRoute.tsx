import { Route, Switch } from 'react-router';
import Login from './auth/Login';
import Register from './auth/Register';

function AuthRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}

export default AuthRoute;
