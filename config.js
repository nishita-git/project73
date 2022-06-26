import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAIXwgYUlOPInM2M6ttnrsIQQmVQD4ZRos",
  authDomain: "e-ride-de1d7.firebaseapp.com",
  projectId: "e-ride-de1d7",
  storageBucket: "e-ride-de1d7.appspot.com",
  messagingSenderId: "575524225348",
  appId: "1:575524225348:web:a4f98afb523ed880691711"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
