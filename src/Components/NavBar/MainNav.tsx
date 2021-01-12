import { Link } from 'react-router-dom';

import SignedInLink from './SignInNav';

function NavBar() {
  return (
    <nav className="container mx-auto">
      <div className="max-w-full mx-auto">
        <div className="relative flex items-center justify-between h-16">
          <Link to="/" className="text-black-500 font-bold">
            Calender TypeScript
          </Link>
          <SignedInLink />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
