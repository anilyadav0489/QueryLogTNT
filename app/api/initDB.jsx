import firebase from 'firebase';

try{
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDjV-4WwU_nmnsYtSyH9gD4zYqmRrl6_Ew",
    authDomain: "sunny-d446c.firebaseapp.com",
    databaseURL: "https://sunny-d446c.firebaseio.com",
    projectId: "sunny-d446c",
    storageBucket: "sunny-d446c.appspot.com",
    messagingSenderId: "439776600844"
  };

  firebase.initializeApp(config);
}
catch(e){
  alert('error while initializing firebase');
}
export var firebaseRef = firebase.database().ref();
export default firebase;

 //firebaseRef.child('students').push({});
// firebaseRef.update({
//   appName: 'Todo Application'
// });
//
// firebaseRef.once('value').then((snapshot)=>{
//   console.log("Data fetched successful", snapshot.key, snapshot.val());
// }, (e)=>{
//   console.log("Error occured"+e);
// });
//
// var todosRef = firebaseRef.child('todos');
// todosRef.push({
//   text: 'Todo 1'
// });
