import { NavLink } from 'react-router-dom';

function SignedInLink() {
  const handleClick = () => {
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
