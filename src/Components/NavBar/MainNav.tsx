/* eslint-disable no-use-before-define */
import React from 'react';

// PACKAGES
import { Link } from 'react-router-dom';
import SignedInLink from './SignInNav';

// import SignedOutLink from '../SignedOutLink';

function NavBar() {
  return (
    <nav className="bg-white-800">
      <div className="max-w-full mx-auto">
        <div className="relative flex items-center justify-between h-16">
          <Link to="/" className="text-red-500 font-bold">
            Calender TypeScript
          </Link>
          <SignedInLink />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
