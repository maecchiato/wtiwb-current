import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyCQPnAG2rtbcEL8LcpPQHdu9L0utermdWs",
    authDomain: "wffltmcms.firebaseapp.com",
    databaseURL: "https://wffltmcms.firebaseio.com",
    projectId: "wffltmcms",
    storageBucket: "wffltmcms.appspot.com",
    messagingSenderId: "61002641753"
  };

  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }