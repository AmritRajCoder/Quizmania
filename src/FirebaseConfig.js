import firebase from 'firebase';

const firebaseConfig = {
   apiKey: "AIzaSyA5eNaccOePVAyWIFeJGXslDYYp7M6eHZk",
   authDomain: "quizmania-6ad0a.firebaseapp.com",
   projectId: "quizmania-6ad0a",
   storageBucket: "quizmania-6ad0a.appspot.com",
   messagingSenderId: "790529985553",
   appId: "1:790529985553:web:2f1bd6a42e21cc445c75b0"
 };
 
//initialise firebase
firebase.initializeApp(firebaseConfig);
export default firebase;