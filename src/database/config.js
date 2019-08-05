import * as firebase from 'firebase';

  var config = {
    apiKey: ""
    authDomain: "photowall-65315.firebaseapp.com",
    databaseURL: "https://photowall-65315.firebaseio.com",
    projectId: "photowall-65315",
    storageBucket: "photowall-65315.appspot.com",
    messagingSenderId: "109640130787",
    appId: ""
  };

firebase.initializeApp(config)

const database = firebase.database()

export {database}
