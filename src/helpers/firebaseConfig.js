import firebase from 'firebase';
import firebaseui from 'firebaseui';

const config = {
  apiKey: 'AIzaSyCX-r4B1Hs8uNaySWZOdmUP4a9DS_C2OFE',
  authDomain: 'island-notes.firebaseapp.com',
  databaseURL: 'https://island-notes.firebaseio.com',
  storageBucket: 'island-notes.appspot.com',
  messagingSenderId: '1039269062579',
};

export const FBApp = firebase.initializeApp(config);
export const FBUIApp = new firebaseui.auth.AuthUI(firebase.auth(FBApp));
