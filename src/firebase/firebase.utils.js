//Firebase manual configuration for Google authentication

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDF-DyDdAd5Q94hoeKggMDgnXIfnpvvzOQ",
    authDomain: "crown-db-64b7f.firebaseapp.com",
    databaseURL: "https://crown-db-64b7f.firebaseio.com",
    projectId: "crown-db-64b7f",
    storageBucket: "crown-db-64b7f.appspot.com",
    messagingSenderId: "103942797496",
    appId: "1:103942797496:web:25aa64109be1e75f8c5c4d",
    measurementId: "G-SC4NDHL49V"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();
  if(!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return(userRef);
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); //Always triggers the Google popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

