import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAkKTnKUzwEeHZARfE_oXkjVGOh969VajE",
    authDomain: "fir-52bcf.firebaseapp.com",
    projectId: "fir-52bcf",
    storageBucket: "fir-52bcf.appspot.com",
    messagingSenderId: "825544318576",
    appId: "1:825544318576:web:b9ab9f27e99735a2b11eb5"
  };

  const firebaseApp = firebase.initializaApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export { db }