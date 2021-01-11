import { Route, Switch } from 'react-router';

import Calender from './Calender';

function DashboardRoute() {
  return (
    <Switch>
      <Route path="/calender" exact component={Calender} />
    </Switch>
  );
}

export default DashboardRoute;
