import { Route, Switch } from 'react-router';
import NavBar from '../Components/NavBar/MainNav';

import Calender from './main/Calender';
import Main from './main/Main';

function DashboardRoute() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/calender" exact component={Calender} />
      </Switch>
    </div>
  );
}

export default DashboardRoute;
