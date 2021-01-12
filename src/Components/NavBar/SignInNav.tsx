import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LOGUT_USER } from '../../redux/reducers/NotifierReducer';

function SignedInLink() {
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(LOGUT_USER());
  };
  return (
    <ul>
      <li>
        <NavLink onClick={() => handleClick()} className="btn btn-blue" to="/">
          Sign Out
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedInLink;
