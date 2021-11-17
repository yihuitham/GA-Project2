import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export default function AppFirebase() {
  return (
    <>
      <button
        onClick={() => {
          firebaseAppAuth.signInWithPopup(provider);
        }}
      >
        Sign in
      </button>
      <button
        onClick={() => {
          firebaseAppAuth.signOut();
        }}
      >
        Sign out
      </button>
    </>
  );
}
