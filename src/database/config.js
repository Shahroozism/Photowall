import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyBFUPil0sR9yu1Em0slH_CF8O6Cp-TX4o4",
    authDomain: "photowall-65315.firebaseapp.com",
    databaseURL: "https://photowall-65315.firebaseio.com",
    projectId: "photowall-65315",
    storageBucket: "photowall-65315.appspot.com",
    messagingSenderId: "109640130787",
    appId: "1:109640130787:web:df7c20f3acd448b8"
  };

firebase.initializeApp(config)

const database = firebase.database()

export {database}