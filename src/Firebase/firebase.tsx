import firebase from 'firebase/app';
import 'firebase/firebase-app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAG15dY_YKHKfU_cjMcU-CpmL7ZT7no1ZE',
  authDomain: 'typscr.firebaseapp.com',
  projectId: 'typscr',
  storageBucket: 'typscr.appspot.com',
  messagingSenderId: '1030659389540',
  appId: '1:1030659389540:web:4c0c1a15de514f14b48771',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
