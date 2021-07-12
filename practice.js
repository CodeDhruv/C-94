var firebaseConfig = {
    apiKey: "AIzaSyDpe3Wu8fh9XLdqfLHi11zGRXFbBVDli4I",
    authDomain: "c-94-7a8d7.firebaseapp.com",
    databaseURL: "https://c-94-7a8d7-default-rtdb.firebaseio.com",
    projectId: "c-94-7a8d7",
    storageBucket: "c-94-7a8d7.appspot.com",
    messagingSenderId: "266455895847",
    appId: "1:266455895847:web:23a08ac002958a57882302",
    measurementId: "G-0LR3EZXX77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}