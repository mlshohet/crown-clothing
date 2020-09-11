//Firebase manual configuration for Google authentication

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCaHb1a4BvuAiyOKfI-DyKw2lZDgwt3Huk",
    authDomain: "crown-db-79251.firebaseapp.com",
    databaseURL: "https://crown-db-79251.firebaseio.com",
    projectId: "crown-db-79251",
    storageBucket: "crown-db-79251.appspot.com",
    messagingSenderId: "747470026393",
    appId: "1:747470026393:web:e2c63a05ef095cc3feaa08",
    measurementId: "G-E1J2PQM36S"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' }); //Always triggers the Google popup
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

