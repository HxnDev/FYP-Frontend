import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDwXPM5WreD45w9BIthuXKud78SAaAsc3o",
    authDomain: "login-c840a.firebaseapp.com",
    projectId: "login-c840a",
    storageBucket: "login-c840a.appspot.com",
    messagingSenderId: "729700661460",
    appId: "1:729700661460:web:0a3aaad3bdd829d9f66341"
  };

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;