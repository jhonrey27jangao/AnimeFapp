import * as firebase from "firebase/app";
import "@firebase/firestore";
import "@firebase/auth";
import "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyAxNImYwH-gCQBdB4iM5plL__4vo3H1uRg",
  authDomain: "socialmedia-28ac1.firebaseapp.com",
  databaseURL: "https://socialmedia-28ac1.firebaseio.com",
  projectId: "socialmedia-28ac1",
  storageBucket: "socialmedia-28ac1.appspot.com",
  messagingSenderId: "155433332329",
  appId: "1:155433332329:web:00140b9c28352de4b57cf8",
  measurementId: "G-WZ0H98LEY2",
};

export const fireBaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
// export const ServerTimeStamp = firebase.database.ServerValue.TIMESTAMP;
// export const firebaseDB = fireBaseApp.database();
// export const accountsRef = firebaseDB.child("accounts");
