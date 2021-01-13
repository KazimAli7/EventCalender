import { useEffect } from 'react';
import { useHistory } from 'react-router';
import Calender from './Calender';

function Main() {
  const history = useHistory();

  useEffect(() => {
    history.push('/calender');
  }, []);

  return (
    <div>
      <Calender />
    </div>
  );
}

export default Main;
