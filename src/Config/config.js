import firebase from 'firebase';

 var DB_CONFIG = {
 
    apiKey: "AIzaSyA0UKpdzpd1TSuLObt8EfD5S2IF-p-DED8",
    authDomain: "searchsuperheroes.firebaseapp.com",
    databaseURL: "https://searchsuperheroes-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "searchsuperheroes",
    storageBucket: "searchsuperheroes.appspot.com",
    messagingSenderId: "1080057503087",
    appId: "1:1080057503087:web:89d33f367c533ca2365c9a",
    measurementId: "G-53TRBP5B98"
  // apiKey: "AIzaSyDyIZjzyH3VC1_m7IECqLFC5OxsKFJeQsQ",
  // authDomain: "search-superheroes.firebaseapp.com",
  // projectId: "search-superheroes",
  // storageBucket: "search-superheroes.appspot.com",
  // messagingSenderId: "647524770202",
  // appId: "1:647524770202:web:38a804516b982339379a23",
  // measurementId: "G-T5MG7SS4SK"
};

var fire = firebase.initializeApp(DB_CONFIG);
export default fire;

