import { Route, Switch } from 'react-router';
import NavBar from '../Components/NavBar/MainNav';

import Calender from './main/Calender';

function DashboardRoute() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={Calender} />
        <Route path="/calender" exact component={Calender} />
      </Switch>
    </div>
  );
}

export default DashboardRoute;
