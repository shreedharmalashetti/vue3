import {firebase} from '@firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

//import store from "./store";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyCGp5MJU0KUn7vG9jWbiULhC5RAGtNh1rs",
  authDomain: "vue1-6a407.firebaseapp.com",
  projectId: "vue1-6a407",
  storageBucket: "vue1-6a407.appspot.com",
  messagingSenderId: "604955066176",
  appId: "1:604955066176:web:26bf49c0155dfbd3f544a5",
  measurementId: "G-YWJQ8EL6Z3"
};
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()


// export utils/refs
export {
  db,
  auth,
  storage,
 
}