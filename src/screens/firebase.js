import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyD3vMo4Ain8ErPTljr1MXyoMalVXLu7OAw",
    authDomain: "se-project-81a89.firebaseapp.com",
    databaseURL: "https://se-project-81a89-default-rtdb.firebaseio.com",
    projectId: "se-project-81a89",
    storageBucket: "se-project-81a89.appspot.com",
    messagingSenderId: "17700065874",
    appId: "1:17700065874:web:e3191757efc54234b9458b"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  
  }
  export default firebase