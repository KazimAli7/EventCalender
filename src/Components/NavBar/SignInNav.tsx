import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { LogOut } from '../store/actions/Actions';

function SignedInLink() {
//   const dispatch = useDispatch();
  const handleClick = () => {
    // dispatch(LogOut());
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
