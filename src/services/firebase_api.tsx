import moment from 'moment';

import firebase from '../Firebase/firebase';

interface LOGINS {
    email: string,
    password: string,
}

interface REGISTER {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
}

export const LOGIN_CHECK = async () => {
  try {
    const result = await firebase.auth().currentUser;
    return result?.uid;
  } catch (error) {
    return false;
  }
};

export const LOGIN_USER = async (crediential : LOGINS) => {
  try {
    const result = await firebase.auth().signInWithEmailAndPassword(
      crediential.email,
      crediential.password,
    );
    return result.user?.uid;
  } catch (error) {
    return false;
  }
};

export const CREATE_USER = async (crediential : REGISTER) => {
  try {
    const result = await firebase.auth().createUserWithEmailAndPassword(
      crediential.email,
      crediential.password,
    ).catch((error) => error);
    if (result.code) {
      return result;
    } if (result.code === undefined) {
      const MainResult = await firebase.firestore().collection('Users').add({
        email: crediential.email,
        firstName: crediential.firstName,
        lastName: crediential.lastName,
        password: crediential.password,
        uid: result.user?.uid,
        CreatedOn: moment().format('MMMM Do YYYY, h:mm:ss a'),
      });
      return MainResult;
    }
    return result;
  } catch (error) {
    return false;
  }
};
