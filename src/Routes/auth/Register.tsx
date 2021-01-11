/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import {
//   CreateUser, SetConfPassword, SetEmail, SetFirstName, SetLastName, SetPassword,
//   PasswordError,
//   PasswordLength,
// } from '../store/actions/Actions';

function Register() {
  const history = useHistory();
  //   const dispatch = useDispatch();
  const firstName = useSelector((state: any) => state.auth.firstname);
  const lastName = useSelector((state: any) => state.auth.lastname);
  const email = useSelector((state: any) => state.auth.email);
  const password = useSelector((state: any) => state.auth.password);
  const confPassword = useSelector((state: any) => state.auth.confpassword);
  const loggedIn = useSelector((state: any) => state.auth.loggedIn);
  const autherror = useSelector((state: any) => state.auth.autherror);

  useEffect(() => {
    if (loggedIn) {
      history.push('/main');
    }
  }, [loggedIn]);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // const validationArray = [];
    // if (password.length < 7) {
    //   validationArray.push('password length');
    // }
    // if (confPassword.length < 7) {
    //   validationArray.push('password length');
    // }
    // if (password !== confPassword) {
    //   validationArray.push('password do not match');
    //   dispatch(PasswordError());
    // }
    // if (validationArray.length > 0) {
    //   if (password !== confPassword) {
    //     validationArray.push('password do not match');
    //     dispatch(PasswordError());
    //   } else {
    //     dispatch(PasswordLength());
    //   }
    // } else if (password === confPassword) {
    //   const crediential = {
    //     email,
    //     password,
    //     firstName,
    //     lastName,
    //   };
    //   dispatch(CreateUser(crediential));
    // }
  };
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg"
        >

          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Register
          </h2>

          <form onSubmit={handleSubmit} className="mt-10">
            <label className="block text-xs font-semibold text-gray-600 uppercase">First Name</label>
            <input
              id="fname"
              type="text"
              name="fname"
              placeholder="first name"
              value={firstName}
            //   onChange={(e) => dispatch(SetFirstName(e.target.value))}
              autoComplete=""
              className="block w-full py-3 px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />

            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Last Name</label>
            <input
              id="lname"
              type="text"
              name="lname"
              placeholder="last name"
              value={lastName}
            //   onChange={(e) => dispatch(SetLastName(e.target.value))}
              autoComplete=""
              className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />
            <label className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="e-mail address"
              value={email}
            //   onChange={(e) => dispatch(SetEmail(e.target.value))}
              autoComplete="email"
              className="block w-full py-3 px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />

            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
            //   onChange={(e) => dispatch(SetPassword(e.target.value))}
              placeholder="password"
              autoComplete="current-password"
              className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />

            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Re-Enter Password</label>
            <input
              id="confpassword"
              type="password"
              name="confpassword"
              value={confPassword}
            //   onChange={(e) => dispatch(SetConfPassword(e.target.value))}
              placeholder="confirm password"
              autoComplete="current-password"
              className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />
            <button
              type="submit"
              // onSubmit={handleSubmit}
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Register
            </button>
            {
              autherror && autherror
                ? (
                  <div className="text-red-500 mt-8 uppercase text-center font-small">
                    {autherror}
                  </div>
                ) : null
            }
            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              Already registered?
              {' '}
              <a href="login" onClick={() => history.push('/')} className=" btn p-0 px-1 underline">
                Login
              </a>
              {' '}
              now
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
