import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAL1YVQC-3vwh_vi-ZX5CRNmi6s_TxDn-s",
    authDomain: "awtermio.firebaseapp.com",
    projectId: "awtermio",
    storageBucket: "awtermio.appspot.com",
    messagingSenderId: "934612381452",
    appId: "1:934612381452:web:236d5b174f540df2182329",
    measurementId: "G-8NWNTK248W"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  export default database;