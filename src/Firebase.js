import firebase from 'firebase';

const firebaseConfig = {

  apiKey: "AIzaSyAI8FucIm3gwxulmWipUR1-TQ0FyRqLxi4",
  authDomain: "tourist-guide-ffeb8.firebaseapp.com",
  databaseURL: "https://tourist-guide-ffeb8-default-rtdb.firebaseio.com",
  projectId: "tourist-guide-ffeb8",
  storageBucket: "tourist-guide-ffeb8.appspot.com",
  messagingSenderId: "273999994210",
  appId: "1:273999994210:web:726f8232f88a3de5ad603b",
  measurementId: "G-DBLS0DJJFD"

}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;