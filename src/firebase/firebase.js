import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAG7GeumhjkzWYLOwas2uaVp6fuj2Bal0U",
  authDomain: "expensify-45844.firebaseapp.com",
  databaseURL: "https://expensify-45844.firebaseio.com",
  projectId: "expensify-45844",
  storageBucket: "expensify-45844.appspot.com",
  messagingSenderId: "155864094317"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Andrii King'
});