import firebase from '../Firebase/firebase';

interface AuthToken {
  authToken: string
}

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

interface EVENT_DETAILS {
  end: Date,
  start: Date,
  title: String,
  authToken: string,
  CreatedOn: Date,
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
        CreatedOn: new Date(),
      });
      return MainResult;
    }
    return result;
  } catch (error) {
    return false;
  }
};

export const LOGOUT_USER = async () => {
  try {
    const result = await firebase.auth().signOut();
    return result;
  } catch (error) {
    return false;
  }
};

export const ADD_EVENTDETAIL = async (cred: EVENT_DETAILS) => {
  try {
    const result = await firebase.firestore().collection('Event_Details').add({
      title: cred.title,
      end: cred.end,
      start: cred.start,
      user_id: cred.authToken,
      CreatedOn: new Date(),
    });
    const updateDoc = await result.update({
      id: result.id,
    }).then(() => true);
    return updateDoc;
  } catch (error) {
    return false;
  }
};
export const GET_EVENTS = async (crediential: AuthToken) => {
  const array : any = [];
  const result = await firebase.firestore().collection('Event_Details').where('user_id', '==', crediential).get();
  result.forEach((docs) => {
    array.push(docs.data());
  });
  return array;
};

export const DELETE_EVENTS = async (crediential: string) => {
  const result = await firebase.firestore().collection('Event_Details').doc(crediential).delete();
  return result;
};
