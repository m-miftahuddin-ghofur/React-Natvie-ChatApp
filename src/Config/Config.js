import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAvHN8BXIt2FE365W_ur-aVu5sNwcF9iHE",
    authDomain: "chatapp-59460.firebaseapp.com",
    databaseURL: "https://chatapp-59460.firebaseio.com",
    projectId: "chatapp-59460",
    storageBucket: "chatapp-59460.appspot.com",
    messagingSenderId: "328716417683",
    appId: "1:328716417683:web:7b656c7278b492901c2b66",
    measurementId: "G-ZPQG3NXESG"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

// Initialize Firebase
let app = null;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export const Db = app.database();
export const Auth = app.auth();
export const Fbs = firebase;