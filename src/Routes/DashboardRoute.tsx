import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';

import NavBar from '../Components/NavBar/MainNav';
import Calender from './main/Calender';
import Main from './main/Main';
import SideNavBar from '../Components/SideNavBar/SideNavBar';

function DashboardRoute() {
  const sideOpen = useSelector((state : any) => state.main.sideOpen);
  return (
    <div>
      <NavBar />
      {
        sideOpen
          ? <SideNavBar />
          : null
      }
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/calender" exact component={Calender} />
      </Switch>
    </div>
  );
}

export default DashboardRoute;
