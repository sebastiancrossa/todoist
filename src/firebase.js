import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyDMI8wMX0dJok5BOelte82VAfp79QDuA8I',
  authDomain: 'todoist-951b2.firebaseapp.com',
  databaseURL: 'https://todoist-951b2.firebaseio.com',
  projectId: 'todoist-951b2',
  storageBucket: 'todoist-951b2.appspot.com',
  messagingSenderId: '66882618644',
  appId: '1:66882618644:web:0c5c992f30cce704c92e01'
});

export { firebaseConfig as Firebase };
