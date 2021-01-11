import firebase from '../Firebase/firebase';

interface LOGINS {
    email: string,
    password: string,
}

export default async function LOGIN_USER(crediential : LOGINS) {
  try {
    const result = await firebase.auth().signInWithEmailAndPassword(
      crediential.email,
      crediential.password,
    );
    return result;
  } catch (error) {
    return false;
  }
}
