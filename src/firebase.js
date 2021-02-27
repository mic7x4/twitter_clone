import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC2K5fTfZl90iWMlTa8Zq_UOLTm_RpCVT0",
  authDomain: "twitter-clone-4d6a0.firebaseapp.com",
  projectId: "twitter-clone-4d6a0",
  storageBucket: "twitter-clone-4d6a0.appspot.com",
  messagingSenderId: "49991690094",
  appId: "1:49991690094:web:a1e1fdf422be8e55c9c37f",
  measurementId: "G-J1KN5GCX31"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;