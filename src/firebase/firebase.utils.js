import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA7DCgEDS9C4Bxblub-iH-YKjFhejamwjI",
  authDomain: "ecommerce-493c5.firebaseapp.com",
  databaseURL: "https://ecommerce-493c5.firebaseio.com",
  projectId: "ecommerce-493c5",
  storageBucket: "ecommerce-493c5.appspot.com",
  messagingSenderId: "230137626678",
  appId: "1:230137626678:web:3d839d46d6b13c49031897",
  measurementId: "G-8LDB4FKT0H",
};

export const createProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating User", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
